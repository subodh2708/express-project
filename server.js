const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  { id: 0, name: "Subodh Singh" },
  { id: 1, name: "Banti Singh" },
  { id: 2, name: "Avantika singh" },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "missing friend name",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };

  friends.push(newFriend);
  res.json(newFriend);
});

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
