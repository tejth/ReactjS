import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" />
            </a>


            
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
