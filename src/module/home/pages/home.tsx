
import React from "react";
import Hero from "../components/hero";
import Header from "@/components/header";
import HomeContent from "../components/home_content";


const HomePage: React.FC = () => {
  return (
    <div className="w-full relative bg-white">
      <Header alwaysShow={true} />
      <Hero />
      <HomeContent>
        <div className="h-[1000px]">
          {/* Nội dung trang chủ khác sẽ được thêm vào đây */}
        </div>
      </HomeContent>
    </div>
  );
};

export default HomePage;
