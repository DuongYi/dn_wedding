"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import CountdownTimer from '../component/countdown_timer'

const CountDownPage: React.FC = () => {
  // Refs for inView
  const timerRef = useRef(null)
  const coupleRef = useRef(null)
  const quoteRef = useRef(null)
  const timerInView = useInView(timerRef, { once: false, margin: '-100px' })
  const coupleInView = useInView(coupleRef, { once: false, margin: '-100px' })
  const quoteInView = useInView(quoteRef, { once: false, margin: '-100px' })

  return (
    <div className="min-h-screen bg-linear-to-b from-pink-50 via-white to-purple-50 py-6 sm:py-8 md:py-12 lg:py-20" id="countdown">
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4">
        {/* Countdown Timer Section */}
        <motion.div
          ref={timerRef}
          initial={{ opacity: 0, y: -20 }}
          animate={timerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24 md:mb-32 lg:mb-40"
        >
          <CountdownTimer />
        </motion.div>

        {/* Couple Photos Section */}
        <motion.div
          ref={coupleRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={coupleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-4 md:gap-1 lg:gap-2 mb-12 sm:mb-16 md:mb-20 px-4"
        >
          {/* Groom Section - Left */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-1 md:gap-2 w-full lg:w-auto justify-center">
            {/* Text Content - Left side */}
            <div className="text-center sm:text-right max-w-full sm:max-w-[280px] md:max-w-[340px] lg:max-w-[380px] min-w-0 sm:min-w-40 md:min-w-[200px] whitespace-normal wrap-break-word px-4 sm:px-0 sm:pr-2 md:pr-4 lg:pr-7 order-2 sm:order-1 mt-4 md:mt-0">
              <h3 className="text-3xl lg:text-4xl font-light text-gray-800 mb-2 font-fz-manstein">
                Đức Dương
              </h3>
              <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                Anh không hứa sẽ mang đến cho em cả thế giới, nhưng anh hứa sẽ luôn bên em, cùng em xây dựng một thế giới của riêng chúng ta.
              </p>
            </div>

            {/* Photo */}
            <div className="relative w-[280px] h-[400px] sm:w-44 sm:h-56 md:w-52 md:h-64 lg:w-72 lg:h-96 xl:w-90 xl:h-140 transform sm:-rotate-14 hover:rotate-0 transition-transform duration-300 shrink-0 sm:-translate-y-2 md:-translate-y-4 lg:-translate-y-6 order-1 sm:order-2 max-w-[90vw]">
              <div className="absolute inset-0 bg-white p-2 md:p-3 shadow-xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/asset/pictures/countdown/countdown1.jpg"
                    alt="Groom"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* svg Center */}
          <div className="absolute left-1/2 top-1/2 sm:top-[48%] lg:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:block">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white rounded-full flex items-center justify-center border border-[#e7d7d7] relative">
              <div className="absolute inset-3 sm:inset-4 md:inset-5 lg:inset-4 xl:inset-3 rounded-full border border-[#e7d7d7] pointer-events-none"></div>
              <Image
                src="/asset/pictures/icon/countdown.svg"
                alt="Birds"
                width={32}
                height={32}
                className="object-contain z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
              />
            </div>
          </div>

          {/* Bride Section - Right */}
          <div className="flex flex-col sm:flex-row items-center xl:items-end gap-3 sm:gap-1 md:gap-2 w-full lg:w-auto justify-center">
            {/* Photo */}
            <div className="relative w-[280px] h-[400px] sm:w-44 sm:h-56 md:w-52 md:h-64 lg:w-72 lg:h-96 xl:w-90 xl:h-140 transform sm:rotate-14 hover:rotate-0 transition-transform duration-300 shrink-0 sm:translate-y-2 md:translate-y-4 lg:translate-y-6 order-1 max-w-[90vw]">
              <div className="absolute inset-0 bg-white p-2 md:p-3 shadow-xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/asset/pictures/countdown/countdown2.jpg"
                    alt="Bride"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Content - Right side */}
            <div className="text-center sm:text-left max-w-full sm:max-w-[280px] md:max-w-[340px] lg:max-w-[380px] min-w-0 sm:min-w-40 md:min-w-[200px] whitespace-normal wrap-break-word px-4 sm:px-0 sm:pl-2 md:pl-4 lg:pl-7 xl:pl-0 order-2 mt-4 md:mt-0">
              <h3 className="text-3xl lg:text-4xl font-light text-gray-800 mb-2 font-fz-manstein">
                Kim Ngân
              </h3>
              <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                Em tin rằng hạnh phúc không phải là những khoảnh khắc rực rỡ, mà là khi có anh bên cạnh, cùng lắng nghe, cùng đi qua mọi điều của cuộc sống.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          ref={quoteRef}
          initial={{ opacity: 0, y: 20 }}
          animate={quoteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-24 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-light text-gray-800 mb-4 sm:mb-6 font-felidae leading-relaxed sm:leading-snug md:leading-normal">
            <span className="text-4xl sm:text-5xl md:text-6xl">&ldquo;</span>
            Every love story is beautiful,
            <br />
            but ours is my favorite.
            <span className="text-4xl sm:text-5xl md:text-6xl">&rdquo;</span>
          </h2>

          {/* Decorative flower icon */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <Image
              src="/asset/pictures/invitation/invitation2.png"
              alt="flower decoration"
              width={200}
              height={200}
              className="opacity-100 w-16 h-20 md:w-20 md:h-24 lg:w-24 lg:h-32 xl:w-32 xl:h-40"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CountDownPage
