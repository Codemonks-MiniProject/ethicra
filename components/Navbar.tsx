"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '@/app/firebase/firebaseConfig'; // Assuming your Firebase config is here

const Navbar = () => {
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState(pathname); // Initialize with the current path
    const [user, setUser] = useState<any>(null); // State to track logged-in user
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const auth = getAuth(app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe(); // Cleanup listener on unmount
    }, [auth]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const handleTabClick = (href: string) => {
        setActiveTab(href);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = async () => {
        setIsDropdownOpen(false);
        try {
            await signOut(auth);
            console.log('User signed out');
            router.push('/'); // Redirect to home or login page after logout
        } catch (error: any) {
            console.error('Error signing out:', error);
            // Handle logout error (e.g., display a message)
        }
    };

    return (
        <nav className="bg-white p-4">
            <div className="container mx-auto flex justify-between items-center px-9">
                <Link href={'/'} className="text-2xl font-bold">
                    Logo
                </Link>
                <div className="flex items-center space-x-6">
                    {!user && (
                        <>
                            <Link
                                href={'/'}
                                className={`text-[#5D5A88] relative ${activeTab === '/' ? '' : ''
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
                                className={`text-[#5D5A88] relative ${activeTab === '/about' ? '' : ''
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
                                className={`text-[#5D5A88] relative ${activeTab === '/contact' ? '' : ''
                                    }`}
                                onClick={() => handleTabClick('/contact')}
                            >
                                Contact
                                {activeTab === '/contact' && (
                                    <div className="absolute bottom-[-5px] left-[10%] w-[80%] h-[3px] bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"></div>
                                )}
                            </Link>
                        </>
                    )}

                    {user ? (
                        // Display dashboard-like elements when the user is logged in
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center text-gray-600 font-semibold cursor-pointer"
                            >
                                {user.displayName ? user.displayName.charAt(0).toUpperCase() : (user.email ? user.email.charAt(0).toUpperCase() : 'U')}
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-10 right-0 bg-white shadow-md rounded-md py-2 w-40 z-10">
                                    <Link href="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        Dashboard
                                    </Link>
                                    <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        Profile
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                                    >
                                        Logout
                                    </button>
                                    <div className="border-t border-gray-200 my-1"></div>
                                    <Link href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                                        Settings
                                    </Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        // Display Login and Get Started buttons when the user is not logged in
                        <>
                            <Link
                                href={'/login'}
                                className="border border-gray-300 rounded-md px-4 py-2 text-[#5D5A88]"
                                onClick={() => handleTabClick('/login')}
                            >
                                Login
                            </Link>
                            <Link
                                href={'/sign-up'}
                                className="bg-[#4A3AFF] text-white rounded-md px-4 py-2"
                                onClick={() => handleTabClick('/sign-up')}
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;