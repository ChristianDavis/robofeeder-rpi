/*
 * Serve content over a socket
 */

module.exports = function (socket) {
  
  socket.emit('send:start', {
    status: 'Running'
  });
  
  socket.emit('send:stop', {
    status: 'Stopped'
  });

};
