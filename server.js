const express = require('express');
const path = require('path');
const app = express();
const timeout = 30000;

console.log('The server autoatically shuts down after ' + (timeout / 1000) + ' seconds.');
app.use('/node_modules/reveal.js/lib', express.static(path.join(__dirname, '/node_modules/reveal.js/lib/')));
app.use('/node_modules/reveal.js/css', express.static(path.join(__dirname, '/node_modules/reveal.js/css/')));
app.use('/node_modules/reveal.js/js', express.static(path.join(__dirname, '/node_modules/reveal.js/js/')));
app.get('/', function (req, res) {
  app.use(express.static(path.join(__dirname, '/node_modules/reveal.js/')));
  res.sendFile(path.join(__dirname + '/index.html'));
})

const server = app.listen(2015);
setTimeout(()=>server.close(), timeout);