import React from 'react';

const NondairySection = () => {
    return (
        <div className="flex flex-col md:flex-row items-stretch my-8">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 bg-gray-100 relative overflow-hidden">
                <img
                    src="/nondairy-drink.jpg"
                    alt="Holiday Beverage with Nondairy Milk"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right side - Red Content */}
            <div className="w-full md:w-1/2 bg-[#b8405e] text-white flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 md:py-16">
                <div className="max-w-md lg:max-w-lg text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
                        Make it nondairy. No extra charge.
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed">
                        Enjoy your favorite holiday beverage or other drink of your choice with nondairy milk.
                        Choose from oat, almond, coconut or soy—for no additional charge.
                    </p>
                    <button className="rounded-full border-2 border-white px-6 py-2.5 font-semibold text-base hover:bg-white hover:text-[#b8405e] transition-all duration-300">
                        Order now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NondairySection;
