const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const { equal } = require('assert');

const router = express.Router();
const products = [];
// same path used because method differ
// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('app-product', { pageTitle: 'Add Product' });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });

    res.redirect('/');
});

exports.routes = router;
exports.products = products;