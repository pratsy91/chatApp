const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const dbConfig = require("./config/dbConfig");
const port = process.env.PORT || 5000;
const usersRoute = require("./routes/userRoute");
app.use(cors());
app.use(express.json());

const server = require("http").createServer(app);

app.use("/api/users", usersRoute);

server.listen(port, () => console.log(`Server running on port ${port}`));
