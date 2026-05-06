import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';
import BottomFooter from '../components/BottomFooter';

// Import images
import caffeVeronaImg from '../assets/Whole Bean/Caffè Verona®.jpg';
import decafPikePlaceImg from '../assets/Whole Bean/Decaf Pike Place Roast.jpg';
import decafSumatraImg from '../assets/Whole Bean/Decaf Sumatra.jpg';
import espressoRoastImg from '../assets/Whole Bean/Espresso Roast.jpg';
import guatemalaAntiguaImg from '../assets/Whole Bean/Guatemala Antigua.jpg';
import pikePlaceImg from '../assets/Whole Bean/Pike Place® Roast.jpg';
import christmasBlondeImg from '../assets/Whole Bean/Starbucks® Christmas Blonde Roast.jpg';
import sunseraBlendImg from '../assets/Whole Bean/Starbucks® Sunsera Blend.jpg';

const WholeBeanItem = ({ image, title }) => (
    <div className="flex flex-col items-center text-center group cursor-pointer">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1e3932] flex items-center justify-center overflow-hidden mb-3 sm:mb-4 transition-transform group-hover:scale-105">
            <img src={image} alt={title} className="w-full h-full object-contain p-1.5 sm:p-2" />
        </div>
        <h3 className="text-sm sm:text-lg font-medium text-gray-900 leading-tight max-w-[120px] sm:max-w-[200px]">{title}</h3>
    </div>
);

const WholeBean = () => {
    // Blonde Roast
    const blondeRoast = [
        { title: "Starbucks® Christmas Blonde Roast", image: christmasBlondeImg },
        { title: "Starbucks® Sunsera Blend", image: sunseraBlendImg }
    ];

    // Medium Roast
    const mediumRoast = [
        { title: "Pike Place® Roast", image: pikePlaceImg },
        { title: "Guatemala Antigua", image: guatemalaAntiguaImg }
    ];

    // Dark Roast
    const darkRoast = [
        { title: "Caffè Verona®", image: caffeVeronaImg },
        { title: "Espresso Roast", image: espressoRoastImg }
    ];

    // Decaf
    const decafCoffees = [
        { title: "Decaf Pike Place® Roast", image: decafPikePlaceImg },
        { title: "Decaf Sumatra", image: decafSumatraImg }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <div className="container mx-auto px-4 sm:px-8 py-8">
                {/* Breadcrumb */}
                <div className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 font-medium">
                    <Link to="/menu" className="hover:underline">Menu</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-bold">Whole Bean</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">Whole Bean</h1>

                {/* Section: Blonde Roast */}
                <div className="mb-12 sm:mb-16">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 border-b pb-2">Blonde Roast</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12">
                        {blondeRoast.map((item, index) => (
                            <WholeBeanItem key={index} title={item.title} image={item.image} />
                        ))}
                    </div>
                </div>

                {/* Section: Medium Roast */}
                <div className="mb-12 sm:mb-16">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 border-b pb-2">Medium Roast</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12">
                        {mediumRoast.map((item, index) => (
                            <WholeBeanItem key={index} title={item.title} image={item.image} />
                        ))}
                    </div>
                </div>

                {/* Section: Dark Roast */}
                <div className="mb-12 sm:mb-16">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 border-b pb-2">Dark Roast</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12">
                        {darkRoast.map((item, index) => (
                            <WholeBeanItem key={index} title={item.title} image={item.image} />
                        ))}
                    </div>
                </div>

                {/* Section: Decaf Coffees */}
                <div className="mb-12 sm:mb-16">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 border-b pb-2">Decaf Coffees</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12">
                        {decafCoffees.map((item, index) => (
                            <WholeBeanItem key={index} title={item.title} image={item.image} />
                        ))}
                    </div>
                </div>
            </div>

            <FooterNav />
            <BottomFooter />
        </div>
    );
};

export default WholeBean;
