const Category = require('../models/Category')
const Job = require("../models/Job");

exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ ok: false, message: "Name required" });
        }
        const CategoryExists = await Category.findOne({name: name})
        if (CategoryExists) {
            return res.status(400).json({message: 'category already exists'});
        }
        const category = new Category({ name });
        category._creator = req.user._id;
        await category.save();

        return res.status(201).json({ ok: true, message: "Category created" });
    } catch (err) {
        return res.status(500).json({ ok: false, message: err.message });
    }
};

exports.getAllCategories = async (req, res) => {
    try{
        const categories = await Category.find().sort({ createdAt: -1 });
        return res.status(200).json({ ok: true, data: categories });

    }catch (e) {
        return res.status(500).json({ ok: false, message: e.message });
    }
}
exports.updateCategory = async (req, res) => {
    try{
        const { name } = req.body;
        const id = req.params.id;
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({
                ok: false,
                message: "category not found",
            });
        }
        if(name) category.name = name;
        await category.save();
        return res.status(200).json({
            ok: true,
            message: 'Category updated successfully',
        })
    }catch (err){
        return res.status(500).json({ ok: false, message: err.message });
    }
}
exports.deleteCategory = async (req, res) => {
    try {
        const id = req.params.id

        const job = await Category.findByIdAndDelete(id)

        if (!job) {
            return res.status(404).json({
                ok: false,
                message: "Category not found"
            })
        }

        return res.status(200).json({
            ok: true,
            message: "Category deleted successfully"
        })

    } catch (err) {
        return res.status(500).json({
            ok: false,
            message: err.message
        })
    }
}