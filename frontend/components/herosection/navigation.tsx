'use client';
import Image from "next/image";
import logo from "@/assets/Logo.png"

export function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                       <Image src={logo} alt={"logo"} width={100} height={100} className={'w-full h-full'}/>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors">
                            Find Jobs
                        </a>
                        <a href="#" className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors">
                            Browse Companies
                        </a>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3">
                        <button
                            className="text-slate-600 hover:text-slate-900 text-sm"
                        >
                            Login
                        </button>
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white text-sm"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
