"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const weddingDate = new Date('2025-11-09T00:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = weddingDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[833px] max-w-[1730px] mx-auto">
      <div className="">
        <h2 className="font-medium mb-0 ml-2 perspective-[400px] font-felidae leading-[400px] relative z-10" aria-label="FOREVER">
          <div aria-hidden="false" className="relative block text-start text-black translate-x-0 translate-y-0 translate-z-0 rotate-0 scale-100 origin-[860px_200px] opacity-100 font-felidae text-[290px]">FOREVER</div>
        </h2>
        <h2 className="perspective-[400px] absolute z-10 right-[380px] bottom-0 font-medium mb-0 ml-2 leading-[400px]" aria-label="AFTER">
          <div aria-hidden="false" className="relative block text-start text-black  translate-x-0 translate-y-0 translate-z-0 rotate-0 scale-100 origin-[406.875px_200px] opacity-100 font-felidae text-[290px]">
            AFTER
          </div>
        </h2>

        {/* Circular Badge - YOU ARE INVITED */}
        <div className="absolute left-[463px] top-[333px]">
          <div className="relative w-[140px] h-[140px] border border-gray-400 border-solid p-[5px] rounded-full text-[11px]">
            <div className="animate-rotate">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[11px] fill-amber-900 font-light tracking-[3px] uppercase ">
                  <textPath href="#circlePath" startOffset="0%">
                    YOU ARE INVITED
                  </textPath>
                </text>
              </svg>
              {/* Decorative flower */}
              <div className="absolute top-[52px] left-[22px] w-[70%] h-[70%] align-middle">
                <Image
                  src="/asset/pictures/icon/flower.png"
                  alt="Flower"
                  fill
                  className=" rotate-[-66deg]"
                />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 bg-pink-300/20 rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            </div>
          </div>

        </div>


        {/* Wedding Info */}
        <div className="absolute left-0 bottom-[180px] z-10">
          <p className="text-gray-600 text-[22px] md:text-base font-light">
            Trân trọng kính mời đến dự tiệc cưới của chúng mình{" "}
            <span className="font-semibold text-black text-[24px]">09.11.2025</span>
          </p>
          <p className="text-gray-600 text-[20px] md:text-base font-light max-w-md mt-2">
            Cùng nhau bước vào chương mới, nơi tình yêu và hạnh phúc bắt đầu.
          </p>
          {/* Countdown Timer */}
          <div className="mt-8 flex gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 font-felidae">{timeLeft.days}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider mt-1">Ngày</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 font-felidae">{timeLeft.hours}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider mt-1">Giờ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 font-felidae">{timeLeft.minutes}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider mt-1">Phút</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 font-felidae">{timeLeft.seconds}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider mt-1">Giây</div>
            </div>
          </div>

        </div>
      </div>

      {/* Right Image */}
      <div className="absolute right-[-50px] top-0 w-1/2 h-full z-0">
        <div className="relative w-full h-full">
          <Image
            src="/asset/pictures/home/wedding-couple2.jpg"
            alt="Wedding Couple"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
