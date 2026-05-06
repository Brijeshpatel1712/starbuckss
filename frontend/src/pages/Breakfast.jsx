import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';
import BottomFooter from '../components/BottomFooter';

// Import images
import eggPestoImg from '../assets/Breakfast/Egg, Pesto & Mozzarella Sandwich.jpg';
import baconGoudaImg from '../assets/Breakfast/Bacon, Gouda & Egg Sandwich.jpg';

// Wraps Images
import baconSausageWrapImg from '../assets/Breakfast/Bacon, Sausage & Egg Wrap.jpg';
import spinachFetaWrapImg from '../assets/Breakfast/Spinach, Feta & Egg White Wrap.jpg';

// Egg Bites & Bakes Images
import baconGruyereImg from '../assets/Breakfast/Bacon & Gruyère Egg Bites.jpg';
import italianSausageImg from '../assets/Breakfast/Italian Sausage Egg Bites.jpg';

// More Breakfast Classics Images
import oatmealImg from '../assets/Breakfast/Rolled & Steel-Cut Oatmeal.jpg';
import strawberryYogurtImg from '../assets/Breakfast/Ellenos Strawberry Shortcake Greek Yogurt.jpg';

const BreakfastItem = ({ image, title }) => (
    <div className="flex flex-col items-center text-center group cursor-pointer">
        <div className="w-32 h-32 rounded-full bg-[#00704A] flex items-center justify-center overflow-hidden mb-4 transition-transform group-hover:scale-105">
            <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 leading-tight max-w-[200px]">{title}</h3>
    </div>
);

const Breakfast = () => {
    const breakfastSandwiches = [
        { title: "Egg, Pesto & Mozzarella Sandwich", image: eggPestoImg },
        { title: "Bacon, Gouda & Egg Sandwich", image: baconGoudaImg }
    ];

    const breakfastWraps = [
        { title: "Bacon, Sausage & Egg Wrap", image: baconSausageWrapImg },
        { title: "Spinach, Feta & Egg White Wrap", image: spinachFetaWrapImg }
    ];

    const eggBitesAndBakes = [
        { title: "Bacon & Gruyère Egg Bites", image: baconGruyereImg },
        { title: "Italian Sausage Egg Bites", image: italianSausageImg }
    ];

    const breakfastClassics = [
        { title: "Rolled & Steel-Cut Oatmeal", image: oatmealImg },
        { title: "Ellenos Strawberry Shortcake Greek Yogurt", image: strawberryYogurtImg }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <div className="container mx-auto px-8 py-8">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-8 font-medium">
                    <Link to="/menu" className="hover:underline">Menu</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-bold">Breakfast</span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-12">Breakfast</h1>

                {/* Section 1: Breakfast Sandwiches */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-2">Breakfast Sandwiches</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                        {breakfastSandwiches.map((item, index) => (
                            <BreakfastItem key={index} title={item.title} image={item.image} />
                        ))}
                    </div>
                </div>

                {/* Section 2: Breakfast Wraps */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-2">Breakfast Wraps</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                        {breakfastWraps.map((item, index) => (
                            <BreakfastItem key={index} title={item.title} image={item.image} />
                        ))}
                    </div>
                </div>

                {/* Section 3: Egg Bites & Bakes */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-2">Egg Bites & Bakes</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                        {eggBitesAndBakes.map((item, index) => (
                            <BreakfastItem key={index} title={item.title} image={item.image} />
                        ))}
                    </div>
                </div>

                {/* Section 4: More Breakfast Classics */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-2">More Breakfast Classics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                        {breakfastClassics.map((item, index) => (
                            <BreakfastItem key={index} title={item.title} image={item.image} />
                        ))}
                    </div>
                </div>
            </div>

            <FooterNav />
            <BottomFooter />
        </div>
    );
};

export default Breakfast;
