"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const Album: React.FC = () => {
  const [isGathered, setIsGathered] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
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
      // Reversed: gather when scrolling DOWN (section moving UP)
      const shouldGather = sectionMiddle > windowHeight / 2

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
      position: { spread: { left: -10, top: 5 }, gathered: { left: 35, top: 15 } }
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
      position: { spread: { left: 38, top: 10 }, gathered: { left: 35, top: 20 } }
    },
    {
      src: '/asset/pictures/wedding/ac4.png',
      alt: 'Wedding photo 4',
      rotation: -12.5,
      scale: 1,
      zIndex: 15,
      position: { spread: { left: 63, top: 25 }, gathered: { left: 35, top: 30 } }
    },
    {
      src: '/asset/pictures/wedding/ac5.png',
      alt: 'Wedding photo 5',
      rotation: 9,
      scale: 1,
      zIndex: 35,
      position: { spread: { left: 87, top: 8 }, gathered: { left: 35, top: 18 } }
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-24 pb-40 bg-linear-to-b from-white to-gray-50 overflow-hidden"
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

            // When gathered, center image (index 2) gets highest zIndex
            const currentZIndex = isGathered && index === 2 ? 100 : photo.zIndex

            return (
              <div
                key={index}
                onClick={() => setSelectedPhoto(index)}
                className="absolute transition-all duration-1500 ease-in-out hover:scale-110 hover:z-50 hover:rotate-0 cursor-pointer"
                style={{
                  transform: `rotate(${photo.rotation}deg) scale(${photo.scale})`,
                  zIndex: currentZIndex,
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

      {/* Fullscreen Dialog */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-9999 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedPhoto(null)}
          >
            ×
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            <div className="relative bg-white p-[10px] max-w-full max-h-full">
              <div className="relative w-auto h-auto max-w-[calc(100vw-100px)] max-h-[calc(90vh-100px)]">
                <Image
                  src={photos[selectedPhoto].src}
                  alt={photos[selectedPhoto].alt}
                  width={800}
                  height={1200}
                  className="w-auto h-auto max-w-full max-h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          {selectedPhoto > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full w-14 h-14 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedPhoto(selectedPhoto - 1)
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {selectedPhoto < photos.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full w-14 h-14 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedPhoto(selectedPhoto + 1)
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </section>
  )
}

export default Album
