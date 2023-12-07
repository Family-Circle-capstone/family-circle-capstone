import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import twilio from 'twilio';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const AccessToken = twilio.jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const app = express();
const port = process.env.PORT || 5000;

// Use the Express JSON middleware
app.use(express.json());

// Create the Twilio client
const twilioClient = twilio(
  process.env.TWILIO_API_KEY_SID,
  process.env.TWILIO_API_KEY_SECRET,
  { accountSid: process.env.TWILIO_ACCOUNT_SID }
);

// Function to find or create a room
const findOrCreateRoom = async (roomName) => {
  try {
    await twilioClient.video.rooms(roomName).fetch();
  } catch (error) {
    if (error.code == 20404) {
      await twilioClient.video.rooms.create({
        uniqueName: roomName,
        type: "go",
      });
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

// Route to join a room
app.post("/join-room", async (req, res) => {
  if (!req.body || !req.body.roomName) {
    return res.status(400).send("Must include roomName argument.");
  }
  const roomName = req.body.roomName;
  await findOrCreateRoom(roomName);
  const token = getAccessToken(roomName);
  res.send({ token: token });
});

// Serve Vue app in production
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'dist')));

// All other routes should redirect to the Vue app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
