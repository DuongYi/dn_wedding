/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-rose-100 overflow-hidden">
      {/* Blurred background image */}
      <div aria-hidden className="absolute inset-0">
        <img
          src="/asset/pictures/home/wedding-couple.jpg"
          alt=""
          className="w-full h-full object-cover blur-xs object-[80%_20%]"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-8">
        {/* Brand + Names */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text:md md:text-lg tracking-widest text-rose-500 mb-3">Sự hiện diện của các bạn là món quà quý giá nhất đối với chúng tôi!</span>
          </div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <h3 className="text-4xl md:text-5xl text-gray-800 font-fz-manstein">
              Đức Dương
            </h3>
            <span className="text-4xl md:text-5xl text-gray-800 font-fz-manstein">
              &
            </span>
            <h3 className="text-4xl md:text-5xl text-gray-800 font-fz-manstein">
              Kim Ngân
            </h3>
          </div>
        </div>

        {/* Event quick info */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-[14px] uppercase tracking-wide text-rose-500">Nhà Trai</p>
            <p className="mt-2 text-gray-800">09.11.2025 • 12:15</p>
            <p className="mt-2 text-gray-700">Thôn Luật Nội Tây, xã Quang Lịch, tỉnh Hưng Yên</p>
          </div>
          <div>
            <p className="text-[14px] uppercase tracking-wide text-rose-500">***</p>
          </div>
          <div>
            <p className="text-[14px] uppercase tracking-wide text-rose-500">Nhà Gái</p>
            <p className="mt-2 text-gray-800">09.11.2025 • 11:00</p>
            <p className="mt-2 text-gray-700">Thôn Cốc, xã Đông Tiên Hưng, tỉnh Hưng Yên</p>
          </div>
        </div>

        {/* Social */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition">
            <img src="/asset/pictures/icon/facebook.svg" alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition">
            <img src="/asset/pictures/icon/instagram.svg" alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="#" aria-label="YouTube" className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition">
            <img src="/asset/pictures/icon/youtube.svg" alt="YouTube" className="w-8 h-8" />
          </a>
        </div>

        {/* Bottom line */}
        <div className="mt-10 pt-6 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2025 Đức Dương &amp; Kim Ngân. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="/invitation-management" className="hover:text-pink-500 transition-colors">Tạo Thiệp</a>
            <a href="#" className="hover:text-pink-500 transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-pink-500 transition-colors">Quyền riêng tư</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;