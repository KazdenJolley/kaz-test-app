const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 5000;

const server = express();
server.use(express.json());
server.use(cors());

server.use('/api/*', (_, res) => {
  res.json({ message: 'Welcome to the kaz-test-app API!'});
})

server.listen(port, () => {
  console.log(`\n*** Listening on ${port} ***\n`);
})