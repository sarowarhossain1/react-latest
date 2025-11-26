import React from "react";
import SHUNNOIT from "../../assets/shunnoit8.png";
import SHUNNOITE from "../../assets/itlogo.svg";
import Inventory from "./Inventory";


const Google = () => {
  return (
    <div>
      <div>
        <div className="bg-[#E44679]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mt-50 mx-30 ">
              <div className="flex flex-col gap-3 ">
                <span className="text-4xl font-bold text-gray-800">আপনার কাজকে সহজ করতে</span>
                <span className="text-4xl  font-bold text-gray-800">হিসাবনিকাশ সফটওয়্যার কে নিয়ে এলো</span>
                <span className="text-4xl  font-bold text-gray-800">মোবাইল অ্যাপে!</span>
              </div>
              {/* <div className="flex mt-6 m-2 bg-black w-48 h-15 rounded-xl border-2 border-text-[#44C0ED]">
                <div className="mt-3 ">
                   <FaGooglePlay  className="text-[#44C0ED] text-3xl mx-2"/>
                </div>
                <div className="mt-1">
                    <p className="text-white text-sm font-medium">GET IT ON</p> 
                    <h3 className="text-white text-xl font-medium">GOOGLE PLAY</h3>
                </div>
              </div> */}
              <div className="mt-3">
                <img src={SHUNNOITE} alt="" className="w-40"/>
              </div>
            </div>
            <div className="mt-2">
              <img src={SHUNNOIT} alt="" className="w-[650px] me-18 transition transform duration-300 hover:scale-105"/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Inventory/>
      </div>
    </div>
  );
};

export default Google;
