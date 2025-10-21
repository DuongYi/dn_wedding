import React from 'react'
import Image from 'next/image'

const BodyTop: React.FC = () => {
  return (
    <div className="w-full py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left images column */}
          <div className="lg:col-span-3 space-y-6">
            <div className="relative w-full aspect-3/4 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/asset/pictures/home/wedding-couple.jpg"
                alt="Wedding couple"
                fill
                className="object-cover grayscale"
              />
            </div>
            <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/asset/pictures/home/wedding-couple2.png"
                alt="Bride with bouquet"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Center quote column */}
          <div className="lg:col-span-6 text-center px-4 lg:px-12 py-8">
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light mb-8 leading-tight text-gray-800">
              <span className="text-6xl lg:text-8xl">&ldquo;</span>
              You are my today and all of my tomorrows.
              <span className="text-6xl lg:text-8xl">&rdquo;</span>
            </h2>

            <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Your smile is so gentle, yet powerful enough to light up the darkest corners of my soul.
              It carries warmth, hope, and a kind of magic the night sky could only dream of.
              While stars twinkle far away in the heavens, your smile glows right here beside me—
              real, radiant, and made just for my heart to find peace. It&apos;s not just beauty I see;
              it&apos;s love, comfort, and home all at once.
            </p>

            {/* Decorative flower illustration */}
            <div className="flex justify-center">
              <div className="relative w-20 h-20">
                <Image
                  src="/asset/pictures/icon/flower.png"
                  alt="Flower decoration"
                  fill
                  className="object-contain opacity-60"
                />
              </div>
            </div>
          </div>

          {/* Right images column */}
          <div className="lg:col-span-3 space-y-6">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/asset/pictures/home/wedding-couple2.png"
                alt="Bride portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-3/4 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/asset/pictures/home/wedding-couple.jpg"
                alt="Wedding rings"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyTop;
