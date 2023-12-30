const express = require("express");
const router = express.Router();
const register = require('./register')
const login = require('./login')
const advertisement = require('./advertisement')

router.use("/register",register)
router.use('/login',login)
router.use('/advertisement',advertisement)


module.exports = router;