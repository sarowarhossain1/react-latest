import { MapPin } from "lucide-react";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import Footer from "./Footer";

const Management = ({ dark }) => {
  return (
    <div>
      <div className="text-center mt-12 mb-10">
        <p className="text-pink-800 text-lg font-bold mb-2">একটি পূর্ণ অভিজ্ঞতার জন্য</p>
        <h2 className="text-xl font-semibold mb-1">সেরা ম্যানেজমেন্ট সফটওয়্যার থেকে</h2>
        <h1 className="text-pink-800 text-xl font-bold">পছন্দ করুন বিশ্বজুড়ে</h1>
      </div>
      <div className={`p-4 rounded-md ${dark ? "text-black" : "text-black"}`}>
        <div className="flex justify-center gap-4 flex-wrap">

          <div className="shadow-2xl w-full max-w-[1000px] h-auto bg-[#F8F9FA] rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
              <div className="flex items-start gap-2 md:max-w-md">
                <MapPin className="text-3xl text-pink-800" />
                <p className="text-sm md:text-base font-bold">
                  ঢাকা অফিস ঠিকানাঃ ২৭২/৫, পশ্চিম আগারগাঁও, <br />
                  শেরেবাংলা নগর, ঢাকা-১২০৭ (Head Office)
                </p>
              </div>

              <div className="flex items-start gap-2 md:max-w-md">
                <MapPin className="text-3xl text-pink-800" />
                <p className="text-sm md:text-base font-bold">
                  রাজশাহী অফিস ঠিকানাঃ ২১৬/১, পশ্চিম তালাইমারি, <br />
                  কাজলা, বোয়ালিয়া, রাজশাহী-৬২০৪
                </p>
              </div>
            </div>
            <div className="text-center mb-6">
              <button className="border border-pink-400 rounded-full px-6 py-2 hover:bg-pink-800 text-pink-600 text-sm font-bold hover:text-white">
                সাইন আপ
              </button>
            </div>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <BsTelephone className="text-xl text-pink-700" />
                <p className="text-sm md:text-base font-semibold">০১৮৯৬৪৮৮৪৮০</p>
              </div>
              <div className="flex items-center gap-2">
                <BsTelephone className="text-xl text-pink-700" />
                <p className="text-sm md:text-base font-semibold">০১৮৯৬৪৮৮৪৮০</p>
              </div>
              <div className="flex items-center gap-2">
                <BsTelephone className="text-xl text-pink-700" />
                <p className="text-sm md:text-base font-semibold">০১৮৯৬৪৮৮৪৮০</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Management;
