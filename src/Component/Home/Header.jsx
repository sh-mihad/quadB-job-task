import React from 'react';
import Navbar from '../Navbar';

const Header = () => {
    return (
        <div className="relative">

            <img
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/teen-movies-on-netflix-1668017619.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="absolute inset-0 object-cover w-full h-screen"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-80 h-screen">
                <Navbar></Navbar>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                        <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                            Unlimited movies, TV
                            <br className="hidden md:block" />
                            shows, and more.{' '}
                            <span className="relative inline-block px-2">
                                <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                          

                            </span>
                        </h2>
                        <p className='text-xl font-semibold my-8 '>Ready to watch? Enter your email to create or restart your membership.</p>
                        <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                       
                            <input
                                placeholder="Email"
                                required
                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-3 bg-white text-black transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
                            />
                            <button
                                href="/"
                                className="inline-flex bg-red-500 text-white items-center justify-center w-full h-12 px-6 font-semibold tracking-wide  transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Subscribe
                            </button>
                        </form>
                       
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;