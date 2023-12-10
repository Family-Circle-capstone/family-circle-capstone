import { GetParameterCommand, SSMClient } from "@aws-sdk/client-ssm";
import express from 'express';
import path from 'path';
import twilio from 'twilio';
import sgMail from '@sendgrid/mail';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';

const AccessToken = twilio.jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const app = express();
const port = PORT || 5000;

const ssmClient = new SSMClient({ region: "us-east-2" });

const getParameter = async (parameterName) => {
  const command = new GetParameterCommand({ Name: parameterName, WithDecryption: true });
  const response = await ssmClient.send(command);
  return response.Parameter.Value;
}

const initializeConfig = async () => {
  const TWILIO_API_KEY_SID = await getParameter("/amplify/familycircle/twilio/api_key_sid");
  const TWILIO_API_KEY_SECRET = await getParameter("/amplify/familycircle/twilio/api_key_secret");
  const TWILIO_ACCOUNT_SID = await getParameter("/amplify/familycircle/twilio/account_sid");
  const SENDGRID_API_KEY = await getParameter("/amplify/familycircle/sendgrid/api_key");

  // Create the Twilio client
  const twilioClient = twilio(
    TWILIO_API_KEY_SID,
    TWILIO_API_KEY_SECRET,
    { accountSid: TWILIO_ACCOUNT_SID }
  );

  // Set the API Key for SendGrid Mail
  sgMail.setApiKey(SENDGRID_API_KEY);
};

// Use the Express JSON middleware
app.use(express.json());

// Function to find or create a room
const findOrCreateRoom = async (roomName) => {
  try {
    await twilioClient.video.v1.rooms(roomName).fetch();
    return false; //Room already exists
  } catch (error) {
    if (error.code == 20404) {
      await twilioClient.video.v1.rooms.create({
        uniqueName: roomName,
        type: "go",
      });
      return true;
    } else {
      throw error;
    }
  }
};

// Function to generate an Access Token
const getAccessToken = (roomName) => {
  const token = new AccessToken(
    TWILIO_ACCOUNT_SID,
    TWILIO_API_KEY_SID,
    TWILIO_API_KEY_SECRET,
    { identity: uuidv4() }
  );
  const videoGrant = new VideoGrant({ room: roomName });
  token.addGrant(videoGrant);
  return token.toJwt();
};

const sendEmail = (toEmail, roomName) => {
  const msg = {
    to: toEmail,
    from: 'info@familycircle.site',
    subject: 'Your loved one is callign you!',
    html: `Your loved one is calling you!<br><a href=https://www.familycircle/video-call/${roomName}">Answer Now</a>`,
  };

  sgMail
    .send(msg)
    .then(() => console.log('Email sent'))
    .catch((error) => console.error(error));
};

// Route to join a room
app.post("/join-room", async (req, res) => {
  if (!req.body || !req.body.roomName) {
    return res.status(400).send("Must include roomName argument.");
  }
  const roomName = req.body.roomName;
  const email = req.body.email;

  const isNewRoom = await findOrCreateRoom(roomName);
  const token = getAccessToken(roomName);

  // Send an email only if a new room is created and if an email is provided
  if (isNewRoom && email) {
    sendEmail(email, roomName);
  }

  res.send({ token: token });
});

// Serve Vue app in production
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'dist')));

// All other routes should redirect to the Vue app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Call initializeConfig at the start of your application
initializeConfig().then(() => {
  // Start the Express server inside the then() block
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(error => {
  console.error("Failed to initialize configuration:", error);
});
