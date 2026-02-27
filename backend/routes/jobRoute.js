const express = require('express');
const {protect} = require("../middleware/authMiddleware");
const {createJob, getAllJobs, updateJobs} = require("../controllers/jobController");
const {deleteJob} = require("../controllers/categoryController");
const router = express.Router();

router.post('/create', protect, createJob);
router.get('/all', protect, getAllJobs);
router.put('/update/:id', protect, updateJobs);
router.delete('/update/:id', protect, deleteJob);

module.exports = router;