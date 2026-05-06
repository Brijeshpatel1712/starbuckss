import React from 'react';

const GiftCardBanner = () => {
    return (
        <section className="bg-[#e9f2ef] py-8 md:py-10">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto text-center md:text-left">
                    <h2 className="text-[18px] md:text-[24px] font-bold text-gray-900">Received a gift card?</h2>
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-auto">
                        <span className="text-gray-500 text-[14px] font-medium">Earns 2<span className="text-[#cba258]">★</span> per $1</span>
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full md:w-auto">
                            <button className="rounded-full px-4 py-1.5 border border-gray-900 font-semibold text-sm hover:bg-gray-100 transition-colors">
                                Add or Reload
                            </button>
                            <button className="rounded-full px-4 py-1.5 bg-black text-white font-semibold text-sm hover:bg-gray-800 transition-colors">
                                Check balance
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-auto flex justify-center md:justify-end">
                    <a href="#" className="flex items-center gap-1 text-[#008248] text-sm font-semibold hover:underline">
                        Card Terms & Conditions
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GiftCardBanner;
