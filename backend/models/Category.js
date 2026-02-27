const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true })

categorySchema.pre("save", function() {
    if (this._creator) {
        this.createdBy = this._creator;
    }
});

module.exports = mongoose.model("Category", categorySchema)
