"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import CountdownTimer from '../component/countdown_timer'

const CountDownPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-pink-50 via-white to-purple-50 py-12 md:py-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Countdown Timer Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32 md:mb-40"
        >
          <CountdownTimer />
        </motion.div>

        {/* Couple Photos Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center gap-0 md:gap-1 lg:gap-2 mb-16 md:mb-20 px-4"
        >
          {/* Groom Section - Left */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* Text Content - Left side */}
            <div className="text-right max-w-[300px] md:max-w-[380px] min-w-40 md:min-w-[200px] whitespace-normal wrap-break-word pr-3 md:pr-7 lg:pr-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-2 font-fz-manstein">
                Đức Dương
              </h3>
              <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                A heart full of love and a soul full of hope, I can&apos;t wait to begin this journey with you by my side.
              </p>
            </div>

            {/* Photo */}
            <div className="relative w-48 h-64 md:w-56 md:h-72 lg:w-90 lg:h-140 transform -rotate-14 transition-transform hover:rotate-0 duration-300 shrink-0 -translate-y-4 md:-translate-y-6 lg:-translate-y-8">
              <div className="absolute inset-0 bg-white p-2 md:p-3 shadow-2xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/asset/pictures/wedding/ac20.png"
                    alt="Groom"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* svg Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full flex items-center justify-center border border-[#e7d7d7] relative">
              <div className="absolute inset-5 md:inset-4 lg:inset-3 rounded-full border border-[#e7d7d7] pointer-events-none"></div>
              <Image
                src="/asset/pictures/icon/countdown.svg"
                alt="Birds"
                width={48}
                height={48}
                className="object-contain z-10"
              />
            </div>
          </div>

          {/* Bride Section - Right */}
          <div className="flex items-end gap-1 md:gap-2">
            {/* Photo */}
            <div className="relative w-48 h-64 md:w-56 md:h-72 lg:w-90 lg:h-140 transform rotate-14 transition-transform hover:rotate-0 duration-300 shrink-0 translate-y-4 md:translate-y-6 lg:translate-y-8">
              <div className="absolute inset-0 bg-white p-2 md:p-3 shadow-2xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/asset/pictures/wedding/ac17.png"
                    alt="Bride"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Content - Right side */}
            <div className="text-left max-w-[300px] md:max-w-[380px] min-w-40 md:min-w-[200px] whitespace-normal wrap-break-word">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-2 font-fz-manstein">
                Kim Ngân
              </h3>
              <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                Today, I marry my best friend. With joy in my heart and love in my eyes, I&apos;m ready for forever.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-7xl mx-auto mt-10 md:mt-20 lg:mt-30"
        >
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-light text-gray-800 mb-6 font-felidae leading-30">
            <span className="text-5xl md:text-6xl">&ldquo;</span>
            Every love story is beautiful,
            <br />
            but ours is my favorite.
            <span className="text-5xl md:text-6xl">&rdquo;</span>
          </h2>

          {/* Decorative flower icon */}
          <div className="flex justify-center mt-8">
            <Image
              src="/asset/pictures/invitation/invitation2.png"
              alt="flower decoration"
              width={120}
              height={120}
              className="opacity-100"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CountDownPage
