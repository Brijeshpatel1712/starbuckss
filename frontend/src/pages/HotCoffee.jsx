import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';
import BottomFooter from '../components/BottomFooter';
import GiftCardBanner from '../components/GiftCardBanner';

// Import images
import blondeRoastImg from '../assets/Hot Coffee/Blonde Roast - Starbucks® Christmas Blonde.jpg';
import mediumRoastImg from '../assets/Hot Coffee/Medium Roast - Pike Place® Roast.jpg';
import caffeAmericanoImg from '../assets/Hot Coffee/Caffè Americano.jpg';
import caffeLatteImg from '../assets/Hot Coffee/Caffè Latte.jpg';
import eggnogLatteImg from '../assets/Hot Coffee/Eggnog Latte.jpg';
import cappuccinoImg from '../assets/Hot Coffee/Cappuccino.jpg';
import caffeMochaImg from '../assets/Hot Coffee/Caffè Mocha.jpg';
import peppermintMochaImg from '../assets/Hot Coffee/Peppermint Mocha.jpg';
import espressoMacchiatoImg from '../assets/Hot Coffee/Espresso Macchiato.jpg';
import caramelMacchiatoImg from '../assets/Hot Coffee/Caramel Macchiato.jpg';
import flatWhiteImg from '../assets/Hot Coffee/Flat White.jpg';
import cortadoImg from '../assets/Hot Coffee/Cortado.jpg';
import pecanOatmilkCortadoImg from '../assets/Hot Coffee/Pecan Oatmilk Cortado.jpg';
import espressoImg from '../assets/Hot Coffee/Espresso.jpg';
import espressoConPannaImg from '../assets/Hot Coffee/Espresso Con Panna.jpg';
import coffeeTravelerImg from '../assets/Hot Coffee/Coffee Traveler – Pike Place® Roast.jpg';

const CoffeeItem = ({ image, title }) => (
    <div className="flex flex-col items-center text-center group cursor-pointer">
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#1e3932] flex items-center justify-center overflow-hidden mb-4 transition-transform group-hover:scale-105 shadow-md">
            <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-base sm:text-xl font-medium text-gray-900 leading-tight max-w-[150px] sm:max-w-[200px]">{title}</h3>
    </div>
);

const HotCoffee = () => {
    const brewedCoffees = [
        { title: "Blonde Roast - Starbucks® Christmas Blonde", image: blondeRoastImg },
        { title: "Medium Roast - Pike Place® Roast", image: mediumRoastImg }
    ];

    const americanos = [
        { title: "Caffè Americano", image: caffeAmericanoImg }
    ];

    const lattes = [
        { title: "Caffè Latte", image: caffeLatteImg },
        { title: "Eggnog Latte", image: eggnogLatteImg }
    ];

    const cappuccinos = [
        { title: "Cappuccino", image: cappuccinoImg }
    ];

    const mochas = [
        { title: "Caffè Mocha", image: caffeMochaImg },
        { title: "Peppermint Mocha", image: peppermintMochaImg }
    ];

    const macchiatos = [
        { title: "Espresso Macchiato", image: espressoMacchiatoImg },
        { title: "Caramel Macchiato", image: caramelMacchiatoImg }
    ];

    const flatWhites = [
        { title: "Flat White", image: flatWhiteImg }
    ];

    const cortados = [
        { title: "Cortado", image: cortadoImg },
        { title: "Pecan Oatmilk Cortado", image: pecanOatmilkCortadoImg }
    ];

    const espressos = [
        { title: "Espresso", image: espressoImg },
        { title: "Espresso Con Panna", image: espressoConPannaImg }
    ];

    const travelers = [
        { title: "Coffee Traveler - Pike Place® Roast", image: coffeeTravelerImg },
        { title: "Coffee Traveler - Decaf Pike Place® Roast", image: coffeeTravelerImg }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <div className="container mx-auto px-4 sm:px-8 py-8">
                <div className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 font-medium">
                    <Link to="/menu" className="hover:underline">Menu</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 font-bold">Hot Coffee</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">Hot Coffee</h1>

                {[
                    { title: "Brewed Coffee", data: brewedCoffees },
                    { title: "Americano", data: americanos },
                    { title: "Latte", data: lattes },
                    { title: "Cappuccino", data: cappuccinos },
                    { title: "Mocha", data: mochas },
                    { title: "Macchiato", data: macchiatos },
                    { title: "Flat White", data: flatWhites },
                    { title: "Cortado", data: cortados },
                    { title: "Espresso Shot", data: espressos },
                    { title: "Coffee Traveler", data: travelers }
                ].map((section, idx) => (
                    <div key={idx} className="mb-12 sm:mb-16">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 border-b pb-2">{section.title}</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12">
                            {section.data.map((item, index) => (
                                <CoffeeItem key={index} title={item.title} image={item.image} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <GiftCardBanner />
            <FooterNav />
            <BottomFooter />
        </div >
    );
};

export default HotCoffee;

