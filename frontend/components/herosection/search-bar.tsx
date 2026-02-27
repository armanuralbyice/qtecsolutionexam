'use client';

import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

export function SearchBar() {
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('Florence, Italy');

    const handleSearch = () => {
        console.log('Searching for:', { jobTitle, location });
    };

    return (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
            {/* Job Title Input */}
            <div className="flex-1 flex items-center bg-white px-4 py-3 sm:py-4 rounded-lg sm:rounded-l-lg border border-slate-200 hover:border-slate-300 transition-colors">
                <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                <input
                    type="text"
                    placeholder="Job title or keyword"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="flex-1 outline-none text-slate-900 placeholder-slate-500 bg-transparent text-sm sm:text-base"
                />
            </div>

            {/* Location Input */}
            <div className="flex-1 sm:flex-none flex items-center bg-white px-4 py-3 sm:py-4 border-t sm:border-t-0 border-b sm:border-b border-l sm:border-l border-r sm:border-r border-slate-200 hover:border-slate-300 transition-colors">
                <MapPin className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="flex-1 outline-none text-slate-900 bg-transparent text-sm sm:text-base cursor-pointer appearance-none"
                >
                    <option>Florence, Italy</option>
                    <option>Milan, Italy</option>
                    <option>Rome, Italy</option>
                    <option>New York, USA</option>
                    <option>London, UK</option>
                </select>
            </div>

            {/* Search Button */}
            <button
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-r-lg transition-colors text-sm sm:text-base"
            >
                Search my job
            </button>
        </div>
    );
}
