import React from "react";

const SecondService = () => {
  return (
    <div className="flex justify-evenly items-center mx-12 my-28">
      <div className="rounded">
        <img
          src="./images/secure365.webp"
          alt="security"
          srcSet=""
          className="rounded-tr-3xl rounded-bl-3xl w-[500px] h-80"
        />
      </div>
      <div className="w-[570px] text-left flex flex-col gap-7">
        <p className="text-4xl font-semibold">
          Why Choose <span className="font-bold">Secure365?</span>
        </p>
        <p>
          Cybersecurity is a major endeavor in the IT industry. There are a
          number of professional certifications given for cybersecurity training
          and expertise.[1] Although billions of dollars are spent annually on
          cybersecurity, no computer or network is immune from attacks or can be
          considered completely secure.
        </p>
      </div>
    </div>
  );
};

export default SecondService;
