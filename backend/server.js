const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.json({message: 'Eathmed API is up and running'})
});

module.exports = server;