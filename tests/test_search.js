const request = require('request');

const port = process.env.PORT || 3100;
const hostUrl = 'http://localhost:'+port

request(hostUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log('Testeando index, esperaomos 10 registros.');
        result = JSON.parse(body);
        console.log("Correcto cantidad: " + result.length)
    } else {
        console.log(response)
        console.log("Error consultando el servicio con estatus: " + response.statusCode);
    }
});

request(hostUrl + '/Series', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log('Testeando búsqueda, esperamos 5 registros');
        result = JSON.parse(body);
        console.log("Correcto cantidad: " + result.length)
    } else {
        console.log(response)
        console.log("Error consultando el servicio con estatus: " + response.statusCode);
    }
});