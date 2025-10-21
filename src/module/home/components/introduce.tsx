"use client"

import React from 'react'
import Image from 'next/image'

const Introduce: React.FC = () => {
  return (
    <div className="relative w-full py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Card - Kim Ngan */}
          <div className="lg:col-span-3 flex flex-col items-start text-center">
            <div className="relative w-full max-w-[280px] aspect-3/4 overflow-hidden mb-6 shadow-lg">
              <Image
                src="/asset/pictures/wedding/ac24.png"
                alt="Kim Ngan"
                fill
                className="absolute inset-0 object-cover"
              />
            </div>
            <h3 className="text-4xl font-light mb-3 text-gray-800 font-felidae">Kim Ngan</h3>
            <p className="text-[15px] text-gray-600 leading-relaxed max-w-[250px] text-start">
              Hôm nay, tôi kết hôn với người bạn thân nhất của mình. Với niềm vui trong tim và tình yêu trong mắt, tôi đã sẵn sàng cho một cuộc sống mãi mãi.
            </p>
          </div>

          {/* Center Image - Main Couple */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-3/4 overflow-hidden shadow-2xl">
              <Image
                src="/asset/pictures/wedding/ac17.png"
                alt="Wedding Couple"
                fill
                className="absolute inset-0 object-cover"
              />
            </div>
          </div>

          {/* Right Card - Duc Duong */}
          <div className="lg:col-span-3 flex flex-col text-center items-end self-end">
            <h3 className="text-4xl font-light mb-3 text-gray-800 font-felidae">Duc Duong</h3>
            <p className="text-[15px] text-gray-600 leading-relaxed max-w-[250px] mb-6 text-right">
              Với một trái tim tràn đầy tình yêu thương và một tâm hồn tràn đầy hy vọng, anh rất mong được bắt đầu cuộc hành trình này cùng em bên cạnh.
            </p>
            <div className="relative w-full max-w-[280px] aspect-3/4 overflow-hidden shadow-lg">
              <Image
                src="/asset/pictures/member/person_2.jpg"
                alt="Duc Duong"
                fill
                className="absolute inset-0 object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Introduce
