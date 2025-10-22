import Image from "next/image";
import React from "react";


const WeddingPlan: React.FC = () => {
  return (
    <section className="flex w-full bg-white">
      {/* Left: Image */}
      <div className="flex-1 relative w-1/2">
        <div className="bg-[url('/asset/pictures/wedding/ac3.png')] h-full bg-cover bg-no-repeat bg-center object-fill" ></div>
      </div>
      {/* Right: Plan Content */}
      <div className="relative flex-1 flex items-center justify-center bg-[#fafafa] px-16">
        <div className="w-full py-20 rounded-[100px">
          <div className="mb-10">
            <div className="flex flex-col transform -translate-x-7 items-center">
              <h1 className="text-6xl font-fz-manstein text-gray-800 mb-6">Đức Dương</h1>
              <h1 className="text-6xl font-fz-manstein text-gray-800 mb-6 ml-28">Kim Ngân</h1>
            </div>
          </div>
          {/* Lịch trình */}
          <div className="relative px-12">
            <h2 className="text-4xl text-gray-800 mb-12 text-center">Lịch Trình</h2>

            {/* Timeline vertical line */}
            <div className="absolute left-1/2 top-20 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {/* Timeline Item 1 - Left */}
              <div className="relative grid grid-cols-2 gap-8 items-center">
                <div className="text-right pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Lễ Ăn Hỏi</h3>
                    <p className="text-sm text-gray-500 mb-3">8 giờ 45 - 08.11.2025</p>
                    <p className="text-gray-600 text-md leading-relaxed">
                      Một buổi sáng đầy yêu thương, hai gia đình gặp gỡ, trao nhau lễ vật và lời chúc phúc. Khoảnh khắc ấy đánh dấu khởi đầu cho câu chuyện hôn nhân của chúng tôi.
                    </p>
                  </div>
                </div>
                {/* Ảnh */}
                <div className="pl-8 flex items-center">
                  <div className="relative w-50 h-50">
                    <Image
                      src="/asset/pictures/timeline/timeline1.png"
                      alt="Lễ Ăn Hỏi"
                      fill
                      className="absolute inset-0 object-contain"
                    />
                  </div>
                </div>
                {/* Icon */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-4 border-red-400 rounded-full flex items-center justify-center z-10">
                  <span className="text-red-500 text-xl">♥</span>
                </div>
              </div>

              {/* Timeline Item 2 - Right */}
              <div className="relative grid grid-cols-2 gap-8 items-center">
                {/* Ảnh bên trái */}
                <div className="pr-8 flex items-center justify-end">
                  <div className="relative w-50 h-50">
                    <Image
                      src="/asset/pictures/timeline/timeline2.png"
                      alt="Lễ Vu Quy"
                      fill
                      className="absolute inset-0 object-contain"
                    />
                  </div>
                </div>
                <div className="pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Lễ Vu Quy</h3>
                    <p className="text-sm text-gray-500 mb-3">11 giờ - 09.11.2025</p>
                    <p className="text-gray-600 text-md leading-relaxed">
                      Ngày em khoác lên mình tà áo cưới, mang theo yêu thương và lời dặn dò của cha mẹ.
                      Từ hôm nay, em bắt đầu hành trình mới – nơi có anh, và một mái nhà mang tên &ldquo;chúng ta&rdquo;.
                    </p>
                  </div>
                </div>
                {/* Icon */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-4 border-red-400 rounded-full flex items-center justify-center z-10">
                  <span className="text-red-500 text-xl">♥</span>
                </div>
              </div>

              {/* Timeline Item 3 - Left */}
              <div className="relative grid grid-cols-2 gap-8 items-center">
                <div className="text-right pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Lễ Thành Hôn</h3>
                    <p className="text-sm text-gray-500 mb-3">12 giờ 14 - 09.11.2025</p>
                    <p className="text-gray-600 text-md leading-relaxed">
                      Dưới ánh sáng của tình yêu và những lời chúc phúc, chúng tôi chính thức gọi nhau bằng hai tiếng &ldquo;vợ chồng&rdquo; – khởi đầu cho một hành trình dài đầy thương yêu và sẻ chia.
                    </p>
                  </div>
                </div>
                {/* Ảnh bên phải */}
                <div className="pl-8 flex items-center">
                  <div className="relative w-50 h-50">
                    <Image
                      src="/asset/pictures/timeline/timeline3.png"
                      alt="Lễ Thành Hôn"
                      fill
                      className="absolute inset-0 object-contain"
                    />
                  </div>
                </div>
                {/* Icon */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-4 border-red-400 rounded-full flex items-center justify-center z-10">
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
