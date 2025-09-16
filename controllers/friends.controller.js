const model = require("../models/friends.model");

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "missing friend name",
    });
  }

  const newFriend = {
    name: req.body.name,
    id: model.length,
  };

  model.push(newFriend);
  res.json(newFriend);
}

function getFriends(req, res) {
  res.send(model);
}

function getFriend(req, res) {
  const friendIndex = Number(req.params.friendId);
  const friend = model[friendIndex];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
}

module.exports = {
  getFriend,
  getFriends,
  postFriends,
};
