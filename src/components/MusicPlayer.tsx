"use client"

import React, { useState, useRef, useEffect } from 'react'

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    setIsMounted(true)

    // Auto play music when component mounts
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch(error => {
        console.log('Autoplay prevented by browser:', error)
        // Browsers might block autoplay, user will need to click
      })
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(error => {
          console.log('Audio play failed:', error)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  if (!isMounted) return null

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/asset/music/wedding-song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Floating Music Button */}
      <button
        onClick={togglePlay}
        className="fixed bottom-8 left-8 z-50 w-10 h-10 md:w-16 md:h-16 bg-linear-to-br from-pink-400 to-pink-600 rounded-full shadow-2xl hover:shadow-pink-300 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {/* Pulse animation when playing */}
        {isPlaying && (
          <>
            <span className="absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75 animate-ping"></span>
            <span className="absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-50 animate-pulse"></span>
          </>
        )}

        {/* Attention animation when paused */}
        {!isPlaying && (
          <>
            <span className="absolute inline-flex h-[120%] w-[120%] rounded-full border-2 border-pink-400 opacity-75 animate-ping"></span>
            <span className="absolute inline-flex h-[110%] w-[110%] rounded-full border-2 border-pink-300 opacity-50 animate-pulse"></span>
          </>
        )}

        {/* Icon */}
        <div className="relative z-10">
          {isPlaying ? (
            // Pause Icon
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            // Play Icon
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>

        {/* Music waves decoration */}
        {isPlaying && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-1">
            <div className="w-1 h-4 bg-pink-400 rounded-full animate-wave" style={{ animationDelay: '0s' }}></div>
            <div className="w-1 h-6 bg-pink-400 rounded-full animate-wave" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-5 bg-pink-400 rounded-full animate-wave" style={{ animationDelay: '0.4s' }}></div>
          </div>
        )}
      </button>
    </>
  )
}

export default MusicPlayer
