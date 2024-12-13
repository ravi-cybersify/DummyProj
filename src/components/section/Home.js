import React from "react";
import FirstSection from "../../Home/FirstSection";
import SecondSection from "../../Home/SecondSection";
import ThirdSection from "../../Home/ThirdSection";
import FourthSection from "../../Home/FourthSection";
import FifthSection from "../../Home/FifthSection";
import Sixth from "../../Home/Sixth";


const Home = () => {
  return (
   <div className="w-full mx-auto ">
   <FirstSection />
   <SecondSection />
   <ThirdSection />
   <FourthSection />
   <FifthSection />
   <Sixth />
   </div>
  );
};

export default Home;
