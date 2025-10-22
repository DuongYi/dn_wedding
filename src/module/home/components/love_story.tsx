"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";

type Story = {
  title: string;
  text: string;
  leftSrc: string;
  rightSrc: string;
};

const stories: Story[] = [
  {
    title: "First Time We Met",
    text:
      "We met by chance at a coffee shop on a rainy afternoon. She was reading her favorite book, and I offered her the last available seat. What began as casual conversation quickly turned into hours of laughter neither of us expected.",
    leftSrc: "/asset/pictures/wedding/ac22.png",
    rightSrc: "/asset/pictures/wedding/ac23.png",
  },
  {
    title: "Where Love Started",
    text:
      "Little moments became memories. Every shared story, every walk under the city lights pulled us closer, and somewhere along the way, our hearts quietly chose each other.",
    leftSrc: "/asset/pictures/wedding/ac24.png",
    rightSrc: "/asset/pictures/wedding/ac25.png",
  },
  {
    title: "She Said Yes",
    text:
      "On a day filled with soft sunlight and trembling words, I asked, and she said yes. A promise of forever began with a smile and a tear.",
    leftSrc: "/asset/pictures/wedding/ac26.png",
    rightSrc: "/asset/pictures/wedding/ac27.png",
  },
];

const LoveStory: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const recalc = useCallback(() => {
    if (!sectionRef.current || !trackRef.current) return;
    const trackWidth = trackRef.current.scrollWidth;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const extraScroll = 80; // px dư ở đầu và cuối
    const scrollLength = Math.max(0, trackWidth - vw + vh + extraScroll * 2);
    sectionRef.current.style.height = `${scrollLength}px`;
    onScroll();
  }, []);

  const onScroll = () => {
    if (!sectionRef.current || !trackRef.current) return;
    const sectionTop = sectionRef.current.offsetTop;
    const scrollY = window.scrollY;
    const vw = window.innerWidth;
    const trackWidth = trackRef.current.scrollWidth;
    const distToScroll = Math.max(1, trackWidth - vw);
    const extraScroll = 80; // px dư ở đầu và cuối
    const end = sectionTop + sectionRef.current.offsetHeight - window.innerHeight - extraScroll;
    let progress = 0;
    if (scrollY <= sectionTop + extraScroll) progress = 0;
    else if (scrollY >= end) progress = 1;
    else progress = (scrollY - sectionTop - extraScroll) / (end - sectionTop - extraScroll);
    progress = Math.max(0, Math.min(1, progress));

    const translateX = -progress * distToScroll;
    trackRef.current.style.transform = `translate3d(${translateX}px, 0, 0)`;
  };

  useEffect(() => {
    const ro = new ResizeObserver(() => recalc());
    if (sectionRef.current) ro.observe(sectionRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", recalc);
    window.addEventListener("scroll", onScroll, { passive: true });
    recalc();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recalc);
      window.removeEventListener("scroll", onScroll);
    };
  }, [recalc]);

  return (
    <section ref={sectionRef} className="relative bg-white py-[150px] max-w-7xl mx-auto" id="love-story">
      {/* Sticky viewport while we scroll vertically */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Horizontal track that we translate as you scroll */}
        <div
          ref={trackRef}
          className="flex h-full items-center gap-10 px-6 will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {stories.map((s) => (
            <div
              key={s.title}
              className="flex flex-col lg:flex-row items-start w-screen h-full min-w-[90vw]"
            >
              {/* Left column: image + text */}
              <div className="flex flex-col items-start flex-1 max-w-[535px] w-full">
                <div className="relative h-[260px] lg:w-[320px] lg:h-[320px] overflow-hidden shadow-xl">
                  <Image
                    src={s.leftSrc}
                    alt={s.title + ' left'}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="max-w-[535px] pt-64">
                  <h2 className="text-3xl lg:text-4xl font-felidae font-light text-gray-800 mb-2 pl-2">
                    {s.title}
                  </h2>
                  <p className="text-gray-600 text-base lg:text-lg max-w-xl leading-relaxed pl-2">
                    {s.text}
                  </p>
                </div>
              </div>

              {/* Right column: image only */}
              <div className="relative h-[82%] aspect-5/6 overflow-hidden ml-20">
                <Image
                  src={s.rightSrc}
                  alt={s.title + ' right'}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
