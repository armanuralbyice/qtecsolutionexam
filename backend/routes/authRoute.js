const express = require('express');
const {login, isAuthenticate, createUser, logout} = require("../controllers/authController");
const {protect} = require("../middleware/authMiddleware");
const router = express.Router();

router.post('/register', createUser);
router.post('/login', login);
router.post("/logout", logout)
router.get('/me', protect, isAuthenticate);

module.exports = router;