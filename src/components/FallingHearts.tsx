"use client"

import React, { useEffect, useState } from 'react'

interface Heart {
  id: number
  left: number
  animationDuration: number
  size: number
  delay: number
  color: string
}

const FallingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    // Tạo trái tim mới mỗi 2 giây
    const interval = setInterval(() => {
      const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#fff', '#ffb6c1']
      const newHeart: Heart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 4, // 3-7 giây
        size: 15 + Math.random() * 25, // 15-40px
        delay: 0,
        color: colors[Math.floor(Math.random() * colors.length)]
      }

      setHearts(prev => [...prev, newHeart])

      // Xóa trái tim sau khi animation kết thúc
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id))
      }, (newHeart.animationDuration + 1) * 1000)
    }, 800) // Tạo trái tim mới mỗi 0.8 giây

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute animate-fall"
          style={{
            left: `${heart.left}%`,
            top: '-50px',
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size}px`,
            color: heart.color,
            opacity: 0.7
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{
              width: '1em',
              height: '1em',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            }}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </div>
  )
}

export default FallingHearts
