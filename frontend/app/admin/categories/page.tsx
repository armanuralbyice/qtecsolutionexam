"use client";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { createCategory, getAllCategories, updateCategory, deleteCategory } from "@/services/categoryService";
import { CategoryModel } from "@/models/category";

export default function CategoriesPage() {
    const [categories, setCategories] = useState<CategoryModel[]>([]);
    const [newCategory, setNewCategory] = useState("");
    const [editCategoryId, setEditCategoryId] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const fetchCategories = async () => {
        setLoading(true);
        const result = await getAllCategories();
        setLoading(false);
        if (result.ok && result.data) {
            setCategories(result.data);
        } else {
            setMessage(result.message || "Failed to load categories");
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);


    const handleSave = async () => {
        if (!newCategory) return alert("Category name is required");
        setLoading(true);

        let result;
        if (editCategoryId) {
            result = await updateCategory(editCategoryId, { name: newCategory });
        } else {
            result = await createCategory({ name: newCategory });
        }

        setLoading(false);
        if (result.ok) {
            setNewCategory("");
            setEditCategoryId(null);
            fetchCategories();
        } else {
            alert(result.message || "Something went wrong");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this category?")) return;
        setLoading(true);
        const result = await deleteCategory(id);
        setLoading(false);
        if (result.ok) fetchCategories();
        else alert(result.message);
    };

    const handleEdit = (cat: CategoryModel) => {
        setNewCategory(cat.name);
        setEditCategoryId(cat._id || null);
    };

    const handleCancel = () => {
        setNewCategory("");
        setEditCategoryId(null);
    };

    return (
        <AdminLayout>
            <h1 className="text-2xl font-bold mb-4">Categories</h1>

            <div className="mb-6 flex gap-2">
                <input
                    type="text"
                    placeholder="Category name"
                    className="border p-2 rounded flex-1"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                />
                <button
                    className="bg-green-600 text-white px-4 rounded hover:bg-green-700"
                    onClick={handleSave}
                    disabled={loading}
                >
                    {loading ? "Saving..." : editCategoryId ? "Update" : "Add"}
                </button>
                {editCategoryId && (
                    <button
                        className="bg-gray-400 text-white px-4 rounded hover:bg-gray-500"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                )}
            </div>

            {message && <p className="text-red-600 mb-4">{message}</p>}

            {/* Categories table */}
            <table className="w-full border rounded">
                <thead>
                <tr className="bg-gray-200">
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2">Created At</th>
                    <th className="p-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {loading && (
                    <tr>
                        <td colSpan={3} className="text-center p-4">
                            Loading...
                        </td>
                    </tr>
                )}
                {!loading && categories.map((cat) => (
                    <tr key={cat._id} className="border-b hover:bg-gray-50">
                        <td className="p-2">{cat.name}</td>
                        <td className="p-2">
                            {cat.createdAt ? new Date(cat.createdAt).toLocaleDateString() : "-"}
                        </td>
                        <td className="p-2 flex justify-center gap-2">
                            <button
                                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                                onClick={() => handleEdit(cat)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                                onClick={() => handleDelete(cat._id!)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                {!loading && categories.length === 0 && (
                    <tr>
                        <td colSpan={3} className="p-4 text-center text-gray-500">
                            No categories found.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </AdminLayout>
    );
}