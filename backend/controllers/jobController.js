const Job = require("../models/Job");
const Application = require("../models/Application");

exports.createJob = async function(req, res) {
    try {
        const {title, company, location, category, description} = req.body

        if (!title || !company || !location || !category || !description) {
            return res.status(400).json({
                ok: false,
                message: "All fields are required"
            })
        }
        const job = new Job({
            title,
            company,
            location,
            category,
            description
        })

        await job.save()

        res.status(201).json({
            success: true,
            message: "Job created successfully",
        })
    }
catch(err) {
    return res.status(400).json({
        ok: false,
        message: err.message
    })}
}

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find().populate("category", "name").sort({createdAt: -1})
        return res.status(200).json({ok: true, data: jobs})

    }catch (err){
        return res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}
exports.updateJobs = async (req, res) => {
    try{
        const {title, company, location, category, description} = req.body
        const id = req.params.id;
        const job = await Job.findById(id);
        if (!job) {
            return res.status(404).json({
                ok: false,
                message: "Job not found",
            });
        }
        if (title) job.title = title
        if (company) job.company = company
        if (location) job.location = location
        if (category) job.category = category
        if (description) job.description = description
        await job.save();
        return res.status(200).json({
            ok: true,
            message: 'Job updated successfully',
        })
    }catch (err){
        return res.status(500).json({ ok: false, message: err.message });
    }
}

exports.deleteJob = async (req, res) => {
    try {
        const id = req.params.id

        const job = await Job.findByIdAndDelete(id)

        if (!job) {
            return res.status(404).json({
                ok: false,
                message: "Job not found"
            })
        }

        return res.status(200).json({
            ok: true,
            message: "Job deleted successfully"
        })

    } catch (err) {
        return res.status(500).json({
            ok: false,
            message: err.message
        })
    }
}
exports.getJobById = async (req, res) => {
    try {
        const { id } = req.params;

        const job = await Job.findById(id)
            .populate("category", "name")
            .sort({ createdAt: -1 });

        if (!job) {
            return res.status(404).json({
                ok: false,
                message: "Job not found",
            });
        }

        return res.status(200).json({
            ok: true,
            data: job,
        });
    } catch (err) {
        return res.status(400).json({
            ok: false,
            message: err.message,
        });
    }
};


exports.createApplication = async (req, res) => {
    try {
        const { jobId, name, email, phone } = req.body;

        if (!req.file) {
            return res.status(400).json({
                ok: false,
                message: "CV file required",
            });
        }

        const newApplication = new Application({
            job: jobId,
            name,
            email,
            phone,
            cv: req.file.filename,
        });

        await newApplication.save();

        res.status(201).json({
            ok: true,
            message: "Application submitted successfully",
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        });
    }
};