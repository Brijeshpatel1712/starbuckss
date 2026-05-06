import React from 'react';

const RefillsSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-stretch my-8">
            {/* Left side - Green Content */}
            <div className="w-full md:w-1/2 bg-[#1e7e5a] text-white flex items-center justify-center px-12 py-16">
                <div className="max-w-md text-center">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-8">
                        Free refills while you stay
                    </h2>
                    <p className="text-lg mb-8 leading-relaxed">
                        Stay in our café to enjoy your favorite beverage and refills of hot and iced brewed
                        coffee or tea are on us***—including Starbucks® Christmas Blend and Starbucks®
                        Christmas Blonde Roast.
                    </p>
                    <button className="rounded-full border-2 border-white px-6 py-2.5 font-semibold text-base hover:bg-white hover:text-[#1e7e5a] transition-all duration-300">
                        Order now
                    </button>
                </div>
            </div>

            {/* Right side - Coffee Image */}
            <div className="w-full md:w-1/2 bg-gray-100 relative overflow-hidden">
                <img
                    src="/coffee-refills.jpg"
                    alt="Coffee Cup on Table"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default RefillsSection;
