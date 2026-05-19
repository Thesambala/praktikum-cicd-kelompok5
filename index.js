const http = require('http');

function helloMessage() {
    return "Hello World dari Kelompok 5!";
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(helloMessage());
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
    server.listen(PORT, () => {
        console.log(`Server berjalan di port ${PORT}`);
    });
}

module.exports = { helloMessage };