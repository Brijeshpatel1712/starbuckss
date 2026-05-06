import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarbucksLogo from './StarbucksLogo';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-4 md:py-6 bg-white shadow-sm font-sans sticky top-0 z-50">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-10 lg:gap-12">
                <Link to="/" className="shrink-0">
                    <StarbucksLogo className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </Link>
                <nav className="hidden md:flex items-center gap-4 lg:gap-8">
                    <Link to="/menu" className="text-gray-900 font-bold tracking-widest text-[12px] lg:text-[13px] hover:text-green-700 transition-colors uppercase whitespace-nowrap">
                        Menu
                    </Link>
                    <Link to="/rewards" className="text-gray-900 font-bold tracking-widest text-[12px] lg:text-[13px] hover:text-green-700 transition-colors uppercase whitespace-nowrap">
                        Rewards
                    </Link>
                    <Link to="/gift" className="text-gray-900 font-bold tracking-widest text-[12px] lg:text-[13px] hover:text-green-700 transition-colors uppercase whitespace-nowrap">
                        Gift Cards
                    </Link>
                </nav>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
                <div className="hidden md:flex items-center gap-4 lg:gap-6">
                    <a href="#" className="flex items-center gap-2 font-semibold text-xs lg:text-sm hover:text-green-700 transition-colors whitespace-nowrap">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        <span className="hidden lg:inline">Find a store</span>
                        <span className="lg:hidden">Stores</span>
                    </a>
                    <Link to="/signin" className="rounded-full border border-gray-900 px-3 lg:px-4 py-1.5 font-semibold text-xs lg:text-sm hover:bg-gray-100 transition-colors whitespace-nowrap">
                        Sign in
                    </Link>
                    <Link to="/account/create" className="rounded-full bg-black text-white border border-black px-3 lg:px-4 py-1.5 font-semibold text-xs lg:text-sm hover:bg-gray-800 transition-colors whitespace-nowrap">
                        Join now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Content */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg md:hidden animate-in slide-in-from-top duration-200 overflow-hidden">
                    <nav className="flex flex-col p-6 gap-4">
                        <Link to="/menu" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-gray-900">Menu</Link>
                        <Link to="/rewards" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-gray-900">Rewards</Link>
                        <Link to="/gift" onClick={() => setIsMenuOpen(false)} className="text-xl font-bold text-gray-900">Gift Cards</Link>
                        <hr className="my-2 border-gray-100" />
                        <div className="flex flex-col gap-4">
                            <Link to="/signin" onClick={() => setIsMenuOpen(false)} className="rounded-full border border-gray-900 px-6 py-2 font-semibold text-center hover:bg-gray-100">Sign in</Link>
                            <Link to="/account/create" onClick={() => setIsMenuOpen(false)} className="rounded-full bg-black text-white px-6 py-2 font-semibold text-center hover:bg-gray-800">Join now</Link>
                            <a href="#" className="flex items-center gap-2 font-semibold text-gray-900 mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                Find a store
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;

