"use client";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import {getAllApplications} from "@/services/jobService";

export default function ApplicationPage() {
    const [applications, setApplications] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const fetchApplication = async () => {
        setLoading(true);
        const result = await getAllApplications();
        setLoading(false);
        if (result.ok && result.data) {
            setApplications(result.data);
        } else {
            setMessage(result.message || "Failed to load applications");
        }
    };

    useEffect(() => {
        fetchApplication();
    }, []);

    return (
        <AdminLayout>
            <h1 className="text-2xl font-bold mb-4">Applications</h1>

            <table className="w-full border rounded">
                <thead>
                <tr className="bg-gray-200">
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2">Email</th>
                    <th className="p-2">Phone</th>
                    <th className="p-2">Job title</th>
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
                {!loading && applications.map((app) => (
                    <tr key={app._id} className="border-b hover:bg-gray-50">
                        <td className="p-2">{app.name}</td>
                        <td className="p-2">{app.email}</td>
                        <td className="p-2">{app.phone}</td>
                        <td className="p-2">{app.job?.title}</td>
                    </tr>
                ))}
                {!loading && applications.length === 0 && (
                    <tr>
                        <td colSpan={3} className="p-4 text-center text-gray-500">
                            No application found.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </AdminLayout>
    );
}