import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';
import BottomFooter from '../components/BottomFooter';

// Import featured product images
import hotPeppermintMocha from '../assets/Featured/A hot coffee drink in a red and green Starbucks cup topped with whipped cream and brown sprinkles..jpg';
import hotCaramelBrulee from '../assets/Featured/A hot coffee drink with whipped cream and caramel-colored sprinkles in a red and green Starbucks cup..jpg';
import hotChestnutPraline from '../assets/Featured/A hot coffee drink with whipped cream and brown spice topping in a red and green Starbucks cup..jpg';
import icedPeppermintMocha from '../assets/Featured/A creamy iced coffee drink with whipped cream and brown sprinkles in a clear Starbucks cup with a red ribbon design and green straw..jpg';
import icedCaramelBrulee from '../assets/Featured/A creamy iced coffee drink with whipped cream and caramel-colored sprinkles in a clear Starbucks cup with a red ribbon design..jpg';
import icedChestnutPraline from '../assets/Featured/A creamy iced tea drink with foam top and brown spice toppin in a clear Starbucks cup with a red ribbon design..jpg';
import sugarCookieLatte from '../assets/Featured/The top of a golden flaky pastry with white sprinkles on top in a burgundy paper wrapper..jpg';
import grilledCheese from '../assets/Featured/Two halves of a toasted sandwich with oozing melted cheese in the middle is placed on a white napkin on a wooden board..jpg';
import baconGouda from '../assets/Featured/137-103269.webp';

const Featured = () => {
    const navigate = useNavigate();

    const handleOrderClick = () => {
        const user = localStorage.getItem('starbucks_logged_in_user');
        if (user) {
            navigate('/menu');
        } else {
            navigate('/signin?redirect=/menu');
        }
    };
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Sub Navigation */}
            <div className="border-b border-gray-200 bg-white sticky top-[72px] md:top-[88px] z-40">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide">
                        <Link
                            to="/menu"
                            className="py-4 px-2 font-semibold text-sm border-b-2 border-transparent text-gray-600 hover:text-gray-900 whitespace-nowrap transition-colors"
                        >
                            Menu
                        </Link>
                        <Link
                            to="/featured"
                            className="py-4 px-2 font-semibold text-sm border-b-2 border-green-700 text-gray-900 whitespace-nowrap transition-colors"
                        >
                            Featured
                        </Link>
                        <Link
                            to="/menu/previous"
                            className="py-4 px-2 font-semibold text-sm border-b-2 border-transparent text-gray-600 hover:text-gray-900 whitespace-nowrap transition-colors"
                        >
                            Previous
                        </Link>
                        <Link
                            to="/menu/favorites"
                            className="py-4 px-2 font-semibold text-sm border-b-2 border-transparent text-gray-600 hover:text-gray-900 whitespace-nowrap transition-colors"
                        >
                            Favorites
                        </Link>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 lg:py-16 text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#00704A] mb-8 md:mb-12">
                    Handcrafted joy to savor<br className="hidden md:block" /> and share
                </h1>

                {/* Featured Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-[1440px] mx-auto">
                    {/* Product 1 - Peppermint Mocha */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="aspect-square bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center p-6 md:p-8">
                            <img
                                src={hotPeppermintMocha}
                                alt="Peppermint Mocha"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="bg-[#8B1538] text-white p-6 md:p-8 text-center">
                            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Peppermint Mocha</h3>
                            <p className="text-sm mb-6 leading-relaxed">
                                A beloved holiday classic. Handcrafted with Starbucks® signature espresso, steamed milk and peppermint and chocolate flavors. Topped with whipped cream and dark–chocolate curls. Enjoy hot, iced or blended.
                            </p>
                            <button className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#8B1538] transition-colors">
                                Order now
                            </button>
                        </div>
                    </div>

                    {/* Product 2 - Peppermint Mocha Frappuccino */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="aspect-square bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center p-6 md:p-8">
                            <img
                                src={grilledCheese}
                                alt="Peppermint Mocha Frappuccino"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="bg-[#8B1538] text-white p-6 md:p-8 text-center">
                            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Peppermint Mocha Frappuccino® Blended Beverage</h3>
                            <p className="text-sm mb-6 leading-relaxed">
                                A festive blend of frappuccino® Roast coffee, peppermint and mocha flavors, milk, and ice. Topped with whipped cream and dark–chocolate curls.
                            </p>
                            <button 
                                onClick={handleOrderClick}
                                className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#8B1538] transition-colors"
                            >
                                Start an order
                            </button>
                        </div>
                    </div>

                    {/* Product 3 - Caramel Brulée Latte */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="aspect-square bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center p-6 md:p-8">
                            <img
                                src={hotCaramelBrulee}
                                alt="Caramel Brulée Latte"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="bg-[#8B1538] text-white p-6 md:p-8 text-center">
                            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Caramel Brulée Latte</h3>
                            <p className="text-sm mb-6 leading-relaxed">
                                Espresso, steamed milk, and rich caramel brulée sauce finished with whipped cream and a caramel brulée topping. A sweet, festive treat.
                            </p>
                            <button className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#8B1538] transition-colors">
                                Order now
                            </button>
                        </div>
                    </div>

                    {/* Product 4 - Chestnut Praline Latte */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="aspect-square bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center p-6 md:p-8">
                            <img
                                src={hotChestnutPraline}
                                alt="Chestnut Praline Latte"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="bg-[#8B1538] text-white p-6 md:p-8 text-center">
                            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Chestnut Praline Latte</h3>
                            <p className="text-sm mb-6 leading-relaxed">
                                Espresso and steamed milk sweetened with caramelized chestnuts and topped with whipped cream and spiced praline crumbs.
                            </p>
                            <button className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#8B1538] transition-colors">
                                Start an order
                            </button>
                        </div>
                    </div>

                    {/* Product 5 - Iced Peppermint Mocha */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="aspect-square bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center p-6 md:p-8">
                            <img
                                src={icedPeppermintMocha}
                                alt="Iced Peppermint Mocha"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="bg-[#8B1538] text-white p-6 md:p-8 text-center">
                            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Iced Peppermint Mocha</h3>
                            <p className="text-sm mb-6 leading-relaxed">
                                Our signature espresso combined with peppermint-flavored syrup, milk, and ice. Topped with sweetened whipped cream and dark chocolate curls.
                            </p>
                            <button className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#8B1538] transition-colors">
                                Add to order
                            </button>
                        </div>
                    </div>

                    {/* Product 6 - Iced Caramel Brulée Latte */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="aspect-square bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center p-6 md:p-8">
                            <img
                                src={icedCaramelBrulee}
                                alt="Iced Caramel Brulée Latte"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="bg-[#8B1538] text-white p-6 md:p-8 text-center">
                            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Iced Caramel Brulée Latte</h3>
                            <p className="text-sm mb-6 leading-relaxed">
                                Our beloved Caramel Brulée Latte on ice. With whipped cream and caramel-brulée topping. Limited-time holiday favorite.
                            </p>
                            <button className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#8B1538] transition-colors">
                                Order now
                            </button>
                        </div>
                    </div>

                    {/* Product 7 - Iced Chestnut Praline Latte */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="aspect-square bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center p-6 md:p-8">
                            <img
                                src={icedChestnutPraline}
                                alt="Iced Chestnut Praline Latte"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="bg-[#8B1538] text-white p-6 md:p-8 text-center">
                            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Iced Chestnut Praline Latte</h3>
                            <p className="text-sm mb-6 leading-relaxed">
                                Espresso and milk over ice, sweetened with caramelized chestnuts. Topped with whipped cream and spiced praline crumbs.
                            </p>
                            <button className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#8B1538] transition-colors">
                                Add to order
                            </button>
                        </div>
                    </div>

                    {/* Product 8 - Sugar Cookie Almondmilk Latte */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="aspect-square bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center p-6 md:p-8">
                            <img
                                src={sugarCookieLatte}
                                alt="Sugar Cookie Almondmilk Latte"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="bg-[#8B1538] text-white p-6 md:p-8 text-center">
                            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Sugar Cookie Almondmilk Latte</h3>
                            <p className="text-sm mb-6 leading-relaxed">
                                Sugar cookie-flavored syrup combined with Starbucks Blonde Espresso and steamed almondmilk. Topped with red and green sprinkles.
                            </p>
                            <button className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#8B1538] transition-colors">
                                Order now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cinnamon Pull-Apart Section */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 lg:py-12">
                <div className="max-w-[1440px] mx-auto bg-[#00704A] rounded-lg overflow-hidden shadow-xl flex flex-col md:flex-row">
                    {/* Left - Image */}
                    <div className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-auto">
                        <img
                            src={sugarCookieLatte}
                            alt="Cinnamon Pull-Apart"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right - Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-white p-6 sm:p-10 md:p-16">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-center">
                            Cinnamon Pull-Apart
                        </h2>
                        <p className="text-center mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                            Embrace the holidays one bite at a time. Nestled pieces of croissant sprinkled with cinnamon sugar and topped with crunchy streusel.
                        </p>
                        <button 
                            onClick={handleOrderClick}
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#00704A] transition-colors text-sm sm:text-base"
                        >
                            Order now
                        </button>
                    </div>
                </div>
            </div>

            {/* Sandwich Section */}
            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 mb-16 lg:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-[1200px] mx-auto">
                    {/* Bacon, Gouda & Egg Sandwich */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                        <div className="aspect-square sm:aspect-video md:aspect-square">
                            <img
                                src={baconGouda}
                                alt="Bacon, Gouda & Egg Sandwich"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-[#00704A] text-white p-6 md:p-8 text-center flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-4">Bacon, Gouda & Egg Sandwich</h3>
                                <p className="text-xs md:text-sm mb-6 leading-relaxed">
                                    Savory and satisfying with 18 grams of protein. Sizzling applewood–smoked bacon, fluffy Parmesan cage–free–egg frittata and melted aged Gouda on an artisan roll.
                                </p>
                            </div>
                            <div>
                                <button 
                                    onClick={handleOrderClick}
                                    className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#00704A] transition-colors text-sm"
                                >
                                    Add to order
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Crispy Grilled Cheese on Sourdough */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                        <div className="aspect-square sm:aspect-video md:aspect-square">
                            <img
                                src={grilledCheese}
                                alt="Crispy Grilled Cheese on Sourdough"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-[#00704A] text-white p-6 md:p-8 text-center flex-grow flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-4">Crispy Grilled Cheese on Sourdough</h3>
                                <p className="text-xs md:text-sm mb-6 leading-relaxed">
                                    Classic and delicious anytime, with 21 grams of protein. A blend of mild Cheddar and baby Gouda cheeses on toasted sourdough with olive–oil spread.
                                </p>
                            </div>
                            <div>
                                <button 
                                    onClick={handleOrderClick}
                                    className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-[#00704A] transition-colors text-sm"
                                >
                                    Order now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterNav />
            <BottomFooter />
        </div>
    );
};

export default Featured;
