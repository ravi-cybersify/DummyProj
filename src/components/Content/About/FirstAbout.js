import React from "react";
import CommonComp from "../../lib/CommonComp";


const FirstAbout = () => {
  return (
   
    <CommonComp
    name="Our Story" 
    text="Cybersecurity is a major endeavor in the IT industry. There are a
            number of professional certifications given for cybersecurity
            training and expertise.[1] Although billions of dollars are spent
            annually on cybersecurity, no computer or network is immune from
            attacks or can be considered completely secure. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Beatae maxime debitis
            voluptatibus."
    para="  The single most expensive loss due to a cybersecurity exploit was
            the ILOVEYOU or Love Bug email worm of 2000, which cost an estimated
            10 billion dollars Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Esse commodi quaerat pariatur omnis culpa enim
            sint quia accusamus maxime placeat!"
     compClassName="flex justify-evenly items-center mx-12 mt-28 mb-10"
    imageSrc="./images/coluge hand.jpg"
    />
  );
};

export default FirstAbout;
