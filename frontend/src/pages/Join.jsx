import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';
import BottomFooter from '../components/BottomFooter';

const Join = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Get the redirect path from query params, default to '/'
    const queryParams = new URLSearchParams(location.search);
    const redirectPath = queryParams.get('redirect') || '/';
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        wantsEmail: true,
        agreesToTerms: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
            const response = await fetch(`${apiUrl}/join`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem('starbucks_logged_in_user', JSON.stringify(data.user));
                setMessage('Account created successfully! Redirecting...');
                console.log('User joined and stored in backend:', data.user);
                
                setTimeout(() => {
                    navigate(redirectPath);
                }, 1500);
            } else {
                setMessage('Error creating account: ' + data.message);
            }
        } catch (error) {
            setMessage('Error connecting to backend');
            console.error('Error:', error);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <div className="max-w-2xl mx-auto py-8 md:py-12 px-4 md:px-8 flex flex-col items-center">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Create an account</h1>

                <div className="text-center mb-8 md:mb-10 w-full">
                    <h2 className="text-[12px] md:text-[14px] font-bold tracking-[0.1em] mb-2 uppercase text-gray-600">
                        Starbucks® Rewards
                    </h2>
                    <p className="text-gray-600 text-sm max-w-sm mx-auto leading-relaxed">
                        Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and <a href="#" className="underline hover:no-underline">more</a>.
                    </p>
                </div>

                <div className="w-full max-w-[500px] bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.1)] p-6 md:p-8 border border-gray-100">
                    <p className="text-sm text-gray-500 mb-6 md:mb-8">* indicates required field</p>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Personal Information */}
                        <section>
                            <h3 className="text-lg font-bold mb-4">Personal Information</h3>
                            <div className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full border border-gray-400 rounded-lg px-4 py-4 pt-6 text-base focus:border-green-700 outline-none transition-colors peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="firstName"
                                        className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-green-700"
                                    >
                                        * First name
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full border border-gray-400 rounded-lg px-4 py-4 pt-6 text-base focus:border-green-700 outline-none transition-colors peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="lastName"
                                        className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-green-700"
                                    >
                                        * Last name
                                    </label>
                                </div>
                            </div>
                        </section>

                        {/* Account Security */}
                        <section>
                            <h3 className="text-lg font-bold mb-4">Account Security</h3>
                            <div className="space-y-2">
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-gray-400 rounded-lg px-4 py-4 pt-6 text-base focus:border-green-700 outline-none transition-colors peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-green-700"
                                    >
                                        * Email address
                                    </label>
                                </div>
                                <p className="text-xs text-gray-600">This will be your username</p>
                            </div>

                            <div className="mt-6 space-y-2">
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full border border-gray-400 rounded-lg px-4 py-4 pt-6 text-base focus:border-green-700 outline-none transition-colors peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="password"
                                        className="absolute left-4 top-4 text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-green-700"
                                    >
                                        * Password
                                    </label>
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-5 text-gray-400 hover:text-gray-600"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            {showPassword ? (
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                            ) : (
                                                <>
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </>
                                            )}
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number and 1 special character like an exclamation point or asterisk.
                                </p>
                            </div>
                        </section>

                        <button type="button" className="text-green-700 font-bold hover:underline py-2 flex items-center gap-1">
                            Already have a Starbucks gift card?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </button>

                        {/* Email Preferences */}
                        <section className="space-y-4 pt-4">
                            <h4 className="text-[12px] font-bold tracking-widest text-gray-600 uppercase">
                                Collect more stars & earn rewards
                            </h4>
                            <p className="text-sm text-gray-700">
                                Email is a great way to know about offers and what’s new from Starbucks.
                            </p>
                            <label className="flex items-start gap-4 cursor-pointer group">
                                <div className="relative flex items-center h-6">
                                    <input 
                                        type="checkbox" 
                                        name="wantsEmail"
                                        checked={formData.wantsEmail}
                                        onChange={handleChange}
                                        className="peer sr-only" 
                                    />
                                    <div className="w-6 h-6 border-2 border-gray-400 rounded flex items-center justify-center peer-checked:bg-[#006241] peer-checked:border-[#006241] transition-all">
                                        <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-gray-800">Yes, I'd like email from Starbucks</span>
                                    <span className="text-sm text-gray-500 leading-relaxed mt-1">
                                        Know about initiatives, announcements and product offers.
                                    </span>
                                </div>
                            </label>
                        </section>

                        {/* Terms of Use */}
                        <section className="space-y-4 pt-4 border-t border-gray-100">
                            <h4 className="text-[12px] font-bold tracking-widest text-gray-600 uppercase">
                                Terms of Use
                            </h4>
                            <label className="flex items-start gap-4 cursor-pointer group">
                                <div className="relative flex items-center h-6">
                                    <input 
                                        type="checkbox" 
                                        name="agreesToTerms"
                                        checked={formData.agreesToTerms}
                                        onChange={handleChange}
                                        className="peer sr-only" 
                                        required 
                                    />
                                    <div className="w-6 h-6 border-2 border-gray-400 rounded flex items-center justify-center peer-checked:bg-[#006241] peer-checked:border-[#006241] transition-all">
                                        <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    * I agree to the <a href="#" className="underline text-green-700">Starbucks® Rewards Terms</a> and the <a href="#" className="underline text-green-700">Starbucks Card Terms</a> and have read the <a href="#" className="underline text-green-700">Starbucks Privacy Statement</a>.
                                </p>
                            </label>
                        </section>

                        {/* Message */}
                        {message && (
                            <p className={`text-center text-sm mt-4 font-semibold ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                                {message}
                            </p>
                        )}

                        <div className="flex justify-end pt-6">
                            <button
                                type="submit"
                                className="bg-[#006241] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-md active:scale-95"
                            >
                                Create account
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <FooterNav />
            <BottomFooter />
        </div>
    );
};

export default Join;
