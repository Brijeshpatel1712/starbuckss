import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import StarbucksLogo from '../components/StarbucksLogo';
import FooterNav from '../components/FooterNav';
import BottomFooter from '../components/BottomFooter';

const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Get the redirect path from query params, default to '/'
    const queryParams = new URLSearchParams(location.search);
    const redirectPath = queryParams.get('redirect') || '/';
    
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        keepSignedIn: false
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
            const response = await fetch(`${apiUrl}/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                // Also keep localStorage for frontend state if needed
                localStorage.setItem('starbucks_logged_in_user', JSON.stringify(data.user));
                setMessage('Sign in successful! Redirecting...');
                console.log('User signed in and stored in backend:', data.user);
                
                // Redirect to the target path after a short delay
                setTimeout(() => {
                    navigate(redirectPath);
                }, 1500);
            } else {
                setMessage('Sign in failed: ' + data.message);
            }
        } catch (error) {
            setMessage('Error connecting to backend');
            console.error('Error:', error);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-200 py-4 md:py-6 px-4 md:px-8 flex items-center gap-4">
                <Link to="/" className="text-gray-600 hover:text-gray-900 p-2">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>
                <Link to="/">
                    <StarbucksLogo className="w-10 h-10 md:w-12 md:h-12" />
                </Link>
            </header>

            {/* Main Content */}
            <div className="flex items-center justify-center py-12 px-4">
                <div className="w-full max-w-md">
                    <h1 className="text-2xl font-semibold text-center mb-8">
                        Sign in or create an account
                    </h1>

                    <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                        <p className="text-xs text-gray-600 mb-6">
                            * indicates required field
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Username/Email Input */}
                            <div>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="* Username or email address"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                />
                            </div>

                            {/* Password Input */}
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="* Password"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {showPassword ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        )}
                                    </svg>
                                </button>
                            </div>

                            {/* Keep me signed in */}
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="keepSignedIn"
                                    checked={formData.keepSignedIn}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                />
                                <label className="ml-2 text-sm text-gray-700">
                                    Keep me signed in. <a href="#" className="text-green-700 underline">Details</a>
                                </label>
                            </div>

                            {/* Forgot links */}
                            <div className="space-y-1">
                                <a href="#" className="block text-sm text-green-700 underline hover:text-green-800">
                                    Forgot your username?
                                </a>
                                <a href="#" className="block text-sm text-green-700 underline hover:text-green-800">
                                    Forgot your password?
                                </a>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-green-700 text-white py-3 rounded-full font-semibold hover:bg-green-800 transition-colors mt-6"
                            >
                                Sign in
                            </button>

                            {/* Message */}
                            {message && (
                                <p className={`text-center text-sm mt-4 ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
                                    {message}
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Join Starbucks Rewards Section */}
                    <div className="mt-8 md:mt-12 text-center">
                        <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                            JOIN STARBUCKS® REWARDS
                        </h2>
                        <p className="text-sm text-gray-700 mb-6 max-w-sm md:max-w-md mx-auto leading-relaxed">
                            As a member, start earning free food and drinks, unlock our best offers and celebrate your birthday with a treat from us. Best of all, it's free to join.
                        </p>
                        <Link to="/account/create">
                            <button className="rounded-full border-2 border-green-700 text-green-700 px-6 py-2 md:py-2.5 font-semibold text-base hover:bg-green-50 transition-colors">
                                Join now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer Navigation */}
            <FooterNav />

            {/* Bottom Footer */}
            <BottomFooter />
        </div>
    );
};

export default SignIn;
