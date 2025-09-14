const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  { id: 0, name: "Subodh Singh" },
  { id: 1, name: "Banti Singh" },
  { id: 2, name: "Avantika singh" },
];

app.get("/friends", (req, res) => {
  res.send(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendIndex = Number(req.params.friendId);
  const friend = friends[friendIndex];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send("<h1>I am header</h1>");
});

app.post("/messages", (req, res) => {
  console.log("waiting for messeges");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
