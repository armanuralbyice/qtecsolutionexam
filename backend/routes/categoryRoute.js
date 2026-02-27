const express = require('express');
const {protect} = require("../middleware/authMiddleware");
const {createCategory, getAllCategories, updateCategory} = require("../controllers/categoryController");
const router = express.Router();

router.post('/create', protect, createCategory);
router.get('/all', protect, getAllCategories);
router.put('/update/:id', protect, updateCategory);

module.exports = router;