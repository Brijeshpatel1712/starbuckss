import React from 'react';
import Header from '../components/Header';
import StarbucksLogo from '../components/StarbucksLogo';
import GiftCardBanner from '../components/GiftCardBanner';
import FooterNav from '../components/FooterNav';
import BottomFooter from '../components/BottomFooter';

const GiftCards = () => {
    const featuredCards = [
        { id: 1, title: "Happy Holidays", color: "bg-blue-200" },
        { id: 2, title: "Hanukkah", color: "bg-blue-400" },
        { id: 3, title: "Snowman", color: "bg-blue-300" },
        { id: 4, title: "Thank You", color: "bg-green-100" },
        { id: 5, title: "Happy Birthday", color: "bg-pink-200" },
    ];

    const holidayCards = [
        { id: 1, title: "Happy Holidays", color: "bg-indigo-200" },
        { id: 2, title: "Snowman", color: "bg-blue-100" },
        { id: 3, title: "Holiday Cheer", color: "bg-red-100" },
        { id: 4, title: "Warm Wishes", color: "bg-orange-100" },
        { id: 5, title: "Fa La La", color: "bg-green-200" },
    ];

    const birthdayCards = [
        { id: 1, title: "Birthday Cake", color: "bg-teal-100" },
        { id: 2, title: "Celebrate You", color: "bg-pink-100" },
        { id: 3, title: "Party Time", color: "bg-yellow-100" },
        { id: 4, title: "Make a Wish", color: "bg-purple-100" },
    ];

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 w-full">
                <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
                    <h1 className="text-2xl md:text-[28px] font-bold text-gray-900 mb-6 md:mb-8">Gift cards</h1>

                    <CarouselSection title="FEATURED" cards={featuredCards} />

                    {/* Info Banner */}
                    <div className="bg-[#f2f0eb] p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 rounded-lg shadow-sm mb-12 text-center md:text-left">
                        <div className="w-16 h-10 flex-shrink-0 relative">
                            <div className="w-full h-full bg-white rounded shadow-sm flex items-center justify-center border border-gray-100">
                                <StarbucksLogo className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-800">
                                Effortlessly send up to 10 eGifts per purchase. Select a design to start!
                            </p>
                        </div>
                    </div>
                    <GiftCardBanner />

                    <CarouselSection title="HOLIDAY" cards={holidayCards} />
                    <CarouselSection title="BIRTHDAY" cards={birthdayCards} />

                </section>

                <section className="bg-[#e9f2ef] py-8 md:py-10">
                    <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto text-center md:text-left">
                            <h2 className="text-[20px] md:text-[24px] font-bold text-gray-900">Received a gift card?</h2>
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
            </main>
            <FooterNav />
            <BottomFooter />
        </div>
    );
};

const CarouselSection = ({ title, cards }) => {
    const scrollContainerRef = React.useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300; // Width of a card + gap roughly
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="mb-12 relative group">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-[14px] font-bold text-gray-500 tracking-widest uppercase">{title}</h2>
                <a href="#" className="text-[#008248] font-semibold hover:underline text-sm">See all</a>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 focus:outline-none transition-opacity opacity-0 group-hover:opacity-100 disabled:opacity-0"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-[-16px] z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 focus:outline-none transition-opacity opacity-0 group-hover:opacity-100"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Carousel Container */}
            <div ref={scrollContainerRef} className="relative overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide scroll-smooth">
                <div className="flex gap-4 min-w-min">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className={`w-[280px] h-[175px] rounded-xl shadow-md flex-shrink-0 relative overflow-hidden cursor-pointer hover:shadow-lg transition-all transform hover:-translate-y-1 ${card.color}`}
                        >
                            <div className="absolute inset-0 flex items-center justify-center p-6">
                                <span className={`text-2xl font-bold ${card.textColor || 'text-gray-800'} text-center font-serif leading-tight drop-shadow-sm`}>{card.title}</span>
                            </div>
                            <div className="absolute top-4 right-4">
                                <StarbucksLogo className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm p-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GiftCards;
