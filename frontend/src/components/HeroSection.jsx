import React from 'react';

const HeroSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-stretch my-4 md:my-8">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 bg-[#d4e9e2] min-h-[300px] md:min-h-0">
                <img
                    src="/winter-scene.png"
                    alt="Winter Starbucks Scene"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right side - Content */}
            <div className="w-full md:w-1/2 bg-[#1e7e5a] text-white flex items-center justify-center px-6 md:px-12 py-12 md:py-16">
                <div className="max-w-md text-center">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6 leading-tight">
                        Starbucks for Life has new prizes
                    </h2>
                    <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                        This week, Starbucks for Life Merrython heads to snowy Tokyo.
                        Launch the game now for a chance to win prizes like Starbucks for
                        a year or Starbucks for Life*.
                    </p>
                    <button className="rounded-full border-2 border-white px-8 py-2 md:py-2.5 font-semibold text-base hover:bg-white hover:text-[#1e7e5a] transition-all duration-300">
                        Play now
                    </button>
                </div>
            </div>
        </div>
    );
};


export default HeroSection;
