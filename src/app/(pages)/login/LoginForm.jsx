"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Basic validation (replace with your actual validation logic)
    if (!email || !password) {
      setErrorMessage('Please enter your email and password.');
      return;
    }

    const isLoginSuccessful = true; 

    if (isLoginSuccessful) {
      window.location.href = '/dashboard'; 
    } else {
      setErrorMessage('Invalid email or password.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
    <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
        <Link href="/">
          <h1 className="flex items-center justify-center mb-8 text-4xl font-semibold lg:mb-5 dark:text-white">
              Find
          </h1>
        </Link>
        {/* Card */}
        <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Sign in to platform
          </h2>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                required=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
            )}
              <button type="submit"
                      className="rounded-full mx-auto flex ju w-1/2 bg-indigo-600 px-4 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Log in
              </button>
        </div>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}