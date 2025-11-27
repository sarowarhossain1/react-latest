import React from "react";
import SHUNNOIT from "../../assets/shunnoit4.png";
import Smart from "./Smart";

const Laptop = ({ dark }) => {
  return (
    <div className={`${dark ? "bg-pink-900" : "bg-[#E44679]"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={SHUNNOIT}
              alt=""
              className="w-full max-w-[450px] md:max-w-[600px] h-auto transition duration-300 hover:scale-105"
            />
          </div>
          <div>
            <p className="text-yellow-300 text-xl font-bold mb-4">
              এখন হিসাবনিকাশ
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-white leading-snug">
              আপনার হাতের মুঠোয় ইনভেন্টরি রাখুন,
              <br />
              ব্যবসার উন্নতি করুন।
            </h3>
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <button className="bg-[#212529] px-8 py-3 md:px-14 md:py-4 text-lg md:text-xl text-white rounded font-semibold h-15 w-96">
                SIGN UP FOR FREE
              </button>

              <button className="bg-white px-8 py-3 md:px-14 md:py-4 text-sm md:text-sm text-black rounded font-semibold h-15 w-96 hover:bg-pink-700 hover:text-white transition">
                EXPLORE DEMO VIDEO
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Section */}
      <div className="-mt-10 md:-mt-20">
        <Smart />
      </div>
    </div>
  );
};

export default Laptop;
