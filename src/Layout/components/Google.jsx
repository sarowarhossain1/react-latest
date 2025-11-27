import React from "react";
import SHUNNOIT from "../../assets/shunnoit8.png";
import SHUNNOITE from "../../assets/itlogo.svg";
import Inventory from "./Inventory";

const Google = () => {
  return (
    <div>
      <div className="bg-[#E44679] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          <div className="flex flex-col justify-center">
            <span className="text-2xl font-bold text-gray-800">
              আপনার কাজকে সহজ করতে
            </span>
            <span className="text-3xl font-bold text-gray-800">
              হিসাবনিকাশ সফটওয়্যার নিয়ে এলো
            </span>
            <span className="text-3xl font-bold text-gray-800 mb-6">
              মোবাইল অ্যাপে!
            </span>
            <div>
              <img src={SHUNNOITE} alt="Playstore" className="w-40" />
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={SHUNNOIT}
              alt=""
              className="w-full max-w-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="-mt-10">
        <Inventory />
      </div>
    </div>
  );
};

export default Google;
