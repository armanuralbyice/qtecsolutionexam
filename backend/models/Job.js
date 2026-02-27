const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    title: {type:String, required:true, maxlength:150},
    description: {type:String, required:true, maxlength:500},
    company: { type: String, required: true },
    location: { type: String, required: true },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

}, {timestamps: true});

jobSchema.pre("save", function() {
    if (this._creator) {
        this.createdBy = this._creator;
    }
});

module.exports = mongoose.model("Job", jobSchema)