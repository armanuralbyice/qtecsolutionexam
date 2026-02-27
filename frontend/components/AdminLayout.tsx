"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Bars3Icon } from "@heroicons/react/24/solid";

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen">
            {/* Desktop Sidebar */}
            <div className="hidden md:block">
                <Sidebar />
            </div>

            {/* Mobile Sidebar */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <Sidebar />
                    <div
                        className="fixed inset-0 bg-black opacity-50"
                        onClick={() => setSidebarOpen(false)}
                    />
                </div>
            )}

            <div className="flex-1 flex flex-col">
                <header className="flex items-center justify-between bg-white shadow p-4">
                    <button
                        className="md:hidden p-2 rounded hover:bg-gray-200"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Bars3Icon className="w-6 h-6" />
                    </button>
                    <h2 className="text-xl font-bold">Admin Panel</h2>
                    <div>
                        <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                            Logout
                        </button>
                    </div>
                </header>

                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    );
}