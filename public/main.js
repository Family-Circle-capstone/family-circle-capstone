const form = document.getElementById("room-name-form");
const roomNameInput = document.getElementById("room-name-input");
const container = document.getElementById("video-container");

const startRoom = async (event) => {
  event.preventDefault();
  form.style.visibility = "hidden";
  const roomName = roomNameInput.value;

  const response = await fetch("/join-room", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ roomName: roomName }),
  });
  const { token } = await response.json();

  const room = await joinVideoRoom(roomName, token);

  // Render the local participant's video and audio tracks
  handleConnectedParticipant(room.localParticipant);

  // Render any remote participants' video and audio tracks
  room.participants.forEach(handleConnectedParticipant);

  // Setup event listeners for participant connection and disconnection
  room.on("participantConnected", handleConnectedParticipant);
  room.on("participantDisconnected", handleDisconnectedParticipant);

  // Setup event listeners for page unload
  window.addEventListener("pagehide", () => room.disconnect());
  window.addEventListener("beforeunload", () => room.disconnect());
};

const joinVideoRoom = async (roomName, token) => {
  const room = await Twilio.Video.connect(token, {
    room: roomName,
  });
  return room;
};

const handleConnectedParticipant = (participant) => {
  let participantDiv = document.getElementById(participant.identity);
  if (!participantDiv) {
    participantDiv = document.createElement("div");
    participantDiv.setAttribute("id", participant.identity);
    container.appendChild(participantDiv);
  }

  participant.tracks.forEach((trackPublication) => {
    handleTrackPublication(trackPublication, participant);
  });

  participant.on("trackPublished", handleTrackPublication);
};

const handleTrackPublication = (trackPublication, participant) => {
  function displayTrack(track) {
    const participantDiv = document.getElementById(participant.identity);
    participantDiv.append(track.attach());
  }

  if (trackPublication.track) {
    displayTrack(trackPublication.track);
  }

  trackPublication.on("subscribed", displayTrack);
};

const handleDisconnectedParticipant = (participant) => {
  participant.removeAllListeners();
  const participantDiv = document.getElementById(participant.identity);
  participantDiv.remove();
};

form.addEventListener("submit", startRoom);
