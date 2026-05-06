import React from 'react';

const PromoSection = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-stretch my-4 md:my-8">
            {/* Left side - Green Content */}
            <div className="w-full md:w-1/2 bg-[#006241] text-white flex items-center justify-center px-6 md:px-12 py-12 md:py-16">
                <div className="max-w-md text-center">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-6 md:mb-8 leading-tight">
                        A little bite, a lot of good
                    </h2>
                    <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                        For every purchase of Crispy Grilled Cheese on Sourdough at participating locations,
                        we'll donate the value of two school meals** to support programs that feed kids.
                        Together we'll build a brighter future.
                    </p>
                    <button className="rounded-full border-2 border-white px-8 py-2 md:py-2.5 font-semibold text-base hover:bg-white hover:text-[#006241] transition-all duration-300">
                        Order now
                    </button>
                </div>
            </div>

            {/* Right side - Red Background with Image */}
            <div className="w-full md:w-1/2 bg-[#d62b1f] relative overflow-hidden min-h-[300px] md:min-h-0">
                <img
                    src="/grilled-cheese.jpg"
                    alt="Crispy Grilled Cheese Sandwich"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};


export default PromoSection;
