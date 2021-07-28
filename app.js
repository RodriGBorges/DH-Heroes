const server = require('express');
const app = server();
const port = 3030;
const path = require('path');


app.get('/home', (req,res) => {res.sendFile(path.join(__dirname, 'views', 'index.html'))})
app.get('/babbage', (req,res) => {res.sendFile(path.join(__dirname, 'views', 'babbage.html'))})
app.get('/berners-lee', (req,res) => {res.sendFile(path.join(__dirname, 'views', 'berners-lee.html'))})
app.get('/clarke', (req,res) => {res.sendFile(path.join(__dirname, 'views', 'clarke.html'))})
app.get('/hamilton', (req,res) => {res.sendFile(path.join(__dirname, 'views', 'hamilton.html'))})
app.get('/hopper', (req,res) => {res.sendFile(path.join(__dirname, 'views', 'hopper.html'))})
app.get('/lovelace', (req,res) => {res.sendFile(path.join(__dirname, 'views', 'lovelace.html'))})
app.get('/turing', (req,res) => {res.sendFile(path.join(__dirname, 'views', 'turing.html'))})
app.use(server.static('public'))

app.listen(port, () => console.log('Servidor corriendo en http://localhost:' + port + '/home'))



//app.use server.static hace que la ruta sea estática a partir de public
//en package.json/scripts podemos agregarle nuevos comandos => por ejemplo, "start": "nodemon app.js"
//en consola "npm start"