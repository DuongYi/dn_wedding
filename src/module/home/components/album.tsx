"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const Album: React.FC = () => {
  const [isGathered, setIsGathered] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

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

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const photos = [
    {
      src: '/asset/pictures/album/album2.jpg',
      alt: 'Wedding photo 1',
      rotation: -7,
      scale: 1,
      zIndex: 30,
      position: { spread: { left: -10, top: 5 }, gathered: { left: 35, top: 15 } }
    },
    {
      src: '/asset/pictures/album/album4.jpg',
      alt: 'Wedding photo 2',
      rotation: 12.5,
      scale: 1,
      zIndex: 20,
      position: { spread: { left: 13, top: 20 }, gathered: { left: 35, top: 25 } }
    },
    {
      src: '/asset/pictures/wedding/ac33.png',
      alt: 'Wedding photo 3',
      rotation: 1,
      scale: 1,
      zIndex: 25,
      position: { spread: { left: 38, top: 10 }, gathered: { left: 35, top: 20 } }
    },
    {
      src: '/asset/pictures/album/album1.jpg',
      alt: 'Wedding photo 4',
      rotation: -12.5,
      scale: 1,
      zIndex: 15,
      position: { spread: { left: 63, top: 25 }, gathered: { left: 35, top: 30 } }
    },
    {
      src: '/asset/pictures/album/album3.jpg',
      alt: 'Wedding photo 5',
      rotation: 9,
      scale: 1,
      zIndex: 35,
      position: { spread: { left: 87, top: 8 }, gathered: { left: 35, top: 18 } }
    },
  ]

  // Touch handlers for mobile carousel
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left - next slide
      setCurrentSlide((prev) => (prev < photos.length - 1 ? prev + 1 : prev))
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right - previous slide
      setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev))
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-12 md:pt-20 lg:pt-24 pb-20 md:pb-32 lg:pb-40 bg-linear-to-b from-white to-gray-50 overflow-hidden"
      id="album"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-felidae text-center text-gray-800 mb-8 md:mb-12 lg:mb-16">
          Our Memories
        </h2>

        {/* Mobile Carousel */}
        {isMobile ? (
          <div className="relative">
            <div
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {photos.map((photo, index) => (
                  <div key={index} className="min-w-full flex justify-center items-center py-8">
                    <div
                      onClick={() => setSelectedPhoto(index)}
                      className="cursor-pointer hover:scale-105 transition-transform duration-300"
                    >
                      <div className="relative w-[280px] h-[400px] bg-white p-3 shadow-2xl">
                        <div className="relative w-full h-full">
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes="280px"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index
                    ? 'bg-gray-800 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Spread/Gathered Effect */
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
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
                  <div className="relative w-[180px] h-[260px] md:w-60 md:h-[350px] lg:w-[320px] lg:h-[460px] bg-white p-2 md:p-2.5 shadow-2xl">
                    <div className="relative w-full h-full">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 180px, (max-width: 1024px) 240px, 320px"
                        className="absolute inset-0 object-cover"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
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
            aria-label="Đóng"
          >
            ×
          </button>

          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative bg-white p-2 shadow-2xl max-w-[90vw] max-h-[90vh]">
              <div className="relative w-full h-full">
                <Image
                  src={photos[selectedPhoto].src}
                  alt={photos[selectedPhoto].alt}
                  width={1200}
                  height={1600}
                  className="w-auto h-auto max-w-full max-h-[85vh] object-contain"
                  onClick={(e) => e.stopPropagation()}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          {selectedPhoto > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedPhoto(selectedPhoto - 1)
              }}
              aria-label="Ảnh trước"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {selectedPhoto < photos.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedPhoto(selectedPhoto + 1)
              }}
              aria-label="Ảnh sau"
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
