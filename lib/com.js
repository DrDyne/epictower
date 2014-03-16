var http = require('http');
module.exports = function (server) {
  var io = require('socket.io').listen(server);

  io.sockets.on('connection', function (socket) {
    socket.emit('hello', {foo: 'bar'});
  });
};
