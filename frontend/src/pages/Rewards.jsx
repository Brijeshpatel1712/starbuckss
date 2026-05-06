import { useState } from 'react';
import Header from '../components/Header';
import rewardsHero from '../assets/rewards-hero-new.png';
import twentyFiveStar from '../assets/Rewards/25.png';
import oneHundredStar from '../assets/Rewards/100.png';
import twoHundredStar from '../assets/Rewards/200.png';
import threeHundredStar from '../assets/Rewards/300.png';
import fourHundredStar from '../assets/Rewards/400.png';
import funFreebies from '../assets/Rewards/1-fun-freebies.jpg';
import orderAndPayAhead from '../assets/Rewards/2-order-and-pay-ahead.jpg';
import getToFreeFaster from '../assets/Rewards/3-get-to-free-faster.jpg';
import oneA from '../assets/Rewards/1A.png';
import oneB from '../assets/Rewards/1B.png';
import twoA from '../assets/Rewards/2A.png';
import twoB from '../assets/Rewards/2B.png';
import deltaSkymiles from '../assets/Rewards/delta-skymiles.png';
import bankOfAmerica from '../assets/Rewards/bank-of-america.png';
import marriottBonvoy from '../assets/Rewards/marriott-logo.png';
import FooterNav from '../components/FooterNav';
import GiftCardBanner from '../components/GiftCardBanner';
import BottomFooter from '../components/BottomFooter';

const Rewards = () => {
    const [activeTab, setActiveTab] = useState(25);

    const favoritesTabs = [
        {
            stars: 25,
            image: twentyFiveStar,
            title: "Customize your drink",
            description: "Make your drink just right with an extra espresso shot or a dash of your favorite syrup."
        },
        {
            stars: 100,
            image: oneHundredStar,
            title: "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
            description: "Treat yourself to an iced coffee, buttery croissant, bag of chips and more."
        },
        {
            stars: 200,
            image: twoHundredStar,
            title: "Handcrafted drink, hot breakfast or parfait",
            description: "Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink."
        },
        {
            stars: 300,
            image: threeHundredStar,
            title: "Sandwich, protein box or at-home coffee",
            description: "Keep your energy up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant."
        },
        {
            stars: 400,
            image: fourHundredStar,
            title: "Select Starbucks® Merchandise",
            description: "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20."
        }
    ];

    const activeContent = favoritesTabs.find(tab => tab.stars === activeTab);

    return (
        <>
            <Header />
            <div className="w-full bg-[#d4e9e2] bg-opacity-30">
                <div className="flex flex-col md:flex-row w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                    <div className="flex-1 flex flex-col justify-center items-start px-6 sm:px-10 md:px-12 lg:px-20 py-10 sm:py-16 md:py-12">
                        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold text-[#1e3932] mb-4 leading-tight">
                            It’s a great day for <br className="hidden sm:block" /> free coffee
                        </h2>
                        <p className="text-[16px] sm:text-[18px] md:text-[19px] lg:text-[22px] text-[#1e3932] mb-8 font-medium">
                            Sign up and start enjoying the perks of Starbucks® Rewards.
                        </p>
                        <a
                            href="/account/create"
                            className="inline-block bg-[#008248] text-white font-bold rounded-full px-6 sm:px-8 py-2 md:py-2.5 hover:bg-[#006236] transition-colors mb-6 text-sm sm:text-base"
                        >
                            Join now
                        </a>
                        <div className="text-[14px] sm:text-[16px] font-semibold">
                            <span className="text-[#1e3932]">It's even better</span>
                            <a href="#" className="underline ml-1 hover:no-underline text-[#1e3932]">
                                with the app.
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 relative overflow-hidden min-h-[250px] sm:min-h-[350px] md:min-h-0">
                        <img
                            src={rewardsHero}
                            alt="Starbucks Rewards"
                            className="w-full h-full object-cover object-center md:object-right"
                        />
                    </div>
                </div>
            </div>

            <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-6 sm:px-8">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-bold text-gray-900 mb-4">Getting started is easy</h2>
                        <p className="text-[14px] sm:text-[16px] text-gray-600">Earn Stars and get rewarded in a few easy steps.</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 md:gap-8 justify-center items-start text-center">
                        <div className="flex-1 max-w-[350px] mx-auto">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#008248] flex items-center justify-center text-[#008248] text-lg sm:text-xl font-bold mx-auto mb-6">
                                1
                            </div>
                            <h3 className="text-[17px] sm:text-[19px] font-bold text-gray-900 mb-4">Create an account</h3>
                            <p className="text-[14px] sm:text-[16px] text-gray-600 leading-relaxed">
                                To get started, <a href="#" className="text-[#008248] underline hover:no-underline">join now</a>. You can also <a href="#" className="text-[#008248] underline hover:no-underline">join in the app</a> to get access to the full range of Starbucks® Rewards benefits.
                            </p>
                        </div>

                        <div className="flex-1 max-w-[350px] mx-auto">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#008248] flex items-center justify-center text-[#008248] text-lg sm:text-xl font-bold mx-auto mb-6">
                                2
                            </div>
                            <h3 className="text-[17px] sm:text-[19px] font-bold text-gray-900 mb-4">Order and pay how you’d like</h3>
                            <p className="text-[14px] sm:text-[16px] text-gray-600 leading-relaxed">
                                Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <a href="#" className="text-[#008248] underline hover:no-underline">Learn how</a>
                            </p>
                        </div>

                        <div className="flex-1 max-w-[350px] mx-auto">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#008248] flex items-center justify-center text-[#008248] text-lg sm:text-xl font-bold mx-auto mb-6">
                                3
                            </div>
                            <h3 className="text-[17px] sm:text-[19px] font-bold text-gray-900 mb-4">Earn Stars, get Rewards</h3>
                            <p className="text-[14px] sm:text-[16px] text-gray-600 leading-relaxed">
                                As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
             <div className="bg-[#f1f8f6] py-12 md:py-16">
                <div className="text-center mb-8 md:mb-12 px-4">
                    <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-6 md:mb-8">Get your favorites for free</h2>

                    <div className="flex justify-start md:justify-center gap-6 md:gap-12 mb-8 overflow-x-auto scrollbar-hide px-4">
                        {favoritesTabs.map((tab) => (
                            <button
                                key={tab.stars}
                                onClick={() => setActiveTab(tab.stars)}
                                className={`text-[19px] md:text-[24px] font-bold pb-2 transition-all relative whitespace-nowrap ${activeTab === tab.stars
                                    ? 'text-gray-900'
                                    : 'text-gray-900 opacity-60 hover:opacity-100'
                                    }`}
                            >
                                {tab.stars}<span className="text-[#cba258] text-sm">★</span>
                                {activeTab === tab.stars && (
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#008248]"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-[#d4e9e2] bg-opacity-30 py-8 md:py-12">
                    <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-32">
                        <div className="w-full md:w-1/3 max-w-[300px] md:max-w-[375px]">
                            <img
                                src={activeContent.image}
                                alt={`${activeContent.stars} Stars Reward`}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <div className="text-center md:text-left md:w-1/3 px-4">
                            <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-4">{activeContent.title}</h3>
                            <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed max-w-[400px] mx-auto md:mx-0">
                                {activeContent.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12 md:py-20 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-4">Endless Extras</h2>
                        <p className="text-[14px] md:text-[16px] text-gray-600 max-w-[600px] mx-auto px-4">
                            Joining Starbucks® Rewards means unlocking access to benefits like quick and easy ordering, tasty Rewards and—yes, free coffee.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 md:gap-8 justify-center items-start text-center">
                        <div className="flex-1 max-w-[350px] mx-auto px-4">
                            <div className="w-[80px] h-[80px] md:w-[112px] md:h-[112px] mx-auto mb-6">
                                <img src={funFreebies} alt="Fun freebies" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-[18px] md:text-[19px] font-bold text-gray-900 mb-3 md:mb-4">Fun freebies</h3>
                            <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed mb-4">
                                Not only can you earn free food, drinks, and more, look forward to a birthday treat on us.
                            </p>
                            <a href="#" className="text-[#008248] underline hover:no-underline font-semibold">Learn more</a>
                        </div>

                        <div className="flex-1 max-w-[350px] mx-auto px-4">
                            <div className="w-[80px] h-[80px] md:w-[112px] md:h-[112px] mx-auto mb-6">
                                <img src={orderAndPayAhead} alt="Order & pay ahead" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-[18px] md:text-[19px] font-bold text-gray-900 mb-3 md:mb-4">Order & pay ahead</h3>
                            <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed mb-4">
                                Master the art of ordering ahead with saved favorites and payment methods.
                            </p>
                            <a href="#" className="text-[#008248] underline hover:no-underline font-semibold">Learn more</a>
                        </div>

                        <div className="flex-1 max-w-[350px] mx-auto px-4">
                            <div className="w-[80px] h-[80px] md:w-[112px] md:h-[112px] mx-auto mb-6">
                                <img src={getToFreeFaster} alt="Get to free faster" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-[18px] md:text-[19px] font-bold text-gray-900 mb-3 md:mb-4">Get to free faster</h3>
                            <p className="text-[14px] md:text-[16px] text-gray-600 leading-relaxed mb-4">
                                Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.
                            </p>
                            <a href="#" className="text-[#008248] underline hover:no-underline font-semibold">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#f3f1e7] py-12 md:py-20">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-12 md:mb-16 px-4">
                        <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-4">Cash or card, you earn Stars</h2>
                        <p className="text-[14px] md:text-[16px] text-gray-600 max-w-[700px] mx-auto">
                            No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.
                        </p>
                    </div>

                    <div className="flex flex-col gap-12 md:gap-16">
                        {/* 1 Star per dollar */}
                        <div className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-300 pb-12">
                            <div className="w-full md:w-1/4 px-4 text-center md:text-left">
                                <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-1">1★ per dollar</h3>
                                <p className="text-[14px] md:text-[16px] text-gray-600">Pay as you go</p>
                            </div>
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 px-4">
                                <div className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left">
                                    <div className="w-[100px] md:w-[112px] h-auto shrink-0">
                                        <img src={oneA} alt="Scan and pay separately" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] md:text-[19px] font-bold text-gray-900 mb-2">Scan and pay separately</h4>
                                        <p className="text-[14px] md:text-[16px] text-gray-600">Use cash or credit/debit card at the register.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left">
                                    <div className="w-[100px] md:w-[112px] h-auto shrink-0">
                                        <img src={oneB} alt="Save payment in the app" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] md:text-[19px] font-bold text-gray-900 mb-2">Save payment in the app</h4>
                                        <p className="text-[14px] md:text-[16px] text-gray-600">Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2 Stars per dollar */}
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-1/4 px-4 text-center md:text-left">
                                <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-1">2★ per dollar</h3>
                                <p className="text-[14px] md:text-[16px] text-gray-600">Add funds in the app</p>
                            </div>
                            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 px-4">
                                <div className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left">
                                    <div className="w-[100px] md:w-[112px] h-auto shrink-0">
                                        <img src={twoA} alt="Preload" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] md:text-[19px] font-bold text-gray-900 mb-2">Preload</h4>
                                        <p className="text-[14px] md:text-[16px] text-gray-600">To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left">
                                    <div className="w-[100px] md:w-[112px] h-auto shrink-0">
                                        <img src={twoB} alt="Register your gift card" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] md:text-[19px] font-bold text-gray-900 mb-2">Register your gift card</h4>
                                        <p className="text-[14px] md:text-[16px] text-gray-600">Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#d4e9e2] bg-opacity-30 py-20 px-8">
                <div className="max-w-[1000px] mx-auto text-center">
                    <h2 className="text-[28px] font-bold text-gray-900 mb-6">Keep the Rewards Coming</h2>
                    <p className="text-[16px] text-gray-600 mb-16">
                        The Rewards don't stop at your morning coffee. Join Starbucks® Rewards and unlock perks from our partners, all while earning more Stars.
                    </p>

                    <div className="flex flex-col md:flex-row gap-8 justify-center items-start mb-16">
                        <div className="flex-1 px-4">
                            <div className="h-[50px] mb-6 flex items-center justify-center">
                                <img src={deltaSkymiles} alt="Delta SkyMiles" className="h-full object-contain" />
                            </div>
                            <p className="text-[14px] text-gray-600 leading-relaxed">
                                <a href="#" className="text-[#008248] underline hover:no-underline">Link your Delta SkyMiles®</a> and Starbucks® Rewards accounts to earn miles on Starbucks Card reloads of $25 or more, plus Double Stars on travel days.
                            </p>
                        </div>

                        <div className="flex-1 px-4">
                            <div className="h-[50px] mb-6 flex items-center justify-center">
                                <img src={bankOfAmerica} alt="Bank of America" className="h-full object-contain" />
                            </div>
                            <p className="text-[14px] text-gray-600 leading-relaxed">
                                <a href="#" className="text-[#008248] underline hover:no-underline">Link your Bank of America</a> eligible card and Starbucks® Rewards account to earn 2% Cash Back and Bonus Stars on qualifying Starbucks in-app purchases.
                            </p>
                        </div>

                        <div className="flex-1 px-4">
                            <div className="h-[50px] mb-6 flex items-center justify-center">
                                <img src={marriottBonvoy} alt="Marriott Bonvoy" className="h-full object-contain" />
                            </div>
                            <p className="text-[14px] text-gray-600 leading-relaxed">
                                <a href="#" className="text-[#008248] underline hover:no-underline">Link your Marriott Bonvoy®</a> and Starbucks® Rewards accounts to earn Double Stars during eligible stays, points during any Marriott Bonvoy Week and more.
                            </p>
                        </div>
                    </div>

                    <a
                        href="/account/create"
                        className="inline-block bg-[#008248] text-white font-bold rounded-full px-6 py-2 hover:bg-[#006236] transition-colors text-base"
                    >
                        Join Starbucks® Rewards
                    </a>
                </div>
            </div>

            <div className="py-20 bg-white">
                <div className="max-w-[700px] mx-auto px-8">
                    <h2 className="text-[28px] font-bold text-gray-900 mb-4">Questions?</h2>
                    <p className="text-[16px] text-gray-600 leading-relaxed">
                        We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked terms <a href="#" className="text-[#008248] underline hover:no-underline">right over here</a>.
                    </p>
                </div>
                <div className="py-20 bg-[#f7f7f7]">
                    <div className="max-w-[1440px] mx-auto px-8">
                        <div className="text-[13px] text-gray-600 mb-12 space-y-4">
                            <p>At participating stores. Restrictions apply.</p>
                            <p>
                                <sup>1</sup>Excludes taxes and gratuities. At participating stores. Some restrictions apply. Flights purchased close to departure may not earn double Stars. Stars and miles may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, visit <a href="#" className="text-[#008248] underline hover:no-underline">deltastarbucks.com/terms</a>.
                            </p>
                            <p>
                                <sup>2</sup>At participating stores only. Some restrictions apply. Linked Card members will earn 2% Cash Back on the full purchase price of every Qualifying Purchase. Extra Star offer excludes taxes and tips. Stars may not be earned on purchases of alcohol or on reloads of Starbucks Cards that are not registered. For details, visit <a href="#" className="text-[#008248] underline hover:no-underline">Terms and Conditions</a>. Bank of America, N.A. Member FDIC.
                            </p>
                            <p>
                                <sup>3</sup>Individuals must link loyalty program accounts to participate in offer. Members with linked accounts will earn: (a) double Starbucks Rewards Stars on Qualifying Starbucks Transactions during Eligible Stays at Participating Marriott Bonvoy Hotels, excluding stays at Homes & Villas by Marriott Bonvoy and The Ritz-Carlton Yacht Collection, and (b) earn 100 Marriott Bonvoy Points upon completion of 3 Qualifying Starbucks Transactions during Marriott Bonvoy Week. Qualifying Starbucks Transactions must be made at U.S. participating Starbucks stores and exclude purchases of alcoholic beverages, Starbucks Card eGifts and physical Starbucks gift. To earn Double Stars, the applicable stay must qualify as an Eligible Stay at a Participating Marriott Bonvoy Hotel under offer terms and conditions. Other restrictions and exclusions apply. For full offer terms and conditions, visit <a href="#" className="text-[#008248] underline hover:no-underline">Starbucks.com/MarriottBonvoy</a>. Marriott Bonvoy and its affiliated brands and hotels are the registered trademarks and/or service marks of Marriott International, Inc. and its affiliates. Used under license from Marriott International, Inc.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                            <div className="flex-1 space-y-8">
                                <div>
                                    <h3 className="text-[14px] font-bold text-gray-500 tracking-widest uppercase mb-4">Earning Stars</h3>
                                    <p className="text-[13px] text-gray-600 mb-4">
                                        Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.
                                    </p>
                                    <p className="text-[13px] text-gray-600 mb-4">
                                        Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.
                                    </p>
                                    <p className="text-[13px] text-gray-600">
                                        Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[14px] font-bold text-gray-500 tracking-widest uppercase mb-4">Benefits</h3>
                                    <p className="text-[13px] text-gray-600">
                                        Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.
                                    </p>
                                </div>
                            </div>

                            <div className="flex-1 space-y-8">
                                <div>
                                    <h3 className="text-[14px] font-bold text-gray-500 tracking-widest uppercase mb-4">Terms of Use</h3>
                                    <p className="text-[13px] text-gray-600 mb-4">
                                        For full program details visit <a href="#" className="text-[#008248] underline hover:no-underline">starbucks.com/rewards/terms</a>.
                                    </p>
                                    <p className="text-[13px] text-gray-600">
                                        Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the <a href="#" className="text-[#008248] underline hover:no-underline">Starbucks Store Locator</a> and search for locations honoring “Redeem Rewards”.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[14px] font-bold text-gray-500 tracking-widest uppercase mb-4">Redeeming Rewards</h3>
                                    <p className="text-[13px] text-gray-600">
                                        Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20. Not all stores honor tiered Rewards. Select stores redeem 200 Stars for free food or drink items only.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GiftCardBanner />
            <FooterNav />
            <BottomFooter />
        </>
    );
};

export default Rewards;
