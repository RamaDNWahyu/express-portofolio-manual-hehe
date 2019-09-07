const express = require('express');
var path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
    return res.render('index');
});

app.get('/tentang-saya', function (req, res) {
    res.send('Ini merupakan cerita tentang saya hehe..');
});

app.listen(PORT);
console.log('Server berjalan pada PORT : ' + PORT);
