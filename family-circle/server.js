import express from 'express';
import path from 'path';
import twilio from 'twilio';
import sgMail from '@sendgrid/mail';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

const AccessToken = twilio.jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const app = express();
const port = process.env.PORT || 5000;
let sgkey = '';

// Configure local development environment variables
dotenv.config({ path: './.env.production' });
sgkey = sgkey + process.env.SENDGRID_API_KEY;

// Create the Twilio client
const twilioClient = twilio(
  process.env.TWILIO_API_KEY_SID,
  process.env.TWILIO_API_KEY_SECRET,
  { accountSid: process.env.TWILIO_ACCOUNT_SID }
);

// Set the API Key for SendGrid Mail
sgMail.setApiKey(sgkey);

// Use the Express JSON middleware
app.use(express.json());

// Function to find or create a room
const findOrCreateRoom = async (roomName) => {
  try {
    await twilioClient.video.v1.rooms(roomName).fetch();
    return false; // Room already exists
  } catch (error) {
    if (error.code == 20404) {
      await twilioClient.video.v1.rooms.create({
        uniqueName: roomName,
        type: "go",
      });
      return true; // New room created
    } else {
      throw error;
    }
  }
};

// Function to generate an Access Token
const getAccessToken = (roomName) => {
  const token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY_SID,
    process.env.TWILIO_API_KEY_SECRET,
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
    subject: 'Your loved one is calling you!',
    html: `Your loved one is calling you!<br><a href=https://www.familycircle/video-call/${roomName}">Answer Now</a>`,
  };

  sgMail
    .send(msg)
    .then(() => console.log('Email sent'))
    .catch((error) => {
      console.error('Error sending email:', error);
      console.error(error.response.body);
    });
};

// Route to join a room
app.post("/join-room", async (req, res) => {
  console.log("Join-room route accessed", req.body);
  if (!req.body || !req.body.roomName) {
    return res.status(400).send("Must include roomName argument.");
  }
  const roomName = req.body.roomName;
  const email = req.body.email;

  const isNewRoom = await findOrCreateRoom(roomName);
  console.log(`Room ${roomName} creation status:`, isNewRoom);
  const token = getAccessToken(roomName);

  // Send an email only if a new room is created and if an email is provided
  if (isNewRoom && email) {
    console.log(`Sending email to ${email} for room ${roomName}`);
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

// Start the Express Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});