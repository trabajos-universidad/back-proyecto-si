const mongoose = require('mongoose');

const dbConecction = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('base de datos online');
  } catch (error) {
    console.log(error);
    throw new Error('Fallo la coneccion con la base de datos');
  }
};

module.exports = {
  dbConecction,
};
