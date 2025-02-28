'use client';

import React, { useState } from 'react';
import { X, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface SignUpModalProps {
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const isValidPassword = (pwd: string) => pwd.length >= 8 && /\d/.test(pwd);

  const handleCreateAccount = () => {
    if (step === 1) {
      if (!email.includes('@')) {
        setError('Please enter a valid email.');
        return;
      }
      if (!isValidPassword(password)) {
        setError('Password must be at least 8 characters and contain a number.');
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      setError(null);
      setStep(2);
    } else {
      if (!fullName.trim()) {
        setError('Please enter your full name.');
        return;
      }
      router.push('/explore');
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-3xl flex relative overflow-hidden sm:flex-row flex-col sm:h-auto h-full"
        onClick={(e) => e.stopPropagation()}
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

        {/* Right Section - Sign Up Form */}
        <div className="sm:w-1/2 w-full p-8 sm:p-12 relative flex flex-col h-full sm:h-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>

          <h4 className="text-lg font-semibold text-gray-900">
            {step === 1 ? 'Create an account' : 'Enter your full name'}
          </h4>

          {/* Step 1: Email & Password */}
          {step === 1 && (
            <>
              {/* Email Input */}
              <div className="mt-4">
                <label htmlFor="email" className="text-gray-700 text-sm font-medium">
                  Email
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

              {/* Confirm Password Input */}
              <div className="mt-4 relative">
                <label htmlFor="confirm-password" className="text-gray-700 text-sm font-medium">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirm-password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-gray-400 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-4 text-gray-500"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Step 2: Full Name */}
          {step === 2 && (
            <div className="mt-4">
              <label htmlFor="full-name" className="text-gray-700 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>
          )}

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* Sign Up Button */}
          <Button inverted className="w-full mt-6" onClick={handleCreateAccount}>
            {step === 1 ? 'Create Account' : 'Continue'}
          </Button>

          {/* Terms and Privacy */}
          <p className="text-xs text-gray-500 mt-4 text-center">
            By signing up, you agree to our{' '}
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
  );
};

export default SignUpModal;
