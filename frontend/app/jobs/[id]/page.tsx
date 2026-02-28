"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getJobById } from "@/services/jobService";
import { JobModel } from "@/models/job";
import ApplyForm from "@/components/ApplyForm";

export default function JobDetailsPage() {
    const { id } = useParams();
    const [job, setJob] = useState<JobModel | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            if (!id) return;
            const res = await getJobById(id as string);
            if (res.ok && res.data) {
                setJob(res.data);
            }
            setLoading(false);
        };

        fetchJob();
    }, [id]);

    if (loading) return <div className="p-10 text-center">Loading...</div>;
    if (!job) return <div className="p-10 text-center">Job not found</div>;

    return (
        <div className="max-w-4xl mx-auto p-6">

            <h1 className="text-3xl font-bold mb-2">{job.title}</h1>

            <p className="text-gray-600 mb-4">
                {job.company} · {job.location}
            </p>

            <div className="mb-6">
                <p>{job.description}</p>
            </div>

            {/* Apply Form */}
            <ApplyForm jobId={job._id!} />
        </div>
    );
}