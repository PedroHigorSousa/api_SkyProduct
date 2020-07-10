const express = require('express'); // Importação do express
const mongoose = require('mongoose'); // importação do mongoose
const requireDir = require('require-dir'); // Realiza a importação de todos os models da API.

// Iniciando o APP
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true },);

requireDir('./src/models');



// Importação das rotas
app.use('/api', require('./src/routes'));

app.listen(3001);