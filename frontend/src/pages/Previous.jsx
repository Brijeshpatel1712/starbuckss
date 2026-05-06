import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';
import BottomFooter from '../components/BottomFooter';
import moonIllustration from '../assets/moon_illustration.png';

const Previous = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Sub Navigation */}
            <div className="border-b border-gray-200 bg-white sticky top-[88px] z-40">
                <div className="container mx-auto px-8">
                    <div className="flex gap-8">
                        <Link
                            to="/menu"
                            className="py-4 px-2 font-semibold text-sm border-b-2 border-transparent text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Menu
                        </Link>
                        <Link
                            to="/featured"
                            className="py-4 px-2 font-semibold text-sm border-b-2 border-transparent text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Featured
                        </Link>
                        <Link
                            to="/menu/previous"
                            className="py-4 px-2 font-semibold text-sm border-b-2 border-green-700 text-gray-900 transition-colors"
                        >
                            Previous
                        </Link>
                        <Link
                            to="/menu/favorites"
                            className="py-4 px-2 font-semibold text-sm border-b-2 border-transparent text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Favorites
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-8 py-20">
                <div className="max-w-2xl mx-auto flex flex-col items-start">
                    <h1 className="text-3xl font-bold mb-12">Previous</h1>

                    <div className="w-full flex flex-col items-center text-center">
                        <div className="w-64 h-64 mb-8">
                            <img
                                src={moonIllustration}
                                alt="Moon Illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <h2 className="text-3xl font-bold mb-4">When history repeats itself</h2>
                        <p className="text-gray-600 text-lg mb-8 max-w-md">
                            Previous orders will appear here to quickly order again.
                        </p>

                        <div className="flex gap-4">
                            <Link
                                to="/signin"
                                className="rounded-full border border-gray-900 px-6 py-2 font-semibold text-base hover:bg-gray-100 transition-colors"
                            >
                                Sign in
                            </Link>
                            <Link
                                to="/account/create"
                                className="rounded-full bg-black text-white px-6 py-2 font-semibold text-base hover:bg-gray-800 transition-colors"
                            >
                                Join now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <FooterNav />
            <BottomFooter />
        </div>
    );
};

export default Previous;
