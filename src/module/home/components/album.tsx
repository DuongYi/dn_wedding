"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const Album: React.FC = () => {
  const [isGathered, setIsGathered] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Check if section is in viewport
      const isInViewport = rect.top < windowHeight && rect.bottom > 0

      if (!isInViewport) return

      // Toggle state based on scroll position within the section
      // When section top reaches middle of viewport, gather images
      const sectionMiddle = rect.top + rect.height / 2
      const shouldGather = sectionMiddle < windowHeight / 2

      setIsGathered(shouldGather)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const photos = [
    {
      src: '/asset/pictures/wedding/ac1.png',
      alt: 'Wedding photo 1',
      rotation: -7,
      scale: 1,
      zIndex: 30,
      position: { spread: { left: -10, top: 5 }, gathered: { left: 25, top: 15 } }
    },
    {
      src: '/asset/pictures/wedding/ac2.png',
      alt: 'Wedding photo 2',
      rotation: 12.5,
      scale: 1,
      zIndex: 20,
      position: { spread: { left: 13, top: 20 }, gathered: { left: 35, top: 25 } }
    },
    {
      src: '/asset/pictures/wedding/ac3.png',
      alt: 'Wedding photo 3',
      rotation: 1,
      scale: 1,
      zIndex: 25,
      position: { spread: { left: 38, top: 10 }, gathered: { left: 47, top: 20 } }
    },
    {
      src: '/asset/pictures/wedding/ac4.png',
      alt: 'Wedding photo 4',
      rotation: -12.5,
      scale: 1,
      zIndex: 15,
      position: { spread: { left: 63, top: 25 }, gathered: { left: 57, top: 30 } }
    },
    {
      src: '/asset/pictures/wedding/ac5.png',
      alt: 'Wedding photo 5',
      rotation: 9,
      scale: 1,
      zIndex: 35,
      position: { spread: { left: 87, top: 8 }, gathered: { left: 68, top: 18 } }
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 bg-linear-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-6xl font-felidae text-center text-gray-800 mb-16">
          Our Memories
        </h2>

        <div className="relative h-[600px] flex items-center justify-center">
          {photos.map((photo, index) => {
            // Use custom positions for spread and gathered states
            const currentLeft = isGathered ? photo.position.gathered.left : photo.position.spread.left
            const currentTop = isGathered ? photo.position.gathered.top : photo.position.spread.top

            // Rotation: reduce to 0 when gathered
            const currentRotation = isGathered ? 0 : photo.rotation

            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-in-out hover:scale-110 hover:z-50 hover:rotate-0 cursor-pointer"
                style={{
                  transform: `rotate(${currentRotation}deg) scale(${photo.scale})`,
                  zIndex: photo.zIndex,
                  left: `${currentLeft}%`,
                  top: `${currentTop}%`,
                }}
              >
                <div className="relative w-[320px] h-[460px] bg-white p-[10px] shadow-2xl">
                  <div className="relative w-full h-full">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="absolute inset-0 object-cover"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Album
