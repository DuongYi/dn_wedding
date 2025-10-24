"use client"

import React, { useState } from 'react'

const RightToolbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleToolbar = () => {
    setIsOpen(!isOpen)
  }

  const handleWeddingGift = () => {
    // TODO: Add wedding gift functionality
    console.log('Mừng cưới clicked')
  }

  const handleSendWishes = () => {
    // TODO: Add send wishes functionality
    console.log('Gửi lời chúc clicked')
  }

  return (
    <div className="fixed right-0 -bottom-10 -translate-y-1/2 z-50">
      {/* Toolbar Items - Show when open */}
      <div
        className={`flex flex-col gap-2 md:gap-4 transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-[120%] opacity-0'
          }`}
      >
        {/* Mừng cưới - Wedding Gift */}
        <div className="relative group/tooltip">
          <button
            onClick={handleWeddingGift}
            className="w-10 h-10 md:w-14 md:h-14 bg-linear-to-br from-pink-400 to-pink-600 rounded-l-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
            aria-label="Mừng cưới"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-5 h-5 md:w-7 md:h-7 group-hover:scale-110 transition-transform"
            >
              <path d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="white" />
            </svg>
          </button>
          {/* Tooltip */}
          <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 pointer-events-none">
            <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm">
              Mừng cưới
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900"></div>
            </div>
          </div>
        </div>

        {/* Gửi lời chúc - Send Wishes */}
        <div className="relative group/tooltip">
          <button
            onClick={handleSendWishes}
            className="w-10 h-10 md:w-14 md:h-14 bg-linear-to-br from-pink-400 to-pink-600 rounded-l-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
            aria-label="Gửi lời chúc"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-5 h-5 md:w-7 md:h-7 group-hover:scale-110 transition-transform"
            >
              <path d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {/* Tooltip */}
          <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 pointer-events-none">
            <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm">
              Gửi lời chúc
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="relative group/tooltip">
        <button
          onClick={toggleToolbar}
          className={`w-10 h-10 md:w-14 md:h-14 bg-linear-to-br from-pink-500 to-pink-700 rounded-l-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mt-2 md:mt-4 ${isOpen ? 'hover:scale-105' : 'animate-pulse'
            }`}
          aria-label={isOpen ? 'Đóng thanh công cụ' : 'Mở thanh công cụ'}
        >
          <div
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
              }`}
          >
            {isOpen ? (
              // Close Icon (X)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Menu Icon (Three Lines)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </div>
        </button>
        {/* Tooltip */}
        <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 pointer-events-none">
          <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm">
            {isOpen ? 'Đóng' : 'Công cụ'}
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-gray-900"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightToolbar
