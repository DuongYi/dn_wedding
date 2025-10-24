"use client"

import React from 'react'
import PhotoGallery from '../components/photo_gallery'
import { motion } from 'framer-motion'

const PhotoAlbumPage: React.FC = () => {
  // Danh sách tất cả ảnh cưới
  const weddingPhotos = [
    { src: '/asset/pictures/wedding/ac1.png', alt: 'Wedding Photo 1' },
    { src: '/asset/pictures/wedding/ac2.png', alt: 'Wedding Photo 2' },
    { src: '/asset/pictures/wedding/ac3.png', alt: 'Wedding Photo 3' },
    { src: '/asset/pictures/wedding/ac4.png', alt: 'Wedding Photo 4' },
    { src: '/asset/pictures/wedding/ac5.png', alt: 'Wedding Photo 5' },
    { src: '/asset/pictures/wedding/ac6.png', alt: 'Wedding Photo 6' },
    { src: '/asset/pictures/wedding/ac7.png', alt: 'Wedding Photo 7' },
    { src: '/asset/pictures/wedding/ac8.png', alt: 'Wedding Photo 8' },
    { src: '/asset/pictures/wedding/ac9.png', alt: 'Wedding Photo 9' },
    { src: '/asset/pictures/wedding/ac10.png', alt: 'Wedding Photo 10' },
    { src: '/asset/pictures/wedding/ac11.png', alt: 'Wedding Photo 11' },
    { src: '/asset/pictures/wedding/ac12.png', alt: 'Wedding Photo 12' },
    { src: '/asset/pictures/wedding/ac13.png', alt: 'Wedding Photo 13' },
    { src: '/asset/pictures/wedding/ac16.png', alt: 'Wedding Photo 16' },
    { src: '/asset/pictures/wedding/ac17.png', alt: 'Wedding Photo 17' },
    { src: '/asset/pictures/wedding/ac18.png', alt: 'Wedding Photo 18' },
    { src: '/asset/pictures/wedding/ac19.png', alt: 'Wedding Photo 19' },
    { src: '/asset/pictures/wedding/ac20.png', alt: 'Wedding Photo 20' },
    { src: '/asset/pictures/wedding/ac21.png', alt: 'Wedding Photo 21' },
    { src: '/asset/pictures/wedding/ac22.png', alt: 'Wedding Photo 22' },
    { src: '/asset/pictures/wedding/ac23.png', alt: 'Wedding Photo 23' },
    { src: '/asset/pictures/wedding/ac24.png', alt: 'Wedding Photo 24' },
    { src: '/asset/pictures/wedding/ac25.png', alt: 'Wedding Photo 25' },
    { src: '/asset/pictures/wedding/ac26.png', alt: 'Wedding Photo 26' },
    { src: '/asset/pictures/wedding/ac27.png', alt: 'Wedding Photo 27' },
    { src: '/asset/pictures/wedding/ac28.png', alt: 'Wedding Photo 28' },
    { src: '/asset/pictures/wedding/ac29.png', alt: 'Wedding Photo 29' },
    { src: '/asset/pictures/wedding/ac30.png', alt: 'Wedding Photo 30' },
    { src: '/asset/pictures/wedding/ac31.png', alt: 'Wedding Photo 31' },
    { src: '/asset/pictures/wedding/ac32.png', alt: 'Wedding Photo 32' },
    { src: '/asset/pictures/wedding/ac33.png', alt: 'Wedding Photo 33' },
    { src: '/asset/pictures/wedding/ac34.png', alt: 'Wedding Photo 34' },
    { src: '/asset/pictures/wedding/ac35.png', alt: 'Wedding Photo 35' },
  ]

  return (
    <div className="min-h-screen bg-linear-to-b from-pink-50 via-white to-purple-50">
      {/* Header Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-felidae text-gray-800 mb-4">
              Our Wedding Album
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-pink-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Những khoảnh khắc đẹp nhất trong ngày trọng đại của chúng tôi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="relative pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4">
          <PhotoGallery photos={weddingPhotos} />
        </div>
      </section>

      {/* Decorative Footer */}
      <section className="relative py-12 bg-linear-to-r from-pink-100 via-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-2xl md:text-3xl font-light text-gray-700 italic mb-4">
              &ldquo;Every love story is beautiful, but ours is my favorite&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4 text-gray-600">
              <span className="text-2xl font-semibold font-fz-manstein">Dương</span>
              <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="text-2xl font-semibold font-fz-manstein">Ngân</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PhotoAlbumPage
