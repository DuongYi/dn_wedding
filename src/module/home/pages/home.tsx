
import React from "react";
import Hero from "../components/hero";
import Header from "@/components/header";
import HomeContent from "../components/home_content";
import BodyTop from "../components/body_top";
import Introduce from "../components/introduce";
import LoveStory from "../components/love_story";
import WeddingPlan from "../components/wedding_plan";


const HomePage: React.FC = () => {
  return (
    <div className="w-full relative bg-white">
      <Header alwaysShow={true} />
      <Hero />
      <HomeContent>
        <BodyTop />
        <Introduce />
        <LoveStory />
        <WeddingPlan />
      </HomeContent>
    </div>
  );
};

export default HomePage;
