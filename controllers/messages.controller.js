const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "skimountain.jpg"));

  // res.send("<h1>I am header</h1>");
}

function postMessages(req, res) {
  console.log("waiting for messeges");
}

module.exports = {
  getMessages,
  postMessages,
};
