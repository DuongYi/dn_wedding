import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[833px] max-w-[1730px] mx-auto">
      <div className="">
        <h2 className="font-medium mb-0 ml-2 perspective-[400px] font-felidae leading-[400px] relative z-10" aria-label="FOREVER">
          <div aria-hidden="false" className="relative block text-start text-black translate-x-0 translate-y-0 translate-z-0 rotate-0 scale-100 origin-[860px_200px] opacity-100 font-felidae text-[290px]">FOREVER</div>
        </h2>
        <h2 className="perspective-[400px] absolute z-10 right-[380px] bottom-0 font-medium mb-0 ml-2 leading-[400px]" aria-label="AFTER">
          <div aria-hidden="false" className="relative block text-start text-black  translate-x-0 translate-y-0 translate-z-0 rotate-0 scale-100 origin-[406.875px_200px] opacity-100 font-felidae text-[290px]">
            AFTER
          </div>
        </h2>

        {/* Circular Badge - YOU ARE INVITED */}
        <div className="absolute left-[463px] top-[333px]">
          <div className="relative w-[140px] h-[140px] border-[1px] border-gray-400 border-solid p-[5px] rounded-full text-[11px]">
            <div className="animate-rotate">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[11px] fill-amber-900 font-light tracking-[3px] uppercase ">
                  <textPath href="#circlePath" startOffset="0%">
                    YOU ARE INVITED
                  </textPath>
                </text>
              </svg>
              {/* Decorative flower */}
              <div className="absolute top-[52px] left-[12px] w-[70%] h-[70%] align-middle">
                <Image
                  src="/asset/pictures/icon/flower.png"
                  alt="Flower"
                  fill
                  className=" rotate-[-46deg]"
                />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 bg-pink-300/20 rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            </div>
          </div>

        </div>


        {/* Wedding Info */}
        <div className="absolute left-0 bottom-[180px] z-10">
          <p className="text-gray-600 text-[22px] md:text-base font-light">
            Trân trọng kính mời đến dự tiệc cưới của chúng mình{" "}
            <span className="font-semibold text-black text-[24px]">09.11.2025</span>
          </p>
          <p className="text-gray-600 text-[20px] md:text-base font-light max-w-md mt-2">
            Cùng nhau bước vào chương mới, nơi tình yêu và hạnh phúc bắt đầu.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="absolute right-[-50px] top-0 w-1/2 h-full z-0">
        <div className="relative w-full h-full">
          <Image
            src="/asset/pictures/home/wedding-couple2.jpg"
            alt="Wedding Couple"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
