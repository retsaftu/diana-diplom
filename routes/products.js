const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.render('catalog', { products });
});

router.post('/add-to-cart', (req, res) => {
    const { productId } = req.body;
    if (!req.session.cart) {
        req.session.cart = [];
    }
    req.session.cart.push(productId);
    res.redirect('/cart');
});

module.exports = router;
