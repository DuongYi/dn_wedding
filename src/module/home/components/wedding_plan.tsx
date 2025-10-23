import Image from "next/image";
import React from "react";


const WeddingPlan: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full bg-white" id="wedding-plan">
      {/* Left: Image - Hidden on mobile */}
      <div className="hidden lg:block flex-1 relative w-full lg:w-1/2">
        <div className="bg-[url('/asset/pictures/wedding/ac3.png')] h-full min-h-[600px] bg-cover bg-no-repeat bg-center object-fill" ></div>
      </div>
      {/* Right: Plan Content */}
      <div className="relative flex-1 flex items-center justify-center bg-[#fafafa] px-4 md:px-8 lg:px-16">
        <div className="w-full py-12 md:py-16 lg:py-20 rounded-[100px">
          <div className="mb-8 md:mb-10">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-fz-manstein text-gray-800 mb-4 md:mb-6">Đức Dương</h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-fz-manstein text-gray-800 mb-4 md:mb-6 lg:ml-28">Kim Ngân</h1>
            </div>
          </div>
          {/* Lịch trình */}
          <div className="relative px-4 md:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl text-gray-800 mb-8 md:mb-12 text-center">Lịch Trình</h2>

            {/* Timeline vertical line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 top-20 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

            <div className="space-y-8 md:space-y-12">
              {/* Timeline Item 1 - Left */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                <div className="md:text-right md:pr-8 order-2 md:order-1">
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Lễ Ăn Hỏi</h3>
                    <p className="text-xs md:text-sm text-gray-500 mb-3">8 giờ 45 - 08.11.2025</p>
                    <p className="text-gray-600 text-sm md:text-md leading-relaxed">
                      Một buổi sáng đầy yêu thương, hai gia đình gặp gỡ, trao nhau lễ vật và lời chúc phúc. Khoảnh khắc ấy đánh dấu khởi đầu cho câu chuyện hôn nhân của chúng tôi.
                    </p>
                  </div>
                </div>
                {/* Ảnh */}
                <div className="md:pl-8 flex items-center justify-center order-1 md:order-2">
                  <div className="relative w-40 h-40 md:w-50 md:h-50">
                    <Image
                      src="/asset/pictures/timeline/timeline1.png"
                      alt="Lễ Ăn Hỏi"
                      fill
                      sizes="(max-width: 768px) 160px, 200px"
                      className="absolute inset-0 object-contain"
                    />
                  </div>
                </div>
                {/* Icon */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-4 border-red-400 rounded-full items-center justify-center z-10">
                  <span className="text-red-500 text-xl">♥</span>
                </div>
              </div>

              {/* Timeline Item 2 - Right */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                {/* Ảnh bên trái */}
                <div className="md:pr-8 flex items-center justify-center md:justify-end order-1">
                  <div className="relative w-40 h-40 md:w-50 md:h-50">
                    <Image
                      src="/asset/pictures/timeline/timeline2.png"
                      alt="Lễ Vu Quy"
                      fill
                      sizes="(max-width: 768px) 160px, 200px"
                      className="absolute inset-0 object-contain"
                    />
                  </div>
                </div>
                <div className="md:pl-8 order-2">
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Lễ Vu Quy</h3>
                    <p className="text-xs md:text-sm text-gray-500 mb-3">11 giờ - 09.11.2025</p>
                    <p className="text-gray-600 text-sm md:text-md leading-relaxed">
                      Ngày em khoác lên mình tà áo cưới, mang theo yêu thương và lời dặn dò của cha mẹ.
                      Từ hôm nay, em bắt đầu hành trình mới – nơi có anh, và một mái nhà mang tên &ldquo;chúng ta&rdquo;.
                    </p>
                  </div>
                </div>
                {/* Icon */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-4 border-red-400 rounded-full items-center justify-center z-10">
                  <span className="text-red-500 text-xl">♥</span>
                </div>
              </div>

              {/* Timeline Item 3 - Left */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                <div className="md:text-right md:pr-8 order-2 md:order-1">
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Lễ Thành Hôn</h3>
                    <p className="text-xs md:text-sm text-gray-500 mb-3">12 giờ 14 - 09.11.2025</p>
                    <p className="text-gray-600 text-sm md:text-md leading-relaxed">
                      Dưới ánh sáng của tình yêu và những lời chúc phúc, chúng tôi chính thức gọi nhau bằng hai tiếng &ldquo;vợ chồng&rdquo; – khởi đầu cho một hành trình dài đầy thương yêu và sẻ chia.
                    </p>
                  </div>
                </div>
                {/* Ảnh bên phải */}
                <div className="md:pl-8 flex items-center justify-center order-1 md:order-2">
                  <div className="relative w-40 h-40 md:w-50 md:h-50">
                    <Image
                      src="/asset/pictures/timeline/timeline3.png"
                      alt="Lễ Thành Hôn"
                      fill
                      sizes="(max-width: 768px) 160px, 200px"
                      className="absolute inset-0 object-contain"
                    />
                  </div>
                </div>
                {/* Icon */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-4 border-red-400 rounded-full items-center justify-center z-10">
                  <span className="text-red-500 text-xl">♥</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingPlan;
