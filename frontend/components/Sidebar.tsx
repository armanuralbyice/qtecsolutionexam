"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface SubMenuItem {
    title: string;
    link: string;
}

interface MenuItem {
    title: string;
    link?: string;
    submenu?: SubMenuItem[];
}

export default function Sidebar() {
    const [openMenu, setOpenMenu] = useState<number | null>(null);

    const menuItems: MenuItem[] = [
        { title: "Dashboard", link: "/admin" },
        {
            title: "Jobs",
            submenu: [
                { title: "All Jobs", link: "/admin/jobs" },
            ],
        },
        {
            title: "Categories",
            submenu: [
                { title: "Create Categories", link: "/admin/categories" },
            ],
        },
        { title: "Applications", link: "/admin/applications" },
    ];

    return (
        <div className="w-64 bg-gray-900 text-white min-h-screen p-4 flex flex-col">
            <h1 className="text-2xl font-bold mb-8 text-center">QuickHire</h1>
            <ul className="space-y-2 flex-1">
                {menuItems.map((item, idx) => (
                    <li key={idx}>
                        {item.submenu ? (
                            <div>
                                <button
                                    onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
                                    className="w-full flex justify-between items-center p-2 hover:bg-gray-800 rounded transition"
                                >
                                    <span>{item.title}</span>
                                    <ChevronDownIcon
                                        className={`w-5 h-5 transition-transform ${
                                            openMenu === idx ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                {openMenu === idx && (
                                    <ul className="ml-4 mt-1 space-y-1">
                                        {item.submenu.map((sub, subIdx) => (
                                            <li key={subIdx}>
                                                <Link
                                                    href={sub.link}
                                                    className="block p-2 hover:bg-gray-800 rounded transition"
                                                >
                                                    {sub.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <Link
                                href={item.link!}
                                className="block p-2 hover:bg-gray-800 rounded transition"
                            >
                                {item.title}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
            <div className="mt-auto text-center text-gray-400 text-sm">
                &copy; 2026 QuickHire
            </div>
        </div>
    );
}