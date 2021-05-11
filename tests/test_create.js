const http = require('http')

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
        port: 3000,
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