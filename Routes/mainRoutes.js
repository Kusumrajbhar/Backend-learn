const express = require('express');
const login = require('../Controllers/login');
const register = require('../Controllers/Register');

const router = express.Router();

router.post('/login', login.employeeLogin);
router.post('/register', register.employeeRegister);

module.exports = router

