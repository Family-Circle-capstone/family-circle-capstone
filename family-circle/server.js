import dotenv from 'dotenv';
dotenv.config();
import { v4 as uuidv4 } from 'uuid';
import twilio from 'twilio';
const { AccessToken } = twilio.jwt;
const { VideoGrant } = AccessToken;
import express from 'express';

const app = express();
const port = 5000;

// Use the Express JSON middleware
app.use(express.json());

// Create the Twilio client
const twilioClient = twilio(
  process.env.TWILIO_API_KEY_SID,
  process.env.TWILIO_API_KEY_SECRET,
  { accountSid: process.env.TWILIO_ACCOUNT_SID }
);

const findOrCreateRoom = async (roomName) => {
  try {
    // Use v1.rooms instead of the deprecated video.rooms
    await twilioClient.video.v1.rooms(roomName).fetch();
  } catch (error) {
    if (error.code === 20404) {
      await twilioClient.video.v1.rooms.create({
        uniqueName: roomName,
        type: "go",
      });
    } else {
      throw error;
    }
  }
};

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

app.post("/join-room", async (req, res) => {
  // Return 400 if the request has an empty body or no roomName
  if (!req.body || !req.body.roomName) {
    return res.status(400).send("Must include roomName argument.");
  }
  const roomName = req.body.roomName;

  // Find or create a room with the given roomName
  await findOrCreateRoom(roomName);

  // Generate an Access Token for a participant in this room
  const token = getAccessToken(roomName);

  res.send({ token: token });
});

app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the Express server
app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
