import React, { useState } from "react";
import SHUNNOIT from "../../assets/shunnoit2.png";
import Started from "./Started";
// import Started from "./Started";

const HomePage = ({ dark }) => {
  return (
    <div
      className={`-mt-42  pt-[120px] ${
        dark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* 🟦 Top padding for fixed navbar */}
      <div className="pt-[120px]">
        <div className={`w-full  grid grid-cols-1 md:grid-cols-2 p-1 gap-5 ${dark ? "bg-pink-800 text-white": "bg-white text-white"}`}>
          <div className="mx-20">
            <div className="mt-40">
              <h2 className={`text-3xl text-inter font-bold mb-4 text-[#212529] ${dark ? "text-white": "text-black"}`}>
                সব ব্যবসার এক <span className="text-pink-600">সমাধান</span>
              </h2>
              <h2 className={`text-4xl font-inter font-bold mb-4 text-[#212529] ${dark ? "text-white": "text-black"}`}>
                হিসাবনিকাশ সফটওয়্যার
              </h2>
            </div>
{/* //text-xl font-sans text-[#303437] mb-4 text-justify */}
            <p className={`text-xl font-inter  text-[#212529] ${dark ? "text-white": "text-black"}`}>
              নতুন এবং পুরাতন পণ্য মজুত, সরবরাহ এবং ক্রেতাদের চাহিদা অনুযায়ী
              হিসাব রাখতে এটি অত্যন্ত কার্যকর। ব্যবহার সহজ ও দ্রুত হওয়ায়, এটি
              সময় এবং খরচ সাশ্রয়ে গুরুত্বপূর্ণ ভূমিকা পালন করে। ব্যবসার
              প্রতিটি ধাপকে আরও স্বচ্ছ ও সুশৃঙ্খল করতে, এটি আপনার প্রতিষ্ঠানের
              নির্ভরযোগ্য সহকারী।
            </p>

            <div className="flex mt-8 gap-3">
              <button className="bg-blue-400 px-7 py-2 rounded-4xl text-sm text-white font-sans-sarif font-bold cursor-pointer">
                লগইন
              </button>

              <button className="bg-pink-600 px-7 py-2 rounded-4xl text-sm font-inter text-white font-bold cursor-pointer">
                রেজিস্ট্রেশন
              </button>
            </div>
          </div>

          <div>
            <img
              src={SHUNNOIT}
              alt=""
              className="w-[650px] h-[750px] transition transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

   <div className="-mt-20">
       <Started/>
   </div>
    </div>
  );
};

export default HomePage;
