import React from "react";
import SHUNNOIT from "../../assets/shunnoit5.png";
import SHUNNOITE from "../../assets/shunnoit6.png";
import FooterOne from "./FooterOne";


const FeatureAdd = ({dark}) => {
  return (
    <div>
      <div className="bg-[#FFFFFF]">
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 m-20">
          <div className="mt-46 mx-10">
            <div>
              <h2 className="text-3xl font-bold text-[#212529]">ইনভেন্টরি ও ফাইন্যান্সিয়াল ম্যানেজমেন্টের জন্য স্মার্ট</h2>
              <p className="text-3xl font-bold text-[#212529] mb-8">ড্যাশবোর্ড</p>
            </div>
            <div className="mx-18">
              <ul class="space-y-2 text-[#212529] leading-relaxed font-semibold">
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
          <div className="mt-12">
            <img src={SHUNNOIT} alt="" className="w-[650px]  transition transform duration-300 hover:scale-105"/>
          </div>
        </div>
        </div>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 m-20">
          <div className="-mt-18">
            <img src={SHUNNOITE} alt="" className=" transition transform duration-300 hover:scale-105"/>
          </div>
          <div className="mt-18">
            <div>
              <h2 className="text-3xl font-bold text-[#212529] mb-2">মাল্টি-স্টোর ম্যানেজমেন্টের জন্য পয়েন্ট অফ সেল</h2>
              <p className="text-3xl font-bold text-[#212529] mb-4">সলিউশন</p>
            </div>
            <div className="mx-8">
              <ul class="space-y-2 text-[#212529] leading-relaxed font-semibold">
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
        </div>
      </div>
      <div className="-mt-20">
      <FooterOne/>
      </div>
    </div>
  );
};

export default FeatureAdd;
