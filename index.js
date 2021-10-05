require('dotenv').config();

const Server = require('./models/server'); //?importacion del modelo servidor

const servidor = new Server();

servidor.listen();
