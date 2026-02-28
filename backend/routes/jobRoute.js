const express = require('express');
const {protect} = require("../middleware/authMiddleware");
const {createJob, getAllJobs, updateJobs, deleteJob, getJobById, createApplication} = require("../controllers/jobController");
const upload = require("../middleware/upload");
const router = express.Router();

router.post('/create', protect, createJob);
router.post(
    "/application", upload.single("cv"), createApplication);
router.get('/all', getAllJobs);
router.get('/:id', getJobById);
router.put('/update/:id', protect, updateJobs);
router.delete('/delete/:id', protect, deleteJob);

module.exports = router;