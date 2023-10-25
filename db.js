const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/login';

mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(() => console.log('Error de conexión a la base de datos', err));
module.exports = mongoose;