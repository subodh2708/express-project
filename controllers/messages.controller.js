function getMessages(req, res) {
  res.send("<h1>I am header</h1>");
}

function postMessages(req, res) {
  console.log("waiting for messeges");
}

module.exports = {
  getMessages,
  postMessages,
};
