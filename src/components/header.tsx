
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

  const toggleMenu = () => {
    setNavbar(!navbar);
  }

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
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    }
  }, [scrollHeader, alwaysShow]);

  return (
    <div className="relative">
      <nav className={`w-full ${header ? `bg-white ${!alwaysShow ? 'shadow-md drop-shadow-sm' : ''}` : 'bg-transparent'} ${alwaysShow ? '' : 'fixed left-0 right-0 z-10 transition-all duration-450'} ${header ? 'top-0' : '-top-24'}`}>
        <div className="">
          <div className="container max-w-[1730px] mx-auto flex justify-between items-center py-2 max-md:justify-between">
            {/* LOGO */}
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/asset/pictures/logo/dnlogo.png"
                  width={100}
                  height={100}
                  alt="logo"
                  className="focus:border-none active:border-none"
                />
              </div>
            </Link>
            <nav className="absolute left-1/2 transform -translate-x-1/2 max-md:hidden">
              <ul className="flex">
                <li>
                  <Link href="/" className="text-black relative w-fit font-bold text-base ml-6 after:content-[''] after:bg-red-500 after:opacity-0 after:absolute after:h-[2px] after:mt-2 after:w-full after:top-full after:left-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100 after:transition after:duration-300 after:origin-center">
                    Wedding
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-black relative w-fit font-bold text-base ml-6 after:content-[''] after:bg-red-500 after:opacity-0 after:absolute after:h-[2px] after:mt-2 after:w-full after:top-full after:left-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100 after:transition after:duration-300 after:origin-center">
                    Chuyện chúng mình
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-black relative w-fit font-bold text-base ml-6 after:content-[''] after:bg-red-500 after:opacity-0 after:absolute after:h-[2px] after:mt-2 after:w-full after:top-full after:left-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100 after:transition after:duration-300 after:origin-center">
                    Album
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-black relative w-fit font-bold text-base ml-6 after:content-[''] after:bg-red-500 after:opacity-0 after:absolute after:h-[2px] after:mt-2 after:w-full after:top-full after:left-0 after:scale-x-0 after:hover:scale-x-100 after:hover:opacity-100 after:transition after:duration-300 after:origin-center">
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
          className={`relative bg-white justify-self-center pb-3 md:pb-0 md:mt-0 md:hidden ${navbar ? 'md:p-0 block' : 'hidden'
            }`}
        >
          <ul className="h-screen md:h-auto items-center justify-center md:flex ">
            <li className="text-base font-semibold text-green-500 py-4 px-5 text-start border-b-[1px] border-gray-200 hover:bg-teal-300 hover:text-white md:hover:bg-transparent">
              <Link href="#about" onClick={() => setNavbar(!navbar)}>
                Wedding
              </Link>
            </li>
            <li className="text-base font-semibold text-green-500 py-4 px-5 text-start border-b-[1px] border-gray-200 hover:bg-teal-300 hover:text-white md:hover:bg-transparent">
              <Link href="#about" onClick={() => setNavbar(!navbar)}>
                Chuyện chúng mình
              </Link>
            </li>
            <li className="text-base font-semibold text-green-500 py-4 px-5 text-start border-b-[1px] border-gray-200 hover:bg-teal-300 hover:text-white md:hover:bg-transparent">
              <Link href="#about" onClick={() => setNavbar(!navbar)}>
                Album
              </Link>
            </li>
            <li className="text-base font-semibold text-green-500 py-4 px-5 text-start border-b-[1px] border-gray-200 hover:bg-teal-300 hover:text-white md:hover:bg-transparent">
              <Link href="#about" onClick={() => setNavbar(!navbar)}>
                Thiệp cưới
              </Link>
            </li>
          </ul>
          <div className="absolute bottom-36 left-0 right-0">
            <p className='text-gray-500 text-center'>Force G. Studio © 2024</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
