"use client"

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const BodyTop: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const text = "You are my today and all of my tomorrows."
  const words = text.split(" ")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

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
      className="relative w-full py-12 md:py-32 lg:py-52 bg-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left images column - Hidden on mobile */}
      <div className="hidden xl:block absolute left-0 top-1/2 transform -translate-y-1/2 w-[320px] xl:w-[380px] 2xl:w-[480px]">
        <motion.div
          className="relative w-[80%] left-[16px] 2xl:left aspect-3/4 overflow-hidden shadow-xl -mb-12"
          style={getTransform(30)}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/asset/pictures/wedding/ac18.png"
            alt="Wedding couple"
            fill
            sizes="400px"
            className="absolute inset-0 object-cover"
          />
        </motion.div>
        <motion.div
          className="relative left-[16px] 2xl:left-[210px] top-[90px] 2xl:top-0 z-1 w-[60%] aspect-3/4"
          style={getTransform(-20)}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/asset/pictures/wedding/ac19.png"
            alt="Bride with bouquet"
            fill
            sizes="300px"
            className="absolute inset-0 object-cover"
          />
        </motion.div>
      </div>

      {/* Center quote column */}
      <div className='w-full mx-auto px-3'>
        <div className="max-w-7xl mx-auto">
          <div className="lg:mt-32 mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center">
              <motion.h2
                className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-light leading-tight text-gray-800 font-felidae"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl">&ldquo;</span>
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
                <span className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl">&rdquo;</span>
              </motion.h2>

              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed md:leading-[30px] lg:leading-[35px] mb-8 max-w-[600px] 2xl:max-w-[710px] mx-auto pt-6 md:pt-8">
                Nụ cười của em thật dịu dàng, nhưng cũng đủ mạnh mẽ để thắp sáng những góc tối nhất trong tâm hồn anh. Nó mang theo hơi ấm, hy vọng, và một loại phép thuật mà ngay cả bầu trời đêm cũng phải ghen tị. Khi những vì sao vẫn lấp lánh nơi xa, nụ cười của em lại tỏa sáng ngay bên cạnh anh – rạng rỡ, chân thành, và sinh ra để mang đến bình yên cho trái tim này. Với anh, đó không chỉ là vẻ đẹp mà là tình yêu, là nơi trú ngụ, là mái ấm anh luôn tìm kiếm.
              </p>

              {/* Decorative flower illustration */}
              <div
                className="h-24 md:h-32 lg:h-36 rotate-45 mt-8 md:mt-12 lg:mt-16"
              >
                <Image
                  src="/asset/pictures/icon/flower2.svg"
                  alt="Flower decoration"
                  fill
                  sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 144px"
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Right images column - Hidden on mobile */}
      <div className="hidden xl:block absolute left-auto right-0 top-1/2 mt-12 mr-8 -translate-y-1/2 w-[320px] xl:w-[380px] 2xl:w-[480px] text-right">
        <motion.div
          className="w-full"
          style={getTransform(-25)}
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative w-[50%] aspect-6/7 overflow-hidden shadow-xl ml-auto">
            <Image
              src="/asset/pictures/wedding/ac20.png"
              alt="Bride portrait"
              fill
              sizes="240px"
              className="absolute inset-0 object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          className="relative w-[75%] aspect-3/4 overflow-hidden shadow-xl mt-[110px] ml-auto mr-8"
          style={getTransform(35)}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/asset/pictures/wedding/ac28.png"
            alt="Wedding rings"
            fill
            sizes="360px"
            className="absolute inset-0 object-cover"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default BodyTop;
