function sendSocketClient(restMethod, client) {
  return function(req, res, next) {
    client.broadcast.emit(restMethod, res.resource);
  }
}

export default {
  sendSocketClient
};
