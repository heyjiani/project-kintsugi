const socket = require('socket.io');

const listen = (httpServer) => {
  const io = socket(httpServer, {
    cors: {
      origin: "http//localhost:3000",
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    socket.emit("me", socket.id);

    socket.on("disconnect", () => {
      socket.broadcast.emit("Call Ended")
    });

    socket.on("callUser", (data) => {
      socket.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name });
    });

    socket.on("answerCall", (data) => {
      socket.to(data.to).emit("call Accepted"), data.signal
    });

  });


}

module.exports = { listen };