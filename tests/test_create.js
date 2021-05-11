const http = require('http')
const port = process.env.PORT || 3100;

console.log('Creando registros')
for (var i = 0; i < 10; i++) {
    sendMovie(i, 'Prueba ' + i, 2020, i >= 5 ? 'Series' : 'Peliculas');
}

function sendMovie(id, title, year, type) {
    var data = JSON.stringify({
        id, title, year, type
    });
    var postRequest = http.request({
        hostname: 'localhost',
        port: port,
        path: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }, res => {
        console.log(`Registro: ${id} registrado con status: ${res.statusCode}`)

        res.on('data', d => {
            process.stdout.write(d)
        });
    });

    postRequest.on('error', error => {
        console.error(error)
    })

    postRequest.write(data)
    postRequest.end()
}