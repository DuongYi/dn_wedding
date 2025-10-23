
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";

interface HeaderProps {
  alwaysShow?: boolean; // true = luôn hiện header, bỏ qua logic scroll
}

const Header: React.FC<HeaderProps> = ({ alwaysShow = false }) => {
  const [navbar, setNavbar] = useState(false);
  const [header, setHeader] = useState(alwaysShow); // Nếu alwaysShow = true thì hiện ngay
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('top'); // Track section hiện tại

  const toggleMenu = () => {
    setNavbar(!navbar);
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setNavbar(false); // Close mobile menu immediately

    // Special case: scroll to top
    if (sectionId === 'top') {
      const startY = window.scrollY;
      const duration = 1500;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const ease = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startY * (1 - ease));

        if (progress < 1) {
          requestAnimationFrame(animation);
        } else {
          window.scrollTo(0, 0);
        }
      };

      requestAnimationFrame(animation);
      return;
    }

    const element = document.getElementById(sectionId);
    if (!element) return;

    const targetY = element.getBoundingClientRect().top + window.scrollY - 100; // Offset 100px for header
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 1500; // 1.5 giây
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function - ease-in-out cubic cho smooth
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const newY = startY + distance * ease;
      window.scrollTo(0, newY);

      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        // Đảm bảo đến đúng vị trí cuối cùng
        window.scrollTo(0, targetY);
      }
    };

    requestAnimationFrame(animation);
  };

  const scrollHeader = useCallback(() => {
    // Nếu alwaysShow = true thì bỏ qua logic scroll
    if (alwaysShow) {
      setHeader(true);
      return;
    }

    const currentScrollY = window.scrollY;

    if (currentScrollY < 500) {
      // Chưa đạt 500px, luôn ẩn header
      setHeader(false);
    } else if (currentScrollY < lastScrollY) {
      // Scroll ≥ 500px và scroll lên → hiện header
      setHeader(true);
    } else if (currentScrollY > lastScrollY) {
      // Scroll ≥ 500px và scroll xuống → ẩn header
      setHeader(false);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY, alwaysShow]);

  useEffect(() => {
    // Nếu alwaysShow = true, set header = true ngay
    if (alwaysShow) {
      setHeader(true);
    }

    window.addEventListener('scroll', scrollHeader);

    // Detect active section based on scroll position
    const handleScrollSpy = () => {
      const sections = ['introduce', 'love-story', 'wedding-plan', 'album'];
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      // Check if at top
      if (window.scrollY < 300) {
        setActiveSection('top');
        return;
      }

      // Check each section
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy(); // Initial check

    return () => {
      window.removeEventListener('scroll', scrollHeader);
      window.removeEventListener('scroll', handleScrollSpy);
    }
  }, [scrollHeader, alwaysShow]);

  return (
    <div className="relative">
      <nav className={`w-full ${header ? `bg-white ${!alwaysShow ? 'shadow-md drop-shadow-sm' : ''}` : 'bg-transparent'} ${alwaysShow ? '' : 'fixed z-50 left-0 right-0 transition-all duration-450'} ${header ? 'top-0' : '-top-24'}`}>
        <div className="">
          <div className="container max-w-[1730px] mx-auto flex justify-between items-center py-2 max-md:justify-between">
            {/* LOGO */}
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/asset/pictures/logo/dnlogo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="scale-75 md:scale-100 transition-transform duration-300 ml-2 md:lg-0"
                />
              </div>
            </Link>
            <nav className="absolute left-1/2 transform -translate-x-1/2 max-md:hidden">
              <ul className="flex">
                <li>
                  <a
                    href="#top"
                    onClick={(e) => scrollToSection(e, 'top')}
                    className={`text-black hover:text-pink-500 relative w-fit font-bold text-xl ml-6 after:content-[''] after:bg-pink-500 after:absolute after:h-[2px] after:mt-2 after:w-full after:top-full after:left-0 after:transition after:duration-300 after:origin-center font-roboto cursor-pointer transition-colors duration-300 ${activeSection === 'top' ? 'after:opacity-100 after:scale-x-100' : 'after:opacity-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100'}`}
                  >
                    Wedding
                  </a>
                </li>
                <li>
                  <a
                    href="#introduce"
                    onClick={(e) => scrollToSection(e, 'introduce')}
                    className={`text-black hover:text-pink-500 relative w-fit font-bold text-xl ml-6 after:content-[''] after:bg-pink-500 after:absolute after:h-[2px] after:mt-2 after:w-full after:top-full after:left-0 after:transition after:duration-300 after:origin-center font-roboto cursor-pointer transition-colors duration-300 ${activeSection === 'introduce' ? 'after:opacity-100 after:scale-x-100' : 'after:opacity-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100'}`}
                  >
                    Cặp đôi
                  </a>
                </li>
                <li>
                  <a
                    href="#love-story"
                    onClick={(e) => scrollToSection(e, 'love-story')}
                    className={`text-black hover:text-pink-500 relative w-fit font-bold text-xl ml-6 after:content-[''] after:bg-pink-500 after:absolute after:h-[2px] after:mt-2 after:w-full after:top-full after:left-0 after:transition after:duration-300 after:origin-center font-roboto cursor-pointer transition-colors duration-300 ${activeSection === 'love-story' ? 'after:opacity-100 after:scale-x-100' : 'after:opacity-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100'}`}
                  >
                    Chuyện chúng mình
                  </a>
                </li>
                <li>
                  <a
                    href="#wedding-plan"
                    onClick={(e) => scrollToSection(e, 'wedding-plan')}
                    className={`text-black hover:text-pink-500 relative w-fit font-bold text-xl ml-6 after:content-[''] after:bg-pink-500 after:absolute after:h-[2px] after:mt-2 after:w-full after:top-full after:left-0 after:transition after:duration-300 after:origin-center font-roboto cursor-pointer transition-colors duration-300 ${activeSection === 'wedding-plan' ? 'after:opacity-100 after:scale-x-100' : 'after:opacity-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100'}`}
                  >
                    Lịch trình
                  </a>
                </li>
                <li>
                  <a
                    href="#album"
                    onClick={(e) => scrollToSection(e, 'album')}
                    className={`text-black hover:text-pink-500 relative w-fit font-bold text-xl ml-6 after:content-[''] after:bg-pink-500 after:absolute after:h-[2px] after:mt-2 after:w-full after:top-full after:left-0 after:transition after:duration-300 after:origin-center font-roboto cursor-pointer transition-colors duration-300 ${activeSection === 'album' ? 'after:opacity-100 after:scale-x-100' : 'after:opacity-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100'}`}
                  >
                    Album
                  </a>
                </li>
                <li>
                  <Link href="/" className="text-black hover:text-pink-500 relative w-fit font-bold text-xl ml-6 after:content-[''] after:bg-pink-500 after:opacity-0 after:absolute after:h-[2px] after:mt-2 after:w-full after:top-full after:left-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100 after:transition after:duration-300 after:origin-center font-roboto transition-colors duration-300">
                    Thiệp cưới
                  </Link>
                </li>
              </ul>
            </nav>

            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden mx-4">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={toggleMenu}
              >
                {navbar ? (
                  <div>
                    <span className="sr-only">Close main menu</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                ) : (
                  <div>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`absolute left-0 right-0 top-full z-30 bg-white pb-3 md:pb-0 md:mt-0 xl:hidden ${navbar ? 'xl:p-0 block' : 'hidden'
            }`}
        >
          <ul className="h-screen md:h-auto items-center justify-center md:flex w-full">
            <li className="text-base font-semibold text-gray-800 py-4 px-5 text-start border-b border-gray-200 hover:bg-teal-300 hover:text-white md:hover:bg-transparent">
              <a href="#top" onClick={(e) => scrollToSection(e, 'top')} className="cursor-pointer">
                Wedding
              </a>
            </li>
            <li className="text-base font-semibold text-gray-800 py-4 px-5 text-start border-b border-gray-200 hover:bg-teal-300 hover:text-white md:hover:bg-transparent">
              <a href="#introduce" onClick={(e) => scrollToSection(e, 'introduce')} className="cursor-pointer">
                Cặp đôi
              </a>
            </li>
            <li className="text-base font-semibold text-gray-800 py-4 px-5 text-start border-b border-gray-200 hover:bg-teal-300 hover:text-white md:hover:bg-transparent">
              <a href="#love-story" onClick={(e) => scrollToSection(e, 'love-story')} className="cursor-pointer">
                Chuyện chúng mình
              </a>
            </li>
            <li className="text-base font-semibold text-gray-800 py-4 px-5 text-start border-b border-gray-200 hover:bg-teal-300 hover:text-white md:hover:bg-transparent">
              <a href="#wedding-plan" onClick={(e) => scrollToSection(e, 'wedding-plan')} className="cursor-pointer">
                Lịch trình
              </a>
            </li>
            <li className="text-base font-semibold text-gray-800 py-4 px-5 text-start border-b border-gray-200 hover:bg-teal-300 hover:text-white md:hover:bg-transparent">
              <a href="#album" onClick={(e) => scrollToSection(e, 'album')} className="cursor-pointer">
                Album
              </a>
            </li>
            <li className="text-base font-semibold text-gray-800 py-4 px-5 text-start border-b border-gray-200 hover:bg-teal-300 hover:text-white md:hover:bg-transparent">
              <Link href="#about" onClick={() => setNavbar(!navbar)}>
                Thiệp cưới
              </Link>
            </li>
          </ul>
          <div className="absolute bottom-36 left-0 right-0">
            <p className='text-gray-500 text-center'>Đức Dương & Kim Ngân © 2025</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
