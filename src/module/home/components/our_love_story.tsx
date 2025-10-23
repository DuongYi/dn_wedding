"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";

type Story = {
  time: string,
  title: string;
  text: string;
  leftSrc: string;
  rightSrc: string;
};

const stories: Story[] = [
  {
    time: "1 ngày nọ năm 2018",
    title: "First Time We Met",
    text:
      "Lần đầu gặp vợ là khi bắt đầu học cấp 3, cô ấy ngồi trước tôi trong lớp. Tôi nhớ mãi khoảnh khắc đó, khi ánh mắt chúng tôi chạm nhau lần đầu tiên, tim tôi như lỡ một nhịp. Từ những câu chuyện học hành đến những buổi hẹn hò đầu tiên cần đến 5 năm, kẻ Bắc người Nam, nhưng có lẽ định mệnh đã sắp đặt để chúng tôi gặp nhau và yêu nhau.",
    leftSrc: "/asset/pictures/wedding/ac22.png",
    rightSrc: "/asset/pictures/wedding/ac23.png",
  },
  {
    time: "23.1.2025",
    title: "Where Love Started",
    text:
      "Giữa cái se lạnh của ngày mùng 2 Tết, tôi tỏ tình với cô ấy sau buổi tô tượng đầu năm. Cô ấy bối rối, đắn đo, nhưng rồi cũng mỉm cười nhận lời. Từ đó, những đêm dài trò chuyện, những chuyến bay nối dài yêu thương, và những ngày hạnh phúc bên nhau đã trở thành một phần không thể thiếu của chúng tôi",
    leftSrc: "/asset/pictures/wedding/ac24.png",
    rightSrc: "/asset/pictures/wedding/ac25.png",
  },
  {
    time: "31.12.2024",
    title: "She Said Yes",
    text:
      "Cuối năm 2024, giữa không gian ngập tràn ánh nến và giai điệu dịu êm, tôi dành tặng cô ấy một điều bất ngờ. Khi quỳ xuống và ngỏ lời cầu hôn, cô ấy mỉm cười đầy hạnh phúc. Và rồi, bằng cái gật đầu nhẹ nhàng, chúng tôi bước sang một chương mới của tình yêu.",
    leftSrc: "/asset/pictures/love_story/lovestory32.jpg",
    rightSrc: "/asset/pictures/love_story/lovestory31.jpg",
  },
];

const OurLoveStory: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tickingRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  const getExtraScroll = () => {
    const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
    // ~10% viewport height, clamped to keep feel consistent across devices
    return Math.max(60, Math.min(140, Math.round(vh * 0.1)));
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const onScroll = useCallback(() => {
    if (!sectionRef.current || !trackRef.current || isMobile) return;
    const sectionTop = sectionRef.current.offsetTop;
    const scrollY = window.scrollY;
    const vw = window.innerWidth;
    const trackWidth = trackRef.current.scrollWidth;
    const distToScroll = Math.max(1, trackWidth - vw);
    const extra = getExtraScroll();
    const end = sectionTop + sectionRef.current.offsetHeight - window.innerHeight - extra;
    let progress = 0;
    if (distToScroll <= 1) {
      progress = 0; // nothing to scroll horizontally
    } else if (scrollY <= sectionTop + extra) progress = 0;
    else if (scrollY >= end) progress = 1;
    else progress = (scrollY - sectionTop - extra) / (end - sectionTop - extra);
    progress = Math.max(0, Math.min(1, progress));

    const translateX = -progress * distToScroll;
    trackRef.current.style.transform = `translate3d(${translateX}px, 0, 0)`;
  }, [isMobile]);

  const recalc = useCallback(() => {
    if (!sectionRef.current || !trackRef.current || isMobile) return;
    const trackWidth = trackRef.current.scrollWidth;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const extra = getExtraScroll();
    const base = Math.max(0, trackWidth - vw);
    const scrollLength = base + vh + extra * 2; // pin height + start/end padding
    sectionRef.current.style.height = `${scrollLength}px`;
    onScroll();
  }, [onScroll, isMobile]);

  useEffect(() => {
    if (isMobile) {
      // Reset height for mobile
      if (sectionRef.current) {
        sectionRef.current.style.height = 'auto';
      }
      return;
    }

    const ro = new ResizeObserver(() => recalc());
    if (sectionRef.current) ro.observe(sectionRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", recalc);

    // rAF-throttled scroll handler for smoother updates
    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      rafRef.current = requestAnimationFrame(() => {
        onScroll();
        tickingRef.current = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    recalc();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recalc);
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [recalc, onScroll, isMobile]);

  // Mobile/Tablet layout - Vertical scroll
  if (isMobile) {
    return (
      <section className="relative bg-white py-12 px-4 w-full mx-auto" id="love-story">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-felidae text-4xl md:text-5xl text-center text-black mb-12">
            Our Love Story
          </h2>

          <div className="space-y-16">
            {stories.map((s, idx) => (
              <div key={s.title} className="flex flex-col gap-6">
                {/* Story number and time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-6xl md:text-7xl font-felidae text-gray-200">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <p className="text-rose-400 tracking-wide text-sm md:text-base">{s.time}</p>
                </div>

                {/* Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={s.leftSrc}
                      alt={`${s.title} main`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={s.rightSrc}
                      alt={`${s.title} detail`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text content */}
                <div className="text-center md:text-left px-4">
                  <h4 className="font-felidae text-2xl md:text-3xl text-gray-900 mb-4">
                    {s.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {s.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop layout - Horizontal scroll
  return (
    <section ref={sectionRef} className="relative bg-white pt-[60px] pb-16 px-4 w-full mx-auto" id="love-story">
      {/* Sticky viewport while we scroll vertically */}
      <div className="sticky top-0 h-screen max-w-[1720px] mx-auto overflow-hidden">
        {/* Horizontal track that we translate as you scroll */}
        <div className="relative w-full h-full flex items-center overflow-visible"
        >
          <div
            className="flex w-full will-change-transform"
            ref={trackRef}
            style={{ transform: "translate3d(0,0,0)" }}
          >
            {stories.map((s, idx) => (
              <div
                key={s.title}
                className="flex-none w-screen flex"
              >
                {/* Left: Large portrait image */}
                <div className="relative h-[800px] w-[677px] shrink-0">
                  <Image
                    src={s.leftSrc}
                    alt={`${s.title} main`}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Right: Heading line + number, then small image + text */}
                <div className="flex flex-col justify-end pl-[60px] flex-1">
                  {/* Heading row */}
                  <div className="flex items-center mb-[70px] justify-between relative max-w-[772px] before:absolute before:content-[''] before:left-[62%] before:top-1/2 before:w-[303px] before:h-[2px] before:bg-[#B59E9C] before:transform before:-translate-x-1/2 before:-translate-y-1/2">
                    <h3 className="font-felidae text-5xl text-black leading-20">Our Love Story</h3>
                    <div className="text-[150px] font-felidae text-black leading-20">{String(idx + 1).padStart(2, '0')}</div>
                  </div>

                  {/* Content row */}
                  <div className="flex items-end">
                    {/* Small image */}
                    <div className="relative w-[310px] h-[380px] overflow-hidden shadow-md shrink-0">
                      <Image
                        src={s.rightSrc}
                        alt={`${s.title} detail`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Text block */}
                    <div className="w-[565px] text-center pl-20 shrink-0">
                      <p className="text-rose-400 tracking-wide">{s.time}</p>
                      <h4 className="mt-3 font-felidae text-3xl text-gray-900">{s.title}</h4>
                      <p className="mt-5 text-gray-600 leading-relaxed max-w-[520px]">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLoveStory;
