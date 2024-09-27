const socket = require("socket.io");

let users = {};

const listen = (httpServer) => {
  const io = socket(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  //all the socket connections comes here//
  io.on("connection", (socket) => {
    if (!users[socket.id]) {
      users[socket.id] = socket.id;
    };

    //when server connect, "me" to socket.id//
    socket.emit("me", socket.id);
    io.sockets.emit("allUsers", users);

    socket.on("callUser", (data) => {
      io.to(data.userToCall).emit("callUser", {
        signal: data.signalData,
        from: data.from,
      });
    });

    socket.on("answerCall", (data) => {
      io.to(data.to).emit(
        "callAccepted",
        data.signal
      );
    });

    //when server disconnect//
    socket.on("disconnect", () => {
      //finish callEnded event for everyone//
      socket.broadcast.emit("CallEnded");
      users = {}
    });
  });

  return io;
};

module.exports = { listen };
