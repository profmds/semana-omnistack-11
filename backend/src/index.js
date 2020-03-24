//Na variável express eu faço uma requisição carregando o framework express para auxiliar no dev
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
//Com o framework carregado, inicializamos uma variável responsável por manipular as funcionalidades do framework
const app = express();
app.use(cors());
//O sistema não consegue identificar JSON como um formado "entendível",
//Com o comando abaixo eu digo para ele que nas requisições vamos utilizar o formato json
app.use(express.json());
app.use(routes);

app.listen(3333);