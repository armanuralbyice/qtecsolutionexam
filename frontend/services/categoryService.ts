import { CategoryModel } from "@/models/category";
import { Response } from "@/models/response";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/category`;

export const createCategory = async (data: CategoryModel): Promise<Response> => {
    try {
        const res = await fetch(`${BASE_URL}/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(data),
        });
        const result = await res.json();
        return { ...result, ok: res.ok };
    } catch (error: unknown) {
        return { ok: false, message: (error instanceof Error ? error.message : "Network Error") };
    }
};

export const getAllCategories = async (): Promise<Response> => {
    try {
        const res = await fetch(`${BASE_URL}/all`, {
            method: "GET",
            // credentials: "include",
        });
        const result = await res.json();
        return { ...result, ok: res.ok };
    } catch (error: unknown) {
        return { ok: false, message: (error instanceof Error ? error.message : "Network Error") };
    }
};

export const updateCategory = async (id: string, data: CategoryModel): Promise<Response> => {
    try {
        const res = await fetch(`${BASE_URL}/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(data),
        });
        const result = await res.json();
        return { ...result, ok: res.ok };
    } catch (error: unknown) {
        return { ok: false, message: (error instanceof Error ? error.message : "Network Error") };
    }
};

export const deleteCategory = async (id: string): Promise<Response> => {
    try {
        const res = await fetch(`${BASE_URL}/delete/${id}`, {
            method: "DELETE",
            credentials: "include",
        });
        const result = await res.json();
        return { ...result, ok: res.ok };
    } catch (error: unknown) {
        return { ok: false, message: (error instanceof Error ? error.message : "Network Error") };
    }
};