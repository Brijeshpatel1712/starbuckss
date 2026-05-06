import React from 'react';

const FreeCupSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-stretch my-8">
            {/* Left side - Illustration */}
            <div className="w-full md:w-1/2 bg-gray-50 relative overflow-hidden">
                <img
                    src="/free-cup-cheer.jpg"
                    alt="Free Holiday Drink Illustration"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right side - Green Content */}
            <div className="w-full md:w-1/2 bg-[#006241] text-white flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 md:py-16">
                <div className="max-w-md lg:max-w-lg text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
                        Your free cup of cheer
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed">
                        Celebrate the season with a <strong>free handcrafted drink</strong> with purchase.
                        It's our gift to you during your first week as a Starbucks® Rewards member.****
                    </p>
                    <button className="rounded-full border-2 border-white px-6 py-2.5 font-semibold text-base hover:bg-white hover:text-[#006241] transition-all duration-300">
                        Join now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FreeCupSection;
