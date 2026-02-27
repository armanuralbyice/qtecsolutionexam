const express = require('express');
const {protect} = require("../middleware/authMiddleware");
const {createJob, getAllJobs, updateJobs, deleteJob} = require("../controllers/jobController");
const router = express.Router();

router.post('/create', protect, createJob);
router.get('/all', protect, getAllJobs);
router.put('/update/:id', protect, updateJobs);
router.delete('/delete/:id', protect, deleteJob);

module.exports = router;