const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const dbConfig = require("./config/dbConfig");
const port = process.env.PORT || 5000;
const usersRoute = require("./routes/userRoute");
const chatsRoute = require("./routes/chatsRoute");
const messagesRoute = require("./routes/messagesRoute");
app.use(cors());
app.use(express.json());

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("join-room", (userId) => {
    socket.join(userId);
  });

  // send message to clients (who are present in members array)
  socket.on("send-message", (message) => {
    io.to(message.members[0])
      .to(message.members[1])
      .emit("receive-message", message);
  });
});
app.use("/api/users", usersRoute);
app.use("/api/chats", chatsRoute);
app.use("/api/messages", messagesRoute);

server.listen(port, () => console.log(`Server running on port ${port}`));
