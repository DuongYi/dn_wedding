"use client"

import React, { useState, useRef } from 'react'
import Image from 'next/image'

const BodyTop: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height

    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  const getTransform = (intensity: number) => {
    return {
      transform: `translate(${mousePosition.x * intensity}px, ${mousePosition.y * intensity}px)`,
      transition: 'transform 0.3s ease-out'
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full py-52 bg-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left images column */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[480px]">
        <div
          className="relative w-[80%] aspect-3/4 overflow-hidden shadow-xl -mb-12"
          style={getTransform(30)}
        >
          <Image
            src="/asset/pictures/wedding/ac18.png"
            alt="Wedding couple"
            fill
            className="absolute inset-0 object-cover"
          />
        </div>
        <div
          className="relative left-[210px] z-1 w-[60%] aspect-3/4"
          style={getTransform(-20)}
        >
          <Image
            src="/asset/pictures/wedding/ac19.png"
            alt="Bride with bouquet"
            fill
            className="absolute inset-0 object-cover"
          />
        </div>
      </div>

      {/* Center quote column */}
      <div className='w-full mx-auto px-3'>
        <div className="max-w-7xl mx-auto">
          <div className="mt-32 mx-auto max-w-5xl px-6">
            <div className="text-center">
              <h2 className="text-4xl lg:text-6xl xl:text-8xl font-light leading-tight text-gray-800 font-felidae">
                <span className="text-6xl lg:text-8xl">&ldquo;</span>
                You are my today and all of my tomorrows.
                <span className="text-6xl lg:text-8xl">&rdquo;</span>
              </h2>

              <p className="text-base lg:text-lg text-gray-600 leading-[35px] mb-8 max-w-[710px] mx-auto pt-8">
                Nụ cười của em thật dịu dàng, nhưng cũng đủ mạnh mẽ để thắp sáng những góc tối nhất trong tâm hồn anh. Nó mang theo hơi ấm, hy vọng, và một loại phép thuật mà bầu trời đêm chỉ có thể mơ ước. Trong khi những vì sao lấp lánh xa xăm trên bầu trời, nụ cười của em tỏa sáng ngay bên cạnh anh - chân thật, rạng rỡ, và được tạo ra chỉ để trái tim anh tìm thấy sự bình yên. Anh không chỉ thấy vẻ đẹp; đó là tình yêu, sự an ủi, và cả mái ấm, tất cả cùng một lúc.
              </p>

              {/* Decorative flower illustration */}
              <div
                className="h-36 rotate-45 mt-16"
              >
                <Image
                  src="/asset/pictures/icon/flower2.svg"
                  alt="Flower decoration"
                  fill
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Right images column */}
      <div className="absolute left-auto right-0 top-1/2 mt-12 mr-8 -translate-y-1/2 w-[480px] text-right">
        <div
          className="w-full"
          style={getTransform(-25)}
        >
          <div className="relative w-[50%] aspect-6/7 overflow-hidden shadow-xl ml-auto">
            <Image
              src="/asset/pictures/wedding/ac20.png"
              alt="Bride portrait"
              fill
              className="absolute inset-0 object-cover"
            />
          </div>
        </div>
        <div
          className="relative w-[75%] aspect-3/4 overflow-hidden shadow-xl mt-[110px] ml-auto mr-8"
          style={getTransform(35)}
        >
          <Image
            src="/asset/pictures/wedding/ac28.png"
            alt="Wedding rings"
            fill
            className="absolute inset-0 object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default BodyTop;
