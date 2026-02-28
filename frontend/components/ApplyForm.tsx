"use client";

import { useState } from "react";
import { applyJob } from "@/services/jobService";

interface Props {
    jobId: string;
}

export default function ApplyForm({ jobId }: Props) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        cv: null as File | null,
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!form.name || !form.email || !form.phone || !form.cv) {
            return alert("All fields required");
        }

        const formData = new FormData();
        formData.append("jobId", jobId);
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("cv", form.cv);

        setLoading(true);
        const res = await applyJob(formData);
        setLoading(false);

        if (res.ok) {
            alert("Application submitted successfully!");
            setForm({ name: "", email: "", phone: "", cv: null });
        } else {
            alert(res.message);
        }
    };

    return (
        <div className="border p-6 rounded-lg shadow mt-8">
            <h2 className="text-xl font-bold mb-4">Apply for this Job</h2>

            <div className="space-y-3">
                <input
                    placeholder="Full Name"
                    className="border p-2 w-full rounded"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                    placeholder="Email"
                    className="border p-2 w-full rounded"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    placeholder="Phone"
                    className="border p-2 w-full rounded"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />

                <input
                    type="file"
                    className="border p-2 w-full rounded"
                    onChange={(e) =>
                        setForm({ ...form, cv: e.target.files?.[0] || null })
                    }
                />

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full"
                >
                    {loading ? "Submitting..." : "Submit Application"}
                </button>
            </div>
        </div>
    );
}