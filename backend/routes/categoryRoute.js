const express = require('express');
const {protect} = require("../middleware/authMiddleware");
const {createCategory, getAllCategories, updateCategory, deleteCategory} = require("../controllers/categoryController");
const router = express.Router();

router.post('/create', protect, createCategory);
router.get('/all', getAllCategories);
router.put('/update/:id', protect, updateCategory);
router.delete('/delete/:id', protect, deleteCategory);

module.exports = router;