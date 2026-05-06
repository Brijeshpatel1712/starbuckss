import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';
import BottomFooter from '../components/BottomFooter';
import favoritesIllustration from '../assets/favorites_illustration.png';

const Favorites = () => {
    const [activeTab, setActiveTab] = useState('favorites');

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Sub Navigation */}
            <div className="border-b border-gray-200 bg-white sticky top-[72px] md:top-[88px] z-40">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide">
                        <Link
                            to="/menu"
                            className="py-4 px-2 font-semibold text-sm border-b-2 border-transparent text-gray-600 hover:text-gray-900 whitespace-nowrap transition-colors"
                        >
                            Menu
                        </Link>
                        <Link
                            to="/featured"
                            className="py-4 px-2 font-semibold text-sm border-b-2 border-transparent text-gray-600 hover:text-gray-900 whitespace-nowrap transition-colors"
                        >
                            Featured
                        </Link>
                        <Link
                            to="/menu/previous"
                            className="py-4 px-2 font-semibold text-sm border-b-2 border-transparent text-gray-600 hover:text-gray-900 whitespace-nowrap transition-colors"
                        >
                            Previous
                        </Link>
                        <Link
                            to="/menu/favorites"
                            className="py-4 px-2 font-semibold text-sm border-b-2 border-green-700 text-gray-900 whitespace-nowrap transition-colors"
                        >
                            Favorites
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-[#f9f9f9] min-h-[60vh] flex flex-col items-center justify-center py-16 px-4">
                <div className="max-w-md text-center">
                    <div className="mb-8 flex justify-center">
                        <h2 className="text-2xl font-bold text-gray-900">Favorites</h2>
                    </div>

                    <div className="mb-8 flex justify-center">
                        <img
                            src={favoritesIllustration}
                            alt="Cassette tapes and notebook illustration"
                            className="w-64 h-auto object-contain mix-blend-multiply"
                        />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Save your favorite mixes
                    </h3>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Use the heart to save customizations. Your favorites will appear here to order again.
                    </p>

                    <div className="flex justify-center gap-4">
                        <Link
                            to="/signin"
                            className="rounded-full border border-gray-900 px-6 py-2 font-semibold text-base hover:bg-gray-100 transition-colors text-gray-900"
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

            <FooterNav />
            <BottomFooter />
        </div>
    );
};

export default Favorites;
