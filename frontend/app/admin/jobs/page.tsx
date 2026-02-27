"use client";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { JobModel } from "@/models/job";
import { CategoryModel } from "@/models/category";
import { getAllJobs, createJob, updateJob, deleteJob } from "@/services/jobService";
import { getAllCategories } from "@/services/categoryService";
import {JobForm} from "@/models/JobForm";

export default function JobsPage() {
    const [jobs, setJobs] = useState<JobModel[]>([]);
    const [categories, setCategories] = useState<CategoryModel[]>([]);
    const [form, setForm] = useState<JobForm>({
        title: "",
        company: "",
        location: "",
        category: "",
        description: "",
    });
    const [editJobId, setEditJobId] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);


    const fetchJobs = async () => {
        setLoading(true);
        const res = await getAllJobs();
        setLoading(false);
        if (res.ok && res.data) setJobs(res.data);
        else alert(res.message || "Failed to fetch jobs");
    };


    const fetchCategories = async () => {
        const res = await getAllCategories();
        if (res.ok && res.data) setCategories(res.data);
        else console.error(res.message || "Failed to fetch categories");
    };

    useEffect(() => {
        fetchJobs();
        fetchCategories();
    }, []);


    const handleSave = async () => {
        if (!form.title || !form.company || !form.category)
            return alert("Title, Company, and Category are required");

        setLoading(true);
        let res;
        if (editJobId) {
            res = await updateJob(editJobId, form);
        } else {
            res = await createJob(form);
        }
        setLoading(false);

        if (res.ok) {
            setForm({ title: "", company: "", location: "", category: "", description: "" });
            setEditJobId(null);
            fetchJobs();
        } else alert(res.message);
    };


    const handleEdit = (job: JobModel) => {
        setForm({
            title: job.title,
            company: job.company,
            location: job.location,
            category: typeof job.category === "object" ? job.category._id : job.category || "",
            description: job.description,
        });
        setEditJobId(job._id || null);
    };


    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this job?")) return;
        setLoading(true);
        const res = await deleteJob(id);
        setLoading(false);
        if (res.ok) fetchJobs();
        else alert(res.message);
    };


    const handleCancel = () => {
        setForm({ title: "", company: "", location: "", category: "", description: "" });
        setEditJobId(null);
    };

    return (
        <AdminLayout>
            <h1 className="text-2xl font-bold mb-4">Jobs</h1>


            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                <input
                    placeholder="Title"
                    className="border p-2 rounded"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
                <input
                    placeholder="Company"
                    className="border p-2 rounded"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
                <input
                    placeholder="Location"
                    className="border p-2 rounded"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                />

                <select
                    className="border p-2 rounded"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                >
                    <option value="">Select category</option>
                    {categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                            {cat.name}
                        </option>
                    ))}
                </select>

                <textarea
                    placeholder="Description"
                    className="border p-2 rounded md:col-span-2"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                />

                <div className="flex gap-2 md:col-span-2">
                    <button
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        onClick={handleSave}
                        disabled={loading}
                    >
                        {loading ? "Saving..." : editJobId ? "Update" : "Create"}
                    </button>
                    {editJobId && (
                        <button
                            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </div>

            {/* Jobs Table */}
            <table className="w-full border rounded">
                <thead>
                <tr className="bg-gray-200">
                    <th className="p-2 text-left">Title</th>
                    <th className="p-2">Company</th>
                    <th className="p-2">Location</th>
                    <th className="p-2">Category</th>
                    <th className="p-2">Created At</th>
                    <th className="p-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {loading && (
                    <tr>
                        <td colSpan={6} className="p-4 text-center">
                            Loading...
                        </td>
                    </tr>
                )}
                {!loading &&
                    jobs.map((job) => (
                        <tr key={job._id} className="border-b hover:bg-gray-50">
                            <td className="p-2">{job.title}</td>
                            <td className="p-2">{job.company}</td>
                            <td className="p-2">{job.location}</td>
                            <td className="p-2">
                                {typeof job.category === "object" ? job.category.name : job.category}
                            </td>
                            <td className="p-2">
                                {job.createdAt
                                    ? new Date(job.createdAt).toLocaleDateString()
                                    : "-"}
                            </td>
                            <td className="p-2 flex justify-center gap-2">
                                <button
                                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                                    onClick={() => handleEdit(job)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                                    onClick={() => handleDelete(job._id!)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                {!loading && jobs.length === 0 && (
                    <tr>
                        <td colSpan={6} className="p-4 text-center text-gray-500">
                            No jobs found.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </AdminLayout>
    );
}