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
            <div className="w-full md:w-1/2 bg-[#1e7e5a] text-white flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 sm:py-12 md:py-16 lg:py-24">
                <div className="max-w-md lg:max-w-lg xl:max-w-xl text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 leading-tight">
                        Starbucks for Life has new prizes
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
                        This week, Starbucks for Life Merrython heads to snowy Tokyo.
                        Launch the game now for a chance to win prizes like Starbucks for
                        a year or Starbucks for Life*.
                    </p>
                    <button className="rounded-full border-2 border-white px-6 sm:px-8 py-2 md:py-2.5 font-semibold text-sm sm:text-base hover:bg-white hover:text-[#1e7e5a] transition-all duration-300">
                        Play now
                    </button>
                </div>
            </div>
        </div>
    );
};


export default HeroSection;
