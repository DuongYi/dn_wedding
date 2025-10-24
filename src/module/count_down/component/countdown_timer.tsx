"use client"

import React, { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Ngày cưới: 09/11/2025
    const weddingDate = new Date('2025-11-09T12:15:00').getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex gap-3 sm:gap-6 md:gap-12 lg:gap-20 justify-center py-4 md:py-8 px-4 overflow-x-auto">
      {/* Days */}
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full bg-[#f7eded] border border-[#e7d7d7]">
          <div className="absolute inset-2 sm:inset-3 md:inset-4 rounded-full border border-[#e7d7d7] flex items-center justify-center">
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-felidae text-gray-900 leading-none">{timeLeft.days}</span>
          </div>
        </div>
        <span className="mt-2 sm:mt-4 md:mt-6 text-xs sm:text-base md:text-xl lg:text-2xl font-felidae text-gray-700">Days</span>
      </div>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full bg-[#f7eded] border border-[#e7d7d7]">
          <div className="absolute inset-2 sm:inset-3 md:inset-4 rounded-full border border-[#e7d7d7] flex items-center justify-center">
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-felidae text-gray-900 leading-none">{timeLeft.hours}</span>
          </div>
        </div>
        <span className="mt-2 sm:mt-4 md:mt-6 text-xs sm:text-base md:text-xl lg:text-2xl font-felidae text-gray-700">Hours</span>
      </div>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full bg-[#f7eded] border border-[#e7d7d7]">
          <div className="absolute inset-2 sm:inset-3 md:inset-4 rounded-full border border-[#e7d7d7] flex items-center justify-center">
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-felidae text-gray-900 leading-none">{timeLeft.minutes}</span>
          </div>
        </div>
        <span className="mt-2 sm:mt-4 md:mt-6 text-xs sm:text-base md:text-xl lg:text-2xl font-felidae text-gray-700">Mins</span>
      </div>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full bg-[#f7eded] border border-[#e7d7d7]">
          <div className="absolute inset-2 sm:inset-3 md:inset-4 rounded-full border border-[#e7d7d7] flex items-center justify-center">
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-felidae text-gray-900 leading-none">{timeLeft.seconds}</span>
          </div>
        </div>
        <span className="mt-2 sm:mt-4 md:mt-6 text-xs sm:text-base md:text-xl lg:text-2xl font-felidae text-gray-700">Secs</span>
      </div>
    </div>
  )
}

export default CountdownTimer
