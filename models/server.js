const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.path = {
      test:"/test"
    }

    this.middlewares();
    this.routes();
  }

  middlewares() {
    //? cors para transferencia de datos
    this.app.use(cors());

    //?forma de desirle a node que use el directorio publico
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.path.test, require("../routes/test"))

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('servidor en linea: ', this.port);
    });
  }
}

module.exports = Server;
