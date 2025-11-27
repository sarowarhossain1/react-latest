// import React, { useState } from "react";
// import SHUNNOIT from "../../assets/shunnoit2.png";
// import Started from "./Started";
// // import Started from "./Started";

// const HomePage = ({ dark }) => {
//   return (
//     <div
//       className={`-mt-42  pt-[120px] ${
//         dark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
//       }`}
//     >
//       <div className="pt-[120px]">
//         <div className={`w-full  grid grid-cols-1 md:grid-cols-2 p-1 gap-5 ${dark ? "bg-pink-800 text-white": "bg-white text-white"}`}>
//           <div className="mx-20">
//             <div className="mt-40">
//               <h2 className={`text-3xl text-inter font-bold mb-4 text-[#212529] ${dark ? "text-white": "text-black"}`}>
//                 সব ব্যবসার এক <span className="text-pink-600">সমাধান</span>
//               </h2>
//               <h2 className={`text-4xl font-inter font-bold mb-4 text-[#212529] ${dark ? "text-white": "text-black"}`}>
//                 হিসাবনিকাশ সফটওয়্যার
//               </h2>
//             </div>
// {/* //text-xl font-sans text-[#303437] mb-4 text-justify */}
//             <p className={`text-xl font-inter  text-[#212529] ${dark ? "text-white": "text-black"}`}>
//               নতুন এবং পুরাতন পণ্য মজুত, সরবরাহ এবং ক্রেতাদের চাহিদা অনুযায়ী
//               হিসাব রাখতে এটি অত্যন্ত কার্যকর। ব্যবহার সহজ ও দ্রুত হওয়ায়, এটি
//               সময় এবং খরচ সাশ্রয়ে গুরুত্বপূর্ণ ভূমিকা পালন করে। ব্যবসার
//               প্রতিটি ধাপকে আরও স্বচ্ছ ও সুশৃঙ্খল করতে, এটি আপনার প্রতিষ্ঠানের
//               নির্ভরযোগ্য সহকারী।
//             </p>

//             <div className="flex mt-8 gap-3">
//               <button className="bg-blue-400 px-7 py-2 rounded-4xl text-sm text-white font-sans-sarif font-bold cursor-pointer">
//                 লগইন
//               </button>

//               <button className="bg-pink-600 px-7 py-2 rounded-4xl text-sm font-inter text-white font-bold cursor-pointer">
//                 রেজিস্ট্রেশন
//               </button>
//             </div>
//           </div>

//           <div>
//             <img
//               src={SHUNNOIT}
//               alt=""
//               className="w-[650px] h-[750px] transition transform duration-300 hover:scale-105"
//             />
//           </div>
//         </div>
//       </div>

//    <div className="-mt-20">
//        <Started/>
//    </div>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import SHUNNOIT from "../../assets/shunnoit2.png";
import Started from "./Started";

const HomePage = ({ dark }) => {
  return (
    <div
      className={`pt-[120px] ${
        dark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* MAIN SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10 lg:px-20 items-center">
        {/* IMAGE FIRST ON MOBILE */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <img
            src={SHUNNOIT}
            alt=""
            className="w-full max-w-[1100px] md:max-w-[650px] lg:max-w-[650px] transition transform duration-300 hover:scale-105"
          />
        </div>

        {/* TEXT SECOND ON MOBILE */}
        <div className="order-2 md:order-1 md:pl-8 lg:pl-16 ">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 
  ${dark ? "text-white" : "text-gray-900"} text-center md:text-left`}
          >
            সব ব্যবসার এক <span className="text-pink-600">সমাধান</span>
          </h2>

          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 
  ${dark ? "text-white" : "text-gray-900"} text-center md:text-left`}
          >
            হিসাবনিকাশ সফটওয়্যার
          </h2>

          <p
            className={`text-lg md:text-xl leading-8 
  ${dark ? "text-gray-200" : "text-gray-800"} text-center md:text-left`}
          >
            নতুন এবং পুরাতন পণ্য মজুত, সরবরাহ এবং ক্রেতাদের চাহিদা অনুযায়ী
            হিসাব রাখতে এটি অত্যন্ত কার্যকর। ব্যবহার সহজ ও দ্রুত হওয়ায়, এটি
            সময় এবং খরচ সাশ্রয়ে গুরুত্বপূর্ণ ভূমিকা পালন করে। ব্যবসার প্রতিটি
            ধাপকে আরও স্বচ্ছ ও সুশৃঙ্খল করতে, এটি আপনার প্রতিষ্ঠানের নির্ভরযোগ্য
            সহকারী।
          </p>

          {/* BUTTONS */}
          <div className="flex justify-center md:justify-start mt-8 gap-4">
            <button className="bg-blue-500 px-7 py-2 rounded-full text-sm text-white font-bold cursor-pointer">
              লগইন
            </button>

            <button className="bg-pink-600 px-7 py-2 rounded-full text-sm text-white font-bold cursor-pointer">
              রেজিস্ট্রেশন
            </button>
          </div>
        </div>
      </div>

      {/* STARTED SECTION */}
      <div className="mt-10 md:mt-16">
        <Started />
      </div>
    </div>
  );
};

export default HomePage;
