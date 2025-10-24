"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface Photo {
  src: string
  alt: string
  width?: number
  height?: number
}

interface PhotoGalleryProps {
  photos: Photo[]
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const openPhoto = (index: number) => {
    setSelectedPhoto(index)
  }

  const closePhoto = () => {
    setSelectedPhoto(null)
  }

  const nextPhoto = () => {
    if (selectedPhoto !== null && selectedPhoto < photos.length - 1) {
      setSelectedPhoto(selectedPhoto + 1)
    }
  }

  const prevPhoto = () => {
    if (selectedPhoto !== null && selectedPhoto > 0) {
      setSelectedPhoto(selectedPhoto - 1)
    }
  }

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhoto === null) return

      if (e.key === 'Escape') {
        setSelectedPhoto(null)
      }
      if (e.key === 'ArrowRight' && selectedPhoto < photos.length - 1) {
        setSelectedPhoto(selectedPhoto + 1)
      }
      if (e.key === 'ArrowLeft' && selectedPhoto > 0) {
        setSelectedPhoto(selectedPhoto - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedPhoto, photos.length])

  return (
    <>
      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300"
            onClick={() => openPhoto(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-9999 flex items-center justify-center"
            onClick={closePhoto}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
              onClick={closePhoto}
              aria-label="Đóng"
            >
              ×
            </button>

            {/* Photo Counter */}
            <div className="absolute top-4 left-4 text-white text-lg z-10">
              {selectedPhoto + 1} / {photos.length}
            </div>

            {/* Main Photo */}
            <motion.div
              key={selectedPhoto}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative flex items-center justify-center max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-white p-2 shadow-2xl">
                <Image
                  src={photos[selectedPhoto].src}
                  alt={photos[selectedPhoto].alt}
                  width={photos[selectedPhoto].width || 1200}
                  height={photos[selectedPhoto].height || 1600}
                  className="w-auto h-auto max-w-[85vw] max-h-[85vh] object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Previous Button */}
            {selectedPhoto > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation()
                  prevPhoto()
                }}
                aria-label="Ảnh trước"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Next Button */}
            {selectedPhoto < photos.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation()
                  nextPhoto()
                }}
                aria-label="Ảnh sau"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default PhotoGallery
