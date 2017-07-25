const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/portfolio', function (req, res) {
  res.send('Hello World!');
});

app.get('/blog', function (req, res) {
  res.render('blog');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
