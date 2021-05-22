const express = require('express');
const http = require('http');
const mySql = require('mysql');

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
