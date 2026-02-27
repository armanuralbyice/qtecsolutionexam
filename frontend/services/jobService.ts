import { JobModel } from "@/models/job";
import { Response } from "@/models/response";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/job`;

export const getAllJobs = async (): Promise<Response> => {
    try {
        const res = await fetch(`${BASE_URL}/all`, { credentials: "include" });
        const data = await res.json();
        return data;
    } catch (err: unknown) {
        return { ok: false, message: err instanceof Error ? err.message : "Network Error" };
    }
};

export const createJob = async (job: JobModel): Promise<Response> => {
    try {
        const res = await fetch(`${BASE_URL}/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(job),
        });
        return await res.json();
    } catch (err: unknown) {
        return { ok: false, message: err instanceof Error ? err.message : "Network Error" };
    }
};

export const updateJob = async (id: string, job: JobModel): Promise<Response> => {
    try {
        const res = await fetch(`${BASE_URL}/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(job),
        });
        return await res.json();
    } catch (err: unknown) {
        return { ok: false, message: err instanceof Error ? err.message : "Network Error" };
    }
};

export const deleteJob = async (id: string): Promise<Response> => {
    try {
        const res = await fetch(`${BASE_URL}/delete/${id}`, {
            method: "DELETE",
            credentials: "include",
        });
        return await res.json();
    } catch (err: unknown) {
        return { ok: false, message: err instanceof Error ? err.message : "Network Error" };
    }
};