
import React from "react";
import Hero from "../components/hero";
import Header from "@/components/header";
import HomeContent from "../components/home_content";
import BodyTop from "../components/body_top";


const HomePage: React.FC = () => {
  return (
    <div className="w-full relative bg-white">
      <Header alwaysShow={true} />
      <Hero />
      <HomeContent>
        <BodyTop />
      </HomeContent>
    </div>
  );
};

export default HomePage;
