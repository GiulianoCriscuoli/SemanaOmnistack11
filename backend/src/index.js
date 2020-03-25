const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // aqui pegamos a variável routes, diferente do express ele vem com
// './routes' pois não é um pacote e sim uma variável

const app = express();

app.use(cors());
app.use(express.json()); // ele interpreta o json
app.use(routes);



app.listen(3333);