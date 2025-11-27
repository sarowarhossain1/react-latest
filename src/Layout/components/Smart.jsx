import React from "react";
import SHUNNOIT from "../../assets/shunnoit5.png";
import SHUNNOITE from "../../assets/shunnoit6.png";
import Question from "./Question";

const Smart = ({ dark }) => {
  return (
    <div>
      <div className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 py-16">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#212529]">
              ইনভেন্টরি ও ফাইন্যান্সিয়াল ম্যানেজমেন্টের জন্য স্মার্ট
            </h2>
            <p className="text-2xl font-bold text-[#212529]">ড্যাশবোর্ড</p>

            <ul className="space-y-2 text-[#212529] font-semibold font-inter">
              <li>স্মার্ট এবং তথ্যপূর্ণ ড্যাশবোর্ড</li>
              <li>প্রোডাক্ট ক্যাটালগ এবং ক্যাটাগরি</li>
              <li>স্টক ম্যানেজমেন্ট</li>
              <li>বারকোড জেনারেটর</li>
              <li>কাস্টমার ইনফরমেশন এবং লেজার</li>
              <li>সাপ্লায়ার ইনফরমেশন এবং লেজার</li>
              <li>ক্রয় এবং বিক্রয় অ্যাকাউন্ট</li>
              <li>ইকুয়েটেড মান্থলি ইনস্টলমেন্ট</li>
              <li>আয়-ব্যয় এবং লাভ-ক্ষতির হিসাব</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src={SHUNNOIT}
              alt=""
              className="w-full max-w-[550px] transition duration-300 hover:scale-105"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 py-16">

          <div className="flex justify-center">
            <img
              src={SHUNNOITE}
              alt=""
              className="w-full max-w-[550px] transition duration-300 hover:scale-105"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#212529]">
              মাল্টি-স্টোর ম্যানেজমেন্টের জন্য পয়েন্ট অফ সেল
            </h2>
            <p className="text-2xl font-bold text-[#212529]">সলিউশন</p>

            <ul className="space-y-2 text-[#212529] font-semibold font-inter">
              <li>স্মার্ট এবং তথ্যপূর্ণ ড্যাশবোর্ড</li>
              <li>প্রোডাক্ট ক্যাটালগ এবং ক্যাটাগরি</li>
              <li>স্টক ম্যানেজমেন্ট</li>
              <li>বারকোড জেনারেটর</li>
              <li>কাস্টমার ইনফরমেশন এবং লেজার</li>
              <li>সাপ্লায়ার ইনফরমেশন এবং লেজার</li>
              <li>ক্রয় এবং বিক্রয় অ্যাকাউন্ট</li>
              <li>ইকুয়েটেড মান্থলি ইনস্টলমেন্ট</li>
              <li>আয়-ব্যয় এবং লাভ-ক্ষতির হিসাব</li>
            </ul>
          </div>

        </div>

      </div>

      {/* NEXT SECTION */}
      <div className="-mt-10 md:-mt-20">
        <Question />
      </div>
    </div>
  );
};

export default Smart;
