const express = require('express')
const app = express();

app.use(express.json());

const port = process.env.PORT || 3100;

const routes = require('./api/routes');
routes(app);
app.listen(port, function() {
   console.log('Escuchando en el puerto: ' + port);
});