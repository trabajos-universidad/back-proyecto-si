const express = require('express');
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

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
    this.app.get('/api', (req, res) => {
      res.send({
        msg: 'get API',
      });
    });

    this.app.post('/api', (req, res) => {
      res.send({
        msg: 'POST API',
      });
    });

    this.app.put('/api', (req, res) => {
      res.send({
        msg: 'Put API',
      });
    });

    this.app.delete('/api', (req, res) => {
      res.send({
        msg: 'Delete API',
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('servidor en linea: ', this.port);
    });
  }
}

module.exports = Server;
