const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.redirect('/auth/register?error=exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        await user.save();
        res.redirect('/auth/login');
    } catch (err) {
        res.redirect('/auth/register?error=failed');
    }
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.redirect('/auth/login?error=invalid');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.redirect('/auth/login?error=invalid');
        }
        req.session.user = user;
        res.redirect('/');
    } catch (err) {
        res.redirect('/auth/login?error=failed');
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/');
        }
        res.redirect('/auth/login');
    });
});

module.exports = router;
