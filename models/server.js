const express = require('express');
const cors = require('cors');
const { dbConecction } = require('../database/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.path = {
      test: '/test',
      cliente: '/api/cliente',
    };

    this.conectarDB();

    this.middlewares();

    this.routes();
  }

  //? conctar a la bd
  async conectarDB() {
    await dbConecction();
  }

  middlewares() {
    //? cors para transferencia de datos
    this.app.use(cors());

    //?parseo del body
    this.app.use(express.json());

    //?forma de desirle a node que use el directorio publico
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.path.cliente, require('../routes/cliente'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('servidor en linea: ', this.port);
    });
  }
}

module.exports = Server;
