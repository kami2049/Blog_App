const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/portfolio', function (req, res) {
  res.render('portfolio');
});

app.get('/blog', function (req, res) {
  res.render('blog');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
