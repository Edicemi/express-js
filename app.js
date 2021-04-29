const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

//order doesn't matter
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//register a parser before routes handling middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes); // order matters
app.use(shopRoutes); // registered as second

app.use("*", (req, res, next) => {
    res.status(404).render('404');
});

app.listen(3000, () => {
    console.log("Listening on port 3000")
});