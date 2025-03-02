'use client';

import React, { useState } from 'react';
import { X, Eye, EyeOff, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { useModal } from '@/context/ModalContext';

// Remove the onClose prop from the interface
const LoginModal: React.FC = () => {
    const { login } = useAuth();
    const { closeModal, openModal } = useModal(); // Use the modal context
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            setError('Please fill in both fields.');
            return;
        }

        // Simulate authentication (replace this with API call later)
        const mockUser = { id: 1, name: "John Doe", email, avatar: "https://randomuser.me/api/portraits/men/1.jpg" };

        login(mockUser);
        closeModal(); // Use the context method
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 sm:p-4"
            onClick={closeModal} // Use the context method
        >
            <div
                className="bg-white rounded-lg shadow-lg w-full max-w-3xl flex relative overflow-hidden sm:flex-row flex-col sm:h-auto h-full min-h-[550px]"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                {/* Left Section - Hidden on Mobile */}
                <div className="hidden sm:flex sm:w-1/2 relative p-6 flex-col pt-12 text-white">
                    {/* Darkened Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-right rounded-l-lg"
                        style={{ backgroundImage: "url('/images/modal-bg.webp')" }}
                    />
                    <div className="absolute inset-0 bg-black opacity-50 rounded-l-lg" />

                    {/* Content */}
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold">Collaborate on Projects</h2>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                                <CheckCircle className="text-green-400 w-4 h-4 mr-2" />
                                Connect with talented developers
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-green-400 w-4 h-4 mr-2" />
                                Work on real-world projects
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-green-400 w-4 h-4 mr-2" />
                                Build a portfolio that stands out
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Section - Login Form (Full Width on Mobile) */}
                <div className="sm:w-1/2 w-full p-8 sm:p-12 relative flex flex-col h-full sm:h-auto justify-between">
                    <div>
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <h4 className="text-xl font-semibold text-gray-900">Log in to your account</h4>
                        <p className='text-sm mt-4'>Don't have an account? <u className='cursor-pointer' onClick={() => openModal('signup')}>Join here</u></p>


                        {/* Error Message */}
                        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

                        {/* Email Input */}
                        <div className="mt-4">
                            <label htmlFor="email" className="text-gray-700 text-sm font-medium">
                                Email or Username
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-gray-400"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mt-4 relative">
                            <label htmlFor="password" className="text-gray-700 text-sm font-medium">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-gray-400 pr-10"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-4 text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="mt-3 text-right">
                            <button className="text-sm text-gray-500 hover:text-gray-700">Forgot password?</button>
                        </div>
                        {/* Login Button */}
                        <Button inverted className="w-full mt-6" onClick={handleLogin}>
                            Continue
                        </Button>
                    </div>

                    <div>
                        

                        {/* Terms and Privacy */}
                        <p className="text-xs text-gray-500 mt-4 text-center">
                            By joining, you agree to our{' '}
                            <a href="/terms_of_service" className="text-gray-600 underline">
                                Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="/privacy-policy" className="text-gray-600 underline">
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
