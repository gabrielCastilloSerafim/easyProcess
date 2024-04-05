const express = require('express');
const authHandlers = require("../handlers/authHandlers");

const router = express.Router()

router.get("/login", authHandlers.login);

module.exports = router;