"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, Transition } from 'framer-motion'

interface Photo {
  src: string
  alt: string
}

const ITEM_WIDTH = 280 // px - must match the Tailwind w-[280px]
const GAP = 24 // px (gap-6)
const STEP = ITEM_WIDTH + GAP
const VISIBLE_COUNT = 6
const TRANSITION_SECONDS = 1 // slide duration
const AUTO_SECONDS = 5 // time between slides

const AlbumCarousel: React.FC = () => {
  const photos: Photo[] = [
    { src: '/asset/pictures/wedding/ac1.png', alt: 'Wedding photo 1' },
    { src: '/asset/pictures/wedding/ac2.png', alt: 'Wedding photo 2' },
    { src: '/asset/pictures/wedding/ac3.png', alt: 'Wedding photo 3' },
    { src: '/asset/pictures/wedding/ac4.png', alt: 'Wedding photo 4' },
    { src: '/asset/pictures/wedding/ac5.png', alt: 'Wedding photo 5' },
    { src: '/asset/pictures/wedding/ac6.png', alt: 'Wedding photo 6' },
    { src: '/asset/pictures/wedding/ac8.png', alt: 'Wedding photo 7' },
    { src: '/asset/pictures/wedding/ac11.png', alt: 'Wedding photo 8' },
    { src: '/asset/pictures/wedding/ac13.png', alt: 'Wedding photo 9' },
    { src: '/asset/pictures/wedding/ac17.png', alt: 'Wedding photo 10' },
    { src: '/asset/pictures/wedding/ac18.png', alt: 'Wedding photo 11' },
    { src: '/asset/pictures/wedding/ac19.png', alt: 'Wedding photo 12' },
  ]

  // Duplicate the photos so we can seamlessly scroll
  const loopedPhotos = [...photos, ...photos]

  const [index, setIndex] = useState(0) // logical slide index
  const [instant, setInstant] = useState(false) // when true, jump without transition
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    // Auto-advance
    timerRef.current = window.setInterval(() => {
      setIndex((prev) => prev + 1)
    }, AUTO_SECONDS * 1000)

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [])

  useEffect(() => {
    // When index reaches photos.length (full cycle), after the slide animation completes,
    // jump instantly back to 0 (no transition) so the loop appears seamless.
    if (index === photos.length) {
      // after the visual transition completes, jump to 0
      const t = window.setTimeout(() => {
        setInstant(true)
        setIndex(0)

        // remove instant after next paint so subsequent moves animate
        window.setTimeout(() => setInstant(false), 50)
      }, TRANSITION_SECONDS * 1000)

      return () => window.clearTimeout(t)
    }

    // Keep index bounded to avoid runaway values (optional safety)
    if (index > photos.length) {
      setIndex((prev) => prev % photos.length)
    }
  }, [index, photos.length])

  const translateX = -(index * STEP)
  // use easing array to satisfy framer-motion typing
  const transition: Transition = instant
    ? ({ duration: 0 } as Transition)
    : ({ duration: TRANSITION_SECONDS, ease: [0.42, 0, 0.58, 1] } as Transition)

  return (
    <section className="relative w-full py-20 bg-linear-to-b from-white to-gray-50 overflow-hidden" id="album-carousel">
      <div className="w-full">
        <h2 className="text-5xl lg:text-6xl font-felidae text-center text-gray-800 mb-16">
          Our Album
        </h2>

        <div className="w-full overflow-hidden">
          <motion.div
            className="flex items-center"
            animate={{ x: `${translateX}px` }}
            transition={transition}
            style={{ gap: `${GAP}px` }}
          >
            {loopedPhotos.map((photo, i) => {
              // Determine vertical animation based on original photo index within a block of 6
              const originalIndex = i % photos.length
              const posInPage = originalIndex % VISIBLE_COUNT
              const isFromBottom = posInPage < 3 // first 3 animate from bottom

              const yAnim = isFromBottom ? [20, 0, 20] : [-20, 0, -20]

              return (
                <motion.div
                  key={i}
                  className="relative w-[280px] h-[400px] overflow-hidden hover:scale-105 transition-transform duration-300"
                  animate={{ y: yAnim }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="relative w-full h-full">
                    <Image src={photo.src} alt={photo.alt} fill sizes="280px" className="object-cover" />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AlbumCarousel
