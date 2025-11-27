import React from "react";
import SHUNNOIT from "../../assets/shunnoit3.png";
import Laptop from "./Laptop";

const Started = ({ dark }) => {
  return (
    <div className={`${dark ? "bg-gray-900 text-white" : "bg-[#E9ECEF] text-gray-900"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold leading-snug">
              হিসাবনিকাশ ইনভেন্টরি ম্যানেজমেন্ট সফটওয়্যার ব্যবহারে যেসব সুবিধা 
            </h1>

            <p className="text-xl font-semibold mt-2">পাবেনঃ</p>

            <p
              className={`text-[16px] md:text-[17px] mt-4 leading-relaxed text-justify 
                ${dark ? "text-gray-300" : "text-gray-700"}`}
            >
              আপনার ফ্যাশন হাউস, শাড়ির দোকান, জুতার দোকান, কসমেটিকের দোকান,
              ডিপার্টমেন্টাল শপ, ইলেকট্রনিক শপ, মোবাইল শপ অথবা যেকোন ধরনের খুচরা
              অথবা পাইকারী ব্যবসার দৈনিক আয়-ব্যয়, লাভ-ক্ষতি, পেমেন্ট রিসিভ,
              ইনভয়েস ও স্টক ট্র্যাকিং সহ দ্রুত এবং সহজে ব্যবসা পরিচালনার জন্য
              ব্যবহার করুন হিসাবনিকাশ সফটওয়্যার। আমাদের সফটওয়্যার ইন্টারফেস ইউজার
              ফ্রেন্ডলি হওয়ায় এটি ব্যবহার ও নিয়ন্ত্রণ করা খুবই সহজ। দক্ষ সাপোর্ট
              টিম ২৪/৭ সেবা নিশ্চিত করে থাকে এবং আপনার গুরুত্বপূর্ণ ডেটা সবসময়
              একাধিক ক্লাউড সার্ভারে নিরাপদে সংরক্ষিত হয়।
            </p>

            <button className="mt-6 border border-pink-700 px-6 py-2 rounded-xl text-pink-700 font-medium text-[17px] font-inter hover:bg-pink-700 hover:text-white">
              Get Started
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={SHUNNOIT}
              alt=""
              className="w-full max-w-[450px] md:max-w-[550px] transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Laptop Section */}
      <div className="-mt-10 md:-mt-20">
        <Laptop />
      </div>
    </div>
  );
};

export default Started;
