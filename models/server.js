const express = require('express');
const cors = require('cors');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';

    // Middlewares
    this.middlewares();

    this.routes();
  }

  middlewares() {
    // cors
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // directorio público
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usersPath, require('../routes/user.router'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server run in port', this.port);
    });
  }
}

module.exports = Server;