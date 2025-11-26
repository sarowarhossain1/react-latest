import React from "react";
import SUPPORT from "../../assets/support1.jpg";
import SUPPORT2 from "../../assets/support2.jpg";
import SUPPOR3 from "../../assets/support3.avif";
import Footertwo from "./Footertwo";

const SupportTeam = () => {
  return (
    <div>
      <div className="bg-[#E9ECEF] py-30">
  <div className="text-center space-y-2 mb-12">
    <h3 className="text-xl font-bold text-pink-700">শুরু করার সঠিক সময় এখনই</h3>
    <h1 className="text-4xl font-bold">আপনার ইনভেন্টরি ব্যবস্থাপনাকে</h1>
    <h2 className="text-3xl font-bold text-pink-700">পরিবর্তন করুন</h2>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5">

    {/* Card */}
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center h-[380px] flex flex-col justify-center items-center">
      <img
        src={SUPPORT}
        alt="Support"
        className="w-28 md:w-32 mb-6 transition-transform duration-300 hover:scale-110"
      />
      <h2 className="text-2xl font-bold mb-2">সাপোর্ট এক্সেকিউটিভ</h2>
      <p className="text-xl">01896488480</p>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-8 text-center h-[380px] flex flex-col justify-center items-center">
      <img
        src={SUPPORT}
        alt="Support"
        className="w-28 md:w-32 mb-6 transition-transform duration-300 hover:scale-110"
      />
      <h2 className="text-2xl font-bold mb-2">সাপোর্ট এক্সেকিউটিভ</h2>
      <p className="text-xl">01896488480</p>
    </div>

    <div className="bg-white rounded-2xl shadow-lg p-8 text-center h-[380px] flex flex-col justify-center items-center">
      <img
        src={SUPPORT}
        alt="Support"
        className="w-28 md:w-32 mb-6 transition-transform duration-300 hover:scale-110"
      />
      <h2 className="text-2xl font-bold mb-2">সাপোর্ট এক্সেকিউটিভ</h2>
      <p className="text-xl">01896488480</p>
    </div>

  </div>
</div>


      <div>
        <Footertwo/>
      </div>
    </div>
  );
};

export default SupportTeam;
