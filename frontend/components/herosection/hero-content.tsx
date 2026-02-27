'use client';

// import { SearchBar } from './search-bar';
// import { PopularRoles } from './popular-roles';

import {SearchBar} from "@/components/herosection/search-bar";
import {PopularRoles} from "@/components/herosection/popular-roles";

export function HeroContent() {
    return (
        <div className="flex flex-col gap-8 sm:gap-10">
            {/* Headline */}
            <div className="space-y-4 sm:space-y-5">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight text-pretty">
                    Discover
                    <br />
                    more than
                    <br />
                    <span className="text-blue-600">5000+ Jobs</span>
                </h1>

                {/* Accent Line */}
                <div className="h-1.5 w-32 sm:w-40 bg-blue-500 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-700 max-w-lg leading-relaxed">
                Great platform for the job seeker that searching for new career heights and passionate about startups.
            </p>

            {/* Search Bar */}
            <SearchBar />

            {/* Popular Roles */}
            <PopularRoles />
        </div>
    );
}
