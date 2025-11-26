import { Check } from "lucide-react";
import React, { useState } from "react";
import SHUNNOIT from "../../assets/shunnoit9.png"
import Management from "./Management";


const Pricing = ({dark}) => {
const [isYearly, setIsYearly] = useState(false);
  return (
    <div>
      <div className={dark ? "dark font-inter" : "font-inter"}>
        <div className="bg-[#F2F0E9] p-10">
       <h2 className="text-xl font-inter font-semibold mx-55 mt-20 text-[#F94049] ">GET STARTED</h2>

      <div className="flex justify-between items-center mt-1">
        <h3 className={`text-2xl font-bold font-inter mx-55 ${dark ? "text-4xl font-bold font-serif mx-55 text-black" : "text-4xl font-bold font-serif mx-55 text-black" }`}>Simple pricing. No surprises.</h3>
        <div className="flex justify-center mt-10 me-55">
      <div className="flex items-center bg-[#F2F0E9] px-6 py-3   gap-6">
        <span
          onClick={() => setIsYearly(false)}
          className={`cursor-pointer font-bold font-inter text-2xl
            ${!isYearly ? "text-[#F94049]" : "text-black"}`}
        >
          Monthly
        </span>

        {/* Toggle Switch */}
        <div
          onClick={() => setIsYearly(!isYearly)}
          className="w-14 h-7 bg-[#F94049] rounded-full relative cursor-pointer transition transform"
        >
          <span
            className={`absolute top-0 w-6 h-6 bg-white rounded-full shadow transform transition-all
              ${isYearly ? "translate-x-6" : "translate-x-0"}`}
          ></span>
        </div>

        {/* Yearly */}
        <span
          onClick={() => setIsYearly(true)}
          className={`cursor-pointer font-bold font-inter text-2xl 
            ${isYearly ? "text-[#F94049]" : "text-black"}`}
        >
          Yearly
        </span>
      </div>
    </div>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-4 m-10 md:w-[1350px] bg-[#FFFFFF] mx-auto ${dark  ? "text-black " : "text-black"
      }`}>
        <div className="shadow-xl w-full h-full p-10 rounded-xl">
            <h3 className="text-center font-sans  text-xl font-semibold font-inter mb-5">STANDARD</h3>
            <p className="text-center text-2xl font-sans-sarif font-bold mb-3">$ 29</p>
            <p className="text-center text-xl font-sans-sarif  font-semibold">per organization / month 
              billed annually</p>
              <div className='mt-6'>
                  <button className='bg-[#FFE4DE] px-18 border border-[#D32C3E] py-3 text-sm rounded font-bold font-sans-sarif hover:bg-[#D32C3E] hover:text-white text-[#D32C3E] mb-8'>  Get Started</button>
                </div>
              <div className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 flex items-center justify-center text-[#D32C3E] rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 text-[18px] font-semibold font-sans-sarif">
                  500 orders / month
                  </p>
                </div>
              <div className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 flex items-center justify-center text-[#D32C3E] rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 text-[18px] font-semiboldv font-sans-sarif">
                  2 users
                  </p>
                </div>
              <div className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 flex items-center justify-center text-[#D32C3E] rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 text-[18px] font-semibold font-sans-sarif">
                  2 users
                  </p>
                </div>
        </div>
      <div className="shadow-xl w-full h-full p-10 rounded-xl">
            <h3 className="text-center font-inter  text-xl font-semibold mb-5">PROFESSIONAL</h3>
            <p className="text-center text-2xl font-mono font-bold mb-3">$ 79</p>
            <p className="text-center text-sm font-sans-sarif font-semibold">per organization / month 
              billed annually</p>
              <div className='mt-6'>
                  <button className='bg-[#FFE4DE] px-18 border border-[#D32C3E] py-3 text-sm rounded font-bold hover:bg-[#D32C3E] font-sans-sarif hover:text-white text-[#D32C3E] mb-8'>  Get Started</button>
                </div>
              <div className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 flex items-center justify-center text-[#D32C3E] rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 text-[18px] font-semibold font-sans-sarif">
                  500 orders / month
                  </p>
                </div>
              <div className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 flex items-center justify-center text-[#D32C3E] rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 text-[18px] font-semibold font-sans-sarif">
                  2 users
                  </p>
                </div>
              <div className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 flex items-center justify-center text-[#D32C3E] rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 text-[18px] font-semibold font-sans-sarif">
                  2 users
                  </p>
                </div>
        </div>
        <div className="relative shadow-xl w-full h-full p-10  bg-black">
          <div className="absolute -top-1 right-0 bg-yellow-300 font-semibold text-black text-sm px-4 py-2 rounded-b ">
    MOST POPULAR
  </div>
            <h3 className="text-center font-sans text-white font-sans-sarif text-xl font-semibold mb-5">PREMIUM</h3>
            <p className="text-center text-2xl font-mono font-bold mb-3 text-white ">$ 129</p>
            <p className="text-center text-xl font-sans-sarif  font-semibold text-white ">per organization / month 
              billed annually</p>
              <div className='mt-6'>
                  <button className='bg-[#FFE4DE] px-18 border border-[#D32C3E] py-3 text-sm rounded font-bold hover:bg-[#D32C3E] hover:text-white text-[#D32C3E] mb-8 font-sans-sarif'>  Get Started</button>
                </div>
              <div className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 flex items-center justify-center text-[#D32C3E] rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-white  text-[18px] font-semibold font-sans-sarif">
                  500 orders / month
                  </p>
                </div>
              <div className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 flex items-center justify-center text-[#D32C3E] rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-white  text-[18px] font-semibold font-sans-sarif">
                  2 users
                  </p>
                </div>
              <div className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 flex items-center justify-center text-[#D32C3E] rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-white  text-[18px] font-semibold font-sans-sarif">
                  2 users
                  </p>
                </div>
        </div>
       <div className="shadow-xl w-full h-full p-10 ">
            <h3 className="text-center font-sans  text-2xl font-semibold mb-5">ENTERPRISE</h3>
            <p className="text-center text-2xl font-mono font-bold mb-3">$ 249</p>
            <p className="text-center text-xl  font-semibold">per organization / month 
              billed annually</p>
              <div className='mt-6'>
                  <button className='bg-[#FFE4DE] px-18 border border-[#D32C3E] py-3 text-sm rounded font-bold hover:bg-[#D32C3E] hover:text-white text-[#D32C3E] mb-8 font-sans-sarif'>  Get Started</button>
                </div>
              <div className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 flex items-center justify-center text-[#D32C3E] rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 text-[18px] font-semibold font-sans-sarif">
                  500 orders / month
                  </p>
                </div>
              <div className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 flex items-center justify-center text-[#D32C3E] rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 text-[18px] font-semibold font-sans-sarif">
                  2 users
                  </p>
                </div>
              <div className="flex items-start gap-3 mb-3">
                  <span className="w-6 h-6 flex items-center justify-center text-[#D32C3E] rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 text-[18px] font-semibold font-sans-sarif">
                  2 users
                  </p>
                </div>
        </div>
      </div>

      {/*  */}

     <div className="grid grid-cols-1 md:grid-cols-4 m-10 md:w-[1350px] bg-[#FFFFFF] mx-auto items-stretch">
  <div className="w-full  h-full rounded bg-[#FFE4DE]">
    <img src={SHUNNOIT} alt="" className="" />
  </div>

  <div className={`w-full p-10 h-full rounded mt-10 ${dark ? "text-black" : "text-black"}`}>
    <h3 className="text-center text-xl font-sans-sarif font-semibold mb-5">FREE</h3>
    <p className="text-center text-4xl font-bold mb-3">$0</p>
    <p className="text-center text-xl font-bold">per organization / month</p>
  </div>
  <div className={`w-full p-10 h-full bg-white ${dark ? "text-black": "text-black"}`}>
    <div className="flex items-start gap-3 mt-15">
      <span className="w-6 h-6 flex items-center justify-center text-[#D32C3E] rounded-full">
        <Check size={14} />
      </span>
      <p className="text-black text-[18px] font-semibold">
        500 orders / month
      </p>
    </div>
    <div className="flex items-start gap-3 mb-3">
      <span className="w-6 h-6 flex items-center justify-center text-[#D32C3E] rounded-full">
        <Check size={14} />
      </span>
      <p className="text-black text-[18px] font-semibold">
        2 users
      </p>
    </div>

    <div className="flex items-start gap-3 mb-3">
      <span className="w-6 h-6 flex items-center justify-center text-[#D32C3E] rounded-full">
        <Check size={14} />
      </span>
      <p className="text-black text-[18px] font-semibold">
        2 users
      </p>
    </div>
  </div>

  {/* Card 4 */}
  <div className="w-full p-10 h-full">
    <div className="mt-25">
      <button className="bg-[#FFE4DE] px-18 border border-[#D32C3E] py-3 text-sm font-sans-sarif rounded font-bold 
      hover:bg-[#D32C3E] hover:text-white text-[#D32C3E] mb-8">
        Get Started
      </button>
    </div>
  </div>

</div>

    </div>
      </div>
      <div>
        <Management/>
      </div>
    </div>
  );
};

export default Pricing;
