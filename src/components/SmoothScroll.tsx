"use client";
import { useEffect } from 'react';

interface SmoothScrollProps {
  speed?: number; // Tốc độ scroll (0.1 - 1), càng nhỏ càng chậm
  smoothness?: number; // Độ mượt (0.05 - 0.2), càng nhỏ càng mượt
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ speed = 1, smoothness = 0.1 }) => {
  useEffect(() => {
    // Disable smooth scroll on mobile/touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      return; // Exit early on touch devices
    }

    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;
    let animationFrameId: number;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Cập nhật target scroll
      targetScroll += e.deltaY * speed;
      targetScroll = Math.max(0, Math.min(targetScroll, document.documentElement.scrollHeight - window.innerHeight));
    };

    const smoothScrollAnimation = () => {
      // Check if scroll position changed externally (programmatic scroll)
      const actualScroll = window.scrollY;
      if (Math.abs(actualScroll - currentScroll) > 50) {
        // Large jump detected - sync with new position
        currentScroll = actualScroll;
        targetScroll = actualScroll;
      }

      // Lerp (Linear Interpolation) để scroll mượt
      currentScroll += (targetScroll - currentScroll) * smoothness;

      // Làm tròn để tránh scroll vô tận
      if (Math.abs(targetScroll - currentScroll) < 0.5) {
        currentScroll = targetScroll;
      }

      window.scrollTo(0, currentScroll);

      // Tiếp tục animation
      animationFrameId = requestAnimationFrame(smoothScrollAnimation);
    };

    // Bắt đầu animation loop
    animationFrameId = requestAnimationFrame(smoothScrollAnimation);

    // Thêm event listener với passive: false để có thể preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, smoothness]);

  return null;
};

export default SmoothScroll;
