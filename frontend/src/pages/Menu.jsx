import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';
import GiftCardBanner from '../components/GiftCardBanner';
import BottomFooter from '../components/BottomFooter';

// Import menu images
import hotCoffeeImg from '../assets/menu/Hot Coffee.jpg';
import coldCoffeeImg from '../assets/menu/Cold Coffee.jpg';
import breakfastImg from '../assets/menu/Breakfast.jpg';
import bakeryImg from '../assets/menu/Bakery.jpg';
import wholeBeanImg from '../assets/menu/Whole Bean.jpg';
import viaInstantImg from '../assets/menu/Starbucks VIA® Instant.jpg';

const Menu = () => {
    const [activeTab, setActiveTab] = useState('menu');

    const drinkCategories = [
        'Hot Coffee',
        'Cold Coffee'
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Sub Navigation */}
            <div className="border-b border-gray-200 bg-white sticky top-[88px] z-40">
                <div className="container mx-auto px-8">
                    <div className="flex gap-8">
                        <button
                            onClick={() => setActiveTab('menu')}
                            className={`py-4 px-2 font-semibold text-sm border-b-2 transition-colors ${activeTab === 'menu'
                                ? 'border-green-700 text-gray-900'
                                : 'border-transparent text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Menu
                        </button>
                        <Link
                            to="/featured"
                            className={`py-4 px-2 font-semibold text-sm border-b-2 transition-colors ${activeTab === 'featured'
                                ? 'border-green-700 text-gray-900'
                                : 'border-transparent text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Featured
                        </Link>
                        <Link
                            to="/menu/previous"
                            className={`py-4 px-2 font-semibold text-sm border-b-2 transition-colors ${activeTab === 'previous'
                                ? 'border-green-700 text-gray-900'
                                : 'border-transparent text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Previous
                        </Link>
                        <Link
                            to="/menu/favorites"
                            className={`py-4 px-2 font-semibold text-sm border-b-2 transition-colors ${activeTab === 'favorites'
                                ? 'border-green-700 text-gray-900'
                                : 'border-transparent text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Favorites
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-8 py-12">
                <div className="flex gap-12">
                    {/* Sidebar */}
                    <aside className="w-64 flex-shrink-0">
                        {/* Drinks Section */}
                        <h2 className="text-xl font-semibold mb-6">Drinks</h2>
                        <ul className="space-y-3 mb-8">
                            {drinkCategories.map((category, index) => (
                                <li key={index}>
                                    {category === 'Hot Coffee' ? (
                                        <Link
                                            to="/menu/hot-coffee"
                                            className="text-gray-600 hover:text-gray-900 text-base"
                                        >
                                            {category}
                                        </Link>
                                    ) : (
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-gray-900 text-base"
                                        >
                                            {category}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Food Section */}
                        <h2 className="text-xl font-semibold mb-6">Food</h2>
                        <ul className="space-y-3 mb-8">
                            <li>
                                <Link
                                    to="/menu/breakfast"
                                    className="text-gray-600 hover:text-gray-900 text-base"
                                >
                                    Breakfast
                                </Link>
                            </li>
                            <li><a href="#" className="text-gray-600 hover:text-gray-900 text-base">Bakery</a></li>
                        </ul>

                        {/* At Home Coffee Section */}
                        <h2 className="text-xl font-semibold mb-6">At Home Coffee</h2>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/menu/whole-bean"
                                    className="text-gray-600 hover:text-gray-900 text-base"
                                >
                                    Whole Bean
                                </Link>
                            </li>
                            <li><a href="#" className="text-gray-700 hover:text-green-700 transition-colors text-sm">Starbucks VIA® Instant</a></li>
                        </ul>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1">
                        <h1 className="text-3xl font-semibold mb-8">Drinks</h1>

                        {/* Drink Categories Grid */}
                        <div className="grid grid-cols-2 gap-8">
                            {/* Hot Coffee */}
                            <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                                <Link to="/menu/hot-coffee" className="contents">
                                    <div className="w-28 h-28 rounded-full bg-[#00704A] flex items-center justify-center overflow-hidden flex-shrink-0">
                                        <img
                                            src={hotCoffeeImg}
                                            alt="Hot Coffee"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800">Hot Coffee</h3>
                                </Link>
                            </div>

                            {/* Cold Coffee */}
                            <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                                <div className="w-28 h-28 rounded-full bg-[#00704A] flex items-center justify-center overflow-hidden flex-shrink-0">
                                    <img
                                        src={coldCoffeeImg}
                                        alt="Cold Coffee"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Cold Coffee</h3>
                            </div>
                        </div>

                        {/* Food Section */}
                        <h1 className="text-3xl font-semibold mb-8 mt-16">Food</h1>

                        {/* Food Categories Grid */}
                        <div className="grid grid-cols-2 gap-8">
                            {/* Breakfast */}
                            <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                                <div className="w-28 h-28 rounded-full bg-[#00704A] flex items-center justify-center overflow-hidden flex-shrink-0">
                                    <img
                                        src={breakfastImg}
                                        alt="Breakfast"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Breakfast</h3>
                            </div>

                            {/* Bakery */}
                            <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                                <div className="w-28 h-28 rounded-full bg-[#00704A] flex items-center justify-center overflow-hidden flex-shrink-0">
                                    <img
                                        src={bakeryImg}
                                        alt="Bakery"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Bakery</h3>
                            </div>
                        </div>

                        {/* At Home Coffee Section */}
                        <h1 className="text-3xl font-semibold mb-8 mt-16">At Home Coffee</h1>

                        {/* At Home Coffee Categories Grid */}
                        <div className="grid grid-cols-2 gap-8">
                            {/* Whole Bean */}
                            <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                                <div className="w-28 h-28 rounded-full bg-[#00704A] flex items-center justify-center overflow-hidden flex-shrink-0">
                                    <img
                                        src={wholeBeanImg}
                                        alt="Whole Bean"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Whole Bean</h3>
                            </div>

                            {/* Starbucks VIA Instant */}
                            <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
                                <div className="w-28 h-28 rounded-full bg-[#00704A] flex items-center justify-center overflow-hidden flex-shrink-0">
                                    <img
                                        src={viaInstantImg}
                                        alt="Starbucks VIA Instant"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">Starbucks VIA® Instant</h3>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <GiftCardBanner />
            <FooterNav />
            <BottomFooter />
        </div>
    );
};

export default Menu;
