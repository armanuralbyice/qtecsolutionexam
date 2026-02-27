'use client';

import Image from 'next/image';
import manImg from "@/assets/man.png"

export function HeroImage() {
    return (
        <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Decorative blur circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-300 opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-20 w-60 h-60 bg-blue-200 opacity-10 rounded-full blur-3xl"></div>

            {/* Image Container */}
            <div className="relative z-10">
                <Image
                    src={manImg}
                    alt="Professional person pointing"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover rounded-xl"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
            </div>
        </div>
    );
}
