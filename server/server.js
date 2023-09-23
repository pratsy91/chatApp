const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const server = require("http").createServer(app);

server.listen(port, () => console.log(`Server running on port ${port}`));
