// src/pages/HomePage.tsx

import React from "react";
import HeroSection from "../Components/HomePageComponents/HeroSection";
import HomeSecondSection from "../Components/HomePageComponents/HomeSecondSection";
import HomeThirdSection from "../Components/HomePageComponents/HomeThirdSection";
import ProjectsSlider from "../Components/HomePageComponents/ProjectsSlider";

const HomePage: React.FC = () => {
  return (
    <>
     
      <HeroSection />
      <HomeSecondSection />
      <HomeThirdSection />
      <ProjectsSlider/>
    </>
  );
};

export default HomePage;
