import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();

    const handleOrderClick = () => {
        const user = localStorage.getItem('starbucks_logged_in_user');
        if (user) {
            navigate('/menu');
        } else {
            // Redirect to sign in and remember the target destination
            navigate('/signin?redirect=/menu');
        }
    };

    return (
        <div className="bg-[#1e3932] text-white py-4 md:py-6 px-4 md:px-8">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 text-center sm:text-left">
                <p className="text-base md:text-lg font-semibold max-w-xs md:max-w-none">
                    It's a great day for coffee
                </p>
                <button 
                    onClick={handleOrderClick}
                    className="rounded-full border-2 border-white px-6 py-1.5 md:py-2 font-semibold text-sm hover:bg-white hover:text-[#1e3932] transition-all duration-300"
                >
                    Start an order
                </button>
            </div>
        </div>
    );
};


export default Banner;
