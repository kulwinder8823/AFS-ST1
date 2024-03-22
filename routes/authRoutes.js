const express = require('express');
const router = express.Router();
const cors = require('cors');
const mail = require('../controllers/sendMail');

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3001'
    })
);

router.post('/register', mail);

module.exports = router;
