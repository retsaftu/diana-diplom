const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
    const productIds = req.session.cart || [];
    const products = await Product.find({ '_id': { $in: productIds } });
    res.render('cart', { products });
});

module.exports = router;
