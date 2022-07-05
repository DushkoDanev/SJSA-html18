const http = require('http');

const server = http.createServer((req, res) => {
    console.log('server test');
    //console.log(req);
    console.log(req.url);
    console.log(req.method);
    res.end('zdravo od serverot'); // isprati odgovor i zatvori go povikot
});

server.listen(10000);

/*

192.168.1.20 - IP address (Internet Protocol Address)
0.0.0.0 - 255.255.255.255 //A, B, C, D
IPV4 / IPV6

PROVIDER  ---->---- ROUTER ---->---- COMPUTER (N)
                              NAT
NAT - Network Adress Translation

port 80 - HTTP
port 443 - HTTPS

wikipedia.org raboti na default port 80 i 443
http://wikipedia.org
https://wikipedia.org

lokalen servis (server) raboti na nestandardna porta 10000
http://localhost:10000


default ports
- web server application 80, 443
- ftp server application: 21
-ssh server application: 22
- smtp server application: 25
- proxy server application: 8080
- ...

server - kompjuter povzan na internet
server application / service - aplikacija koja e postavena na server (i raboti na sopstvena porta)

-------------------------------

req - request - povik od klient prema server
res - response - odgovorot shto serverot go ispakja prema klientot

localhost === 127.0.0.1

*/