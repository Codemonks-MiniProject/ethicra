"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('/');

    const handleTabClick = (href: string) => {
        setActiveTab(href);
    };

    return (
        <nav className="bg-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={'/'} className="text-2xl font-bold">
                    Logo
                </Link>
                <div className="flex items-center space-x-6">
                    <Link
                        href={'/'}
                        className={`text-[#4724c7] relative ${activeTab === '/' ? '' : ''
                            }`}
                        onClick={() => handleTabClick('/')}
                    >
                        Home
                        {activeTab === '/' && (
                            <div className="absolute bottom-[-5px] left-[10%] w-[80%] h-[3px] bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
                        )}
                    </Link>
                    <Link
                        href={'/about'}
                        className={`text-[#4724c7] relative ${activeTab === '/about' ? '' : ''
                            }`}
                        onClick={() => handleTabClick('/about')}
                    >
                        About
                        {activeTab === '/about' && (
                            <div className="absolute bottom-[-5px] left-[10%] w-[80%] h-[3px] bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
                        )}
                    </Link>
                    <Link
                        href={'/contact'}
                        className={`text-[#4724c7] relative ${activeTab === '/contact' ? '' : ''
                            }`}
                        onClick={() => handleTabClick('/contact')}
                    >
                        Contact
                        {activeTab === '/contact' && (
                            <div className="absolute bottom-[-5px] left-[10%] w-[80%] h-[3px] bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
                        )}
                    </Link>
                    <Link
                        href={'/login'}
                        className="border border-gray-300 rounded-md px-4 py-2 text-[#4724c7]"
                        onClick={() => handleTabClick('/login')}
                    >
                        Login
                    </Link>
                    <Link
                        href={'/sign-up'}
                        className="bg-blue-600 text-white rounded-md px-4 py-2"
                        onClick={() => handleTabClick('/sign-up')}
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;