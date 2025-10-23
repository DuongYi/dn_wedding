"use client";
import { useEffect } from "react";

const KeyboardScroll = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if not focused on input/textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      // Scroll amount (pixels)
      const scrollAmount = 800;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          // Trigger a wheel event to work with SmoothScroll
          const upTarget = Math.max(0, window.scrollY - scrollAmount);
          window.scrollTo(0, upTarget);
          break;

        case 'ArrowDown':
          e.preventDefault();
          // Trigger a wheel event to work with SmoothScroll
          const downTarget = Math.min(maxScroll, window.scrollY + scrollAmount);
          window.scrollTo(0, downTarget);
          break;

        case 'Home':
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          break;

        case 'End':
          e.preventDefault();
          window.scrollTo({
            top: maxScroll,
            behavior: 'smooth'
          });
          break;

        case 'PageUp':
          e.preventDefault();
          window.scrollTo({
            top: Math.max(0, window.scrollY - window.innerHeight),
            behavior: 'smooth'
          });
          break;

        case 'PageDown':
          e.preventDefault();
          window.scrollTo({
            top: Math.min(maxScroll, window.scrollY + window.innerHeight),
            behavior: 'smooth'
          });
          break;
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null; // Component không render gì
};

export default KeyboardScroll;
