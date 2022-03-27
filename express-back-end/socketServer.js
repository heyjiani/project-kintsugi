const socket = require("socket.io");

const users = {};

const listen = (httpServer) => {
  const io = socket(httpServer, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  //all the socket connections comes here//
  io.on("connection", (socket) => {
    if (!users[socket.id]) {
      users[socket.id] = socket.id;
    }
    console.log("socket is connected", socket.id);
    //when server connect, "me" to socket.id//
    socket.emit("me", socket.id);
    io.sockets.emit("allUsers", users);

    socket.on("callUser", (data) => {
      io.to(data.userToCall).emit("callUser", {
        signal: data.signalData,
        from: data.from,
        name: data.name,
      });
    });

    socket.on("answerCall", (data) => {
      console.log("answerCall", data);
      io.to(data.to).emit(
        "callAccepted",
        data.signal
      );
    });

    //when server disconnect//
    socket.on("disconnect", () => {
      console.log("Server is disconnected.");
      //finish callEnded event for everyone//
      socket.broadcast.emit("CallEnded");
    });
  });

  return io;
};

module.exports = { listen };
