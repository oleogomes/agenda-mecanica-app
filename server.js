// function requireHTTPS(req, res, next) {
//   // The 'x-forwarded-proto' check is for Heroku
//   if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//       return res.redirect('https://' + req.get('host') + req.url);
//   }
//   next();
// }

//Install express server
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();
// app.use(requireHTTPS)

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/agenda-mecanica'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/agenda-mecanica/index.html');
});

// Start the app by listening on the default Heroku port
app.listen(PORT, () => {
  console.log('servidor iniciado na porta: '+ PORT)
});
