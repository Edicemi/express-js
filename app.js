const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//order doesn't matter
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//register a parser before routes handling middlewares
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes); // order matters
app.use(shopRoutes); // registered as second

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);