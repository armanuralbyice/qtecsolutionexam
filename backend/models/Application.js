const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
    {
        job: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Job",
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        resumeUrl: {
            type: String,
            required: true,
        },
        coverLetter: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);