import React from "react";
// import FirstSection from "../../Home/FirstSection";
import FirstSection from "../Content/Home/FirstSection"
import SecondSection from "../Content/Home/SecondSection";
import ThirdSection from "../Content/Home/ThirdSection";
import FourthSection from "../Content/Home/FourthSection";
import FifthSection from "../Content/Home/FifthSection";
import Sixth from "../Content/Home/Sixth";
import SeventhSection from "../Content/Home/SeventhSection";


const Home = () => {
  return (
   <div className="w-full mx-auto ">
   <FirstSection />
   <SecondSection />
   <ThirdSection />
   <FourthSection />
   <FifthSection />
   <Sixth />
   <SeventhSection />
   </div>
  );
};

export default Home;
