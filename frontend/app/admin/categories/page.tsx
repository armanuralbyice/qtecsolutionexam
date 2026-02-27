"use client";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";

interface Category {
    _id: string;
    name: string;
    createdAt: string;
}

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [newCategory, setNewCategory] = useState("");
    const [loading, setLoading] = useState(false);

    // Fetch categories from backend
    const fetchCategories = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/categories");
            const data = await res.json();
            if (data.ok) setCategories(data.categories);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // Add category
    const handleAdd = async () => {
        if (!newCategory) return alert("Category name is required");
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/categories", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: newCategory }),
            });
            const data = await res.json();
            if (data.ok) {
                setNewCategory("");
                fetchCategories();
            } else {
                alert(data.message);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Delete category
    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this category?")) return;
        try {
            const res = await fetch(`http://localhost:5000/api/categories/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            if (data.ok) fetchCategories();
            else alert(data.message);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <AdminLayout>
            <h1 className="text-2xl font-bold mb-4">Categories</h1>

            {/* Add new category */}
            <div className="mb-6 flex gap-2">
                <input
                    type="text"
                    placeholder="New category name"
                    className="border p-2 rounded flex-1"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                />
                <button
                    className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700"
                    onClick={handleAdd}
                    disabled={loading}
                >
                    {loading ? "Adding..." : "Add"}
                </button>
            </div>

            {/* Categories list */}
            <table className="w-full border rounded">
                <thead>
                <tr className="bg-gray-200">
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2">Created At</th>
                    <th className="p-2">Action</th>
                </tr>
                </thead>
                <tbody>
                {categories.map((cat) => (
                    <tr key={cat._id} className="border-b">
                        <td className="p-2">{cat.name}</td>
                        <td className="p-2">
                            {new Date(cat.createdAt).toLocaleDateString()}
                        </td>
                        <td className="p-2 text-center">
                            <button
                                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                                onClick={() => handleDelete(cat._id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                {categories.length === 0 && (
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