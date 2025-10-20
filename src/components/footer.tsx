/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-20">
      <div className="container max-w-screen-2xl flex flex-col mx-auto px-5">
        <div className='grid grid-cols-3 max-md:grid-cols-2 gap-4 max-md:gap-8 items-center'>
          <div className='col-span-2'>
            <div className='flex flex-col'>
              <div className="flex flex-wrap items-center">
                <img src="asset/pictures/logo/logo_white.png" alt="Logo" className="w-20 h-20 mr-2" />
                <span className="text-white text-lg font-bold">Force G. Studios</span>
              </div>
              <p className="text-white text-xl sm:text-3xl lg:text-5xl font-bold tracking-wider mt-6">Force Game Studio.</p>
              <p className="text-white text-xl sm:text-3xl lg:text-5xl font-bold tracking-wider mt-3">Lovely developers</p>
            </div>
          </div>
          <div className='col-span-1 max-md:col-span-2'>
            <div className='container'>
              <p className='text-gray-100 text-sm sm:text-base lg:text-lg'>
                Với niềm đam mê, sự sáng tạo và một chút ngọt ngào, chúng tôi tận tâm tạo ra những trải nghiệm chơi game khó quên</p>
              <div className='mt-6'>
                <button type="button" className="text-[#162c48] text-lg md:text-xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full px-9 py-[14px] text-center shadow-lg shadow-yellow-500/30">Tìm hiểu</button>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-12 max-lg:grid-cols-5 gap-20 max-lg:gap-10 pt-14 pb-14 items-start'>
          <div className='col-span-5'>
            <p className='text-white text-lg font-bold'>Best Games Developers!</p>
            <p className='text-gray-300 mt-4 text-sm md:text-base'>Từ những xưởng game độc lập đến các hãng game lớn, những nhà phát triển trò chơi này đã chinh phục trí tưởng tượng của chúng ta và đưa nghệ thuật game lên một tầm cao mới</p>
          </div>
          <div className='col-span-5 max-lg:col-span-3 max-sm:col-span-5 px-10 max-lg:px-0'>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-6'>
                <p className='text-gray-300'>Khám phá</p>
                <p className='text-gray-300'>Games</p>
                <p className='text-gray-300'>Studio</p>
              </div>
              <div className='flex flex-col gap-6'>
                <p className='text-gray-300'>Nghề nghiệp</p>
                <p className='text-gray-300'>Nhà đầu tư</p>
                <p className='text-gray-300'>Vị trí</p>
              </div>
              <div className='flex flex-col gap-6'>
                <p className='text-gray-300'>Văn phòng</p>
                <p className='text-gray-300'>Đội ngũ</p>
                <p className='text-gray-300'>Môi trường</p>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='flex flex-col gap-6'>
              <p className='text-gray-300'>
                Social Media
              </p>
              <div className='flex gap-3 items-start'>
                <div className='flex flex-col gap-3'>
                  <a href='#' className='bg-white rounded-full'>
                    <img src='asset/pictures/icon/facebook.svg' alt='Facebook' className='w-6 h-6' />
                  </a>
                  <a href='#' className='bg-white rounded-full'>
                    <img src='asset/pictures/icon/instagram.svg' alt='Twitter' className='w-6 h-6' />
                  </a>
                </div>
                <div className='flex flex-col gap-3'>
                  <a href='#' className='bg-white rounded-full'>
                    <img src='asset/pictures/icon/linkedin.svg' alt='Instagram' className='w-6 h-6' />
                  </a>
                  <a href='#' className='bg-white rounded-full'>
                    <img src='asset/pictures/icon/youtube.svg' alt='Instagram' className='w-6 h-6' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4 border-t-[1px] border-gray-500 pt-4'>
          <p className='text-white'>All Right Reserved, Force G. Studio © 2024</p>
          <div className='flex gap-14 justify-end max-sm:justify-start'>
            <p className='text-gray-300'>Cookies</p>
            <p className='text-gray-300'>Quyền riêng tư</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;