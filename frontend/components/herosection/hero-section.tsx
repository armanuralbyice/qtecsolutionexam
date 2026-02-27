'use client';

import { HeroContent } from './hero-content';
import { HeroImage } from './hero-image';

export function HeroSection() {
    return (
        <section
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white"
            style={{
                backgroundImage: 'url(/Desktop.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                // backgroundAttachment: 'fixed',
            }}
        >
            {/* Subtle overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-transparent z-0"></div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:gap-16 items-center min-h-screen lg:min-h-auto">
                    {/* Left Content */}
                    <HeroContent />

                    {/* Right Image - Hidden on mobile, visible on lg */}
                    <div className="hidden lg:flex justify-center lg:justify-end">
                        <HeroImage />
                    </div>

                    {/* Mobile Hero Image */}
                    <div className="lg:hidden mt-8">
                        <HeroImage />
                    </div>
                </div>
            </div>
        </section>
    );
}
