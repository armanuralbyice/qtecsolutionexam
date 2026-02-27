'use client';

import { Mail, Facebook, Instagram, Dribbble, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate subscription
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
    }, 500);
  };

  return (
      <footer className="bg-slate-900 text-gray-300">
        {/* Main content */}
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* Brand Section */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600">
                  <span className="text-sm font-bold text-white">Q</span>
                </div>
                <span className="text-lg font-semibold text-white">QuickHire</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Great platform for the job seeker that passionate about startups. Find your dream job easier.
              </p>
            </div>

            {/* About Section */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-base font-semibold text-white">About</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                    Companies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                    Advice
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-base font-semibold text-white">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                    Help Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                    Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 transition hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-base font-semibold text-white">Get job notifications</h3>
              <p className="text-sm text-gray-400">
                The latest job news, articles, sent to your inbox weekly.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                <div className="flex flex-row space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                  <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className=" rounded border border-gray-600 bg-slate-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition focus:border-blue-500 focus:outline-none"
                  /><br/>
                  <button
                      type="submit"
                      disabled={isLoading}
                      className="whitespace-nowrap rounded bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50 sm:px-4"
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700" />

        {/* Bottom Section */}
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-between space-y-6 sm:flex-row sm:space-y-0">
            <p className="text-xs text-gray-500">2021 © QuickHire. All rights reserved.</p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                  href="#"
                  className="text-gray-400 transition hover:text-blue-500"
                  aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                  href="#"
                  className="text-gray-400 transition hover:text-pink-500"
                  aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                  href="#"
                  className="text-gray-400 transition hover:text-gray-300"
                  aria-label="Dribbble"
              >
                <Dribbble size={18} />
              </a>
              <a
                  href="#"
                  className="text-gray-400 transition hover:text-blue-600"
                  aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                  href="#"
                  className="text-gray-400 transition hover:text-blue-400"
                  aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
}
