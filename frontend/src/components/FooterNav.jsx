import React from 'react';

const FooterNav = () => {
    return (
        <div className="bg-white border-t border-gray-200 py-12 px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* About Us */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">About Us</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Our Company</a></li>
                            <li><a href="#" className="hover:text-gray-900">Our Coffee</a></li>
                            <li><a href="#" className="hover:text-gray-900">About Starbucks</a></li>
                            <li><a href="#" className="hover:text-gray-900">Starbucks Archive</a></li>
                            <li><a href="#" className="hover:text-gray-900">Investor Relations</a></li>
                            <li><a href="#" className="hover:text-gray-900">Customer Service</a></li>
                            <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Careers */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Careers</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Culture and Values</a></li>
                            <li><a href="#" className="hover:text-gray-900">Belonging at Starbucks</a></li>
                            <li><a href="#" className="hover:text-gray-900">College Achievement Plan</a></li>
                            <li><a href="#" className="hover:text-gray-900">Alumni Community</a></li>
                            <li><a href="#" className="hover:text-gray-900">U.S. Careers</a></li>
                            <li><a href="#" className="hover:text-gray-900">International Careers</a></li>
                        </ul>
                    </div>

                    {/* Social Impact */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Social Impact</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Communities</a></li>
                            <li><a href="#" className="hover:text-gray-900">Starbucks Foundation</a></li>
                            <li><a href="#" className="hover:text-gray-900">Sustainability</a></li>
                            <li><a href="#" className="hover:text-gray-900">Environmental and Social Impact Reporting</a></li>
                        </ul>
                    </div>

                    {/* For Business Partners */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">For Business Partners</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Landlord Support Center</a></li>
                            <li><a href="#" className="hover:text-gray-900">Suppliers</a></li>
                            <li><a href="#" className="hover:text-gray-900">Corporate Gift Card Sales</a></li>
                            <li><a href="#" className="hover:text-gray-900">Office and Foodservice Coffee</a></li>
                        </ul>
                    </div>

                    {/* Order and Pick Up */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Order and Pick Up</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900">Order on the App</a></li>
                            <li><a href="#" className="hover:text-gray-900">Order on the Web</a></li>
                            <li><a href="#" className="hover:text-gray-900">Delivery</a></li>
                            <li><a href="#" className="hover:text-gray-900">Order and Pick Up Options</a></li>
                            <li><a href="#" className="hover:text-gray-900">Explore and Find Coffee for Home</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterNav;
