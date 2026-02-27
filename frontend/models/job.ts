import {CategoryModel} from "@/models/category";

export interface JobModel {
    _id?: string;
    title: string;
    company: string;
    location: string;
    category: CategoryModel | string;
    description: string;
    createdAt?: string;
}