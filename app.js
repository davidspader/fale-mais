const express = require('express');
const app = express();
const path = require('path');
const faleMaisRoute = require('./routes/faleMaisRoute');

const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.use("/", faleMaisRoute);

app.listen(PORT, () => { console.log(`Server Running on port ${PORT}`) });