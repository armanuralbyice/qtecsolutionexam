'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import companyDashboard from '@/assets/dashboardCompany.png'
export default function jobsection() {
    const jobs = [
        {
            id: 1,
            icon: 'R',
            iconBg: 'bg-blue-600',
            title: 'Email Marketing',
            company: 'Revolut',
            location: 'Madrid, Spain',
            description: 'Revolut is looking for Email Marketing to help team m...',
            tags: [
                { label: 'Marketing', color: 'bg-orange-100 text-orange-700' },
                { label: 'Design', color: 'bg-teal-100 text-teal-700' },
            ],
            type: 'Full Time',
        },
        {
            id: 2,
            icon: '☁️',
            iconBg: 'bg-blue-100',
            title: 'Brand Designer',
            company: 'Dropbox',
            location: 'San Francisco, US',
            description: 'Dropbox is looking for Brand Designer to help the team t...',
            tags: [
                { label: 'Design', color: 'bg-teal-100 text-teal-700' },
                { label: 'Business', color: 'bg-purple-100 text-purple-700' },
            ],
            type: 'Full Time',
        },
        {
            id: 3,
            icon: '🔴',
            iconBg: 'bg-black',
            title: 'Email Marketing',
            company: 'Pitch',
            location: 'Berlin, Germany',
            description: 'Pitch is looking for Customer Manager to join marketing t...',
            tags: [
                { label: 'Marketing', color: 'bg-orange-100 text-orange-700' },
            ],
            type: 'Full Time',
        },
        {
            id: 4,
            icon: '✓',
            iconBg: 'bg-green-600',
            title: 'Visual Designer',
            company: 'Blinkist',
            location: 'Granada, Spain',
            description: 'Blinkist is looking for Visual Designer to help team desi...',
            tags: [
                { label: 'Design', color: 'bg-teal-100 text-teal-700' },
            ],
            type: 'Full Time',
        },
        {
            id: 5,
            icon: '⚡',
            iconBg: 'bg-blue-600',
            title: 'Product Designer',
            company: 'ClassPass',
            location: 'Manchester, UK',
            description: 'ClassPass is looking for Product Designer to help us...',
            tags: [
                { label: 'Marketing', color: 'bg-orange-100 text-orange-700' },
                { label: 'Design', color: 'bg-teal-100 text-teal-700' },
            ],
            type: 'Full Time',
        },
        {
            id: 6,
            icon: 'C',
            iconBg: 'bg-teal-600',
            title: 'Lead Designer',
            company: 'Canva',
            location: 'Ontario, Canada',
            description: 'Canva is looking for Lead Engineer to help design...',
            tags: [
                { label: 'Design', color: 'bg-teal-100 text-teal-700' },
                { label: 'Business', color: 'bg-purple-100 text-purple-700' },
            ],
            type: 'Full Time',
        },
        {
            id: 7,
            icon: '◉',
            iconBg: 'bg-black',
            title: 'Brand Strategist',
            company: 'GoDaddy',
            location: 'Marseille, France',
            description: 'GoDaddy is looking for Brand Strategist to join the team...',
            tags: [
                { label: 'Marketing', color: 'bg-orange-100 text-orange-700' },
            ],
            type: 'Full Time',
        },
        {
            id: 8,
            icon: '𝕏',
            iconBg: 'bg-blue-400',
            title: 'Data Analyst',
            company: 'Twitter',
            location: 'San Diego, US',
            description: 'Twitter is looking for Data Analyst to help team desi...',
            tags: [
                { label: 'Technology', color: 'bg-red-100 text-red-700' },
            ],
            type: 'Full Time',
        },
    ];

    const categories = [
        { id: 1, icon: '✕', title: 'Design', jobs: 235, highlighted: false },
        { id: 2, icon: '≡', title: 'Sales', jobs: 756, highlighted: false },
        { id: 3, icon: '◈', title: 'Marketing', jobs: 140, highlighted: true },
        { id: 4, icon: '📷', title: 'Finance', jobs: 325, highlighted: false },
        { id: 5, icon: '🖥️', title: 'Technology', jobs: 436, highlighted: false },
        { id: 6, icon: '</', title: 'Engineering', jobs: 542, highlighted: false },
        { id: 7, icon: '💼', title: 'Business', jobs: 211, highlighted: false },
        { id: 8, icon: '👥', title: 'Human Resource', jobs: 346, highlighted: false },
    ];

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Featured <span className="text-blue-600">jobs</span>
                    </h1>
                    <a
                        href="#"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm sm:text-base font-medium"
                    >
                        Show all jobs
                        <ArrowRight size={16} />
                    </a>
                </div>

                {/* Job Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="border border-gray-200 rounded-lg p-4 sm:p-5 hover:shadow-lg transition-shadow duration-200 flex flex-col"
                        >
                            {/* Top Section: Icon and Full Time Badge */}
                            <div className="flex items-start justify-between mb-4">
                                {/* Icon */}
                                <div
                                    className={`w-10 h-10 rounded-full ${job.iconBg} flex items-center justify-center text-white text-lg font-bold flex-shrink-0`}
                                >
                                    {job.icon}
                                </div>
                                {/* Full Time Badge */}
                                <span className="inline-block px-3 py-1 border border-purple-600 text-purple-600 text-xs font-medium rounded">
                  {job.type}
                </span>
                            </div>

                            {/* Job Title */}
                            <h3 className="text-gray-900 font-bold text-base mb-1">
                                {job.title}
                            </h3>

                            {/* Company and Location */}
                            <p className="text-gray-600 text-sm mb-3">
                                <span className="font-medium">{job.company}</span>
                                <span className="text-gray-400 mx-1">·</span>
                                <span>{job.location}</span>
                            </p>

                            {/* Description */}
                            <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">
                                {job.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {job.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className={`px-2.5 py-1 text-xs font-medium rounded ${tag.color}`}
                                    >
                    {tag.label}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                {/* CTA Section */}
                <div className="mt-16 sm:mt-20 relative">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 sm:p-12 lg:p-16">
                            {/* Left Content */}
                            <div className="flex flex-col justify-center order-2 lg:order-1">
                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                                    Start posting jobs today
                                </h3>
                                <p className="text-blue-100 text-base sm:text-lg mb-8">
                                    Start posting jobs for only $10.
                                </p>
                                <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-50 transition-colors duration-200 w-fit">
                                    Sign Up For Free
                                </button>
                            </div>

                            {/* Right Content - Dashboard Image */}
                            <div className="relative order-1 lg:order-2 flex items-center justify-center">
                                <div className="relative w-full h-64 sm:h-80 lg:h-96">
                                    <Image
                                        src={companyDashboard}
                                        alt="Job posting dashboard"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Decorative diagonal shape */}
                        <div className="absolute top-0 left-0 w-0 h-0 border-l-[100px] border-t-[100px] border-l-transparent border-t-blue-600 opacity-20"></div>
                    </div>
                </div>
                {/* Explore by Category Section */}
                <div className="mt-16 sm:mt-20">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Explore by <span className="text-blue-600">category</span>
                        </h2>
                        <a
                            href="#"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm sm:text-base font-medium"
                        >
                            Show all jobs
                            <ArrowRight size={16} />
                        </a>
                    </div>

                    {/* Category Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className={`rounded-lg p-6 sm:p-8 transition-all duration-200 hover:shadow-lg cursor-pointer flex flex-col items-center sm:items-start text-center sm:text-left ${
                                    category.highlighted
                                        ? 'bg-blue-600 text-white'
                                        : 'border border-gray-200 bg-white text-gray-900'
                                }`}
                            >
                                {/* Icon */}
                                <div
                                    className={`text-4xl sm:text-5xl mb-4 ${
                                        category.highlighted ? 'text-white' : 'text-blue-600'
                                    }`}
                                >
                                    {category.icon}
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-lg sm:text-xl mb-2">
                                    {category.title}
                                </h3>

                                {/* Jobs Count */}
                                <div className="flex items-center gap-2 mt-auto">
                  <span
                      className={`text-sm font-medium ${
                          category.highlighted
                              ? 'text-blue-100'
                              : 'text-gray-600'
                      }`}
                  >
                    {category.jobs} jobs available
                  </span>
                                    <ArrowRight
                                        size={16}
                                        className={
                                            category.highlighted
                                                ? 'text-white'
                                                : 'text-gray-600'
                                        }
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
}
