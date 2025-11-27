import React from "react";
import FOOTER from "../../assets/FOOTER.png";

const Footer = () => {
  return (
    <footer className="bg-pink-200 text-black">
      <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 py-16">
        <div>
          <h2 className="text-xl font-bold mb-6">আমাদের সম্পর্কে</h2>
          <ul className="space-y-2">
            <li className="text-[18px] font-semibold text-gray-800">আমাদের সম্পর্কে</li>
            <li className="text-[18px] font-semibold text-gray-800">ফিচার</li>
            <li className="text-[18px] font-semibold text-gray-800">প্যাকেজ</li>
            <li className="text-[18px] font-semibold text-gray-800">প্রশ্ন ও উত্তর</li>
            <li className="text-[18px] font-semibold text-gray-800">যোগাযোগ</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-6">আরো তথ্য</h2>
          <ul className="space-y-2">
            <li className="text-[18px] font-semibold text-gray-800">আমাদের সম্পর্কে</li>
            <li className="text-[18px] font-semibold text-gray-800">শর্তাবলী</li>
            <li className="text-[18px] font-semibold text-gray-800">রিটার্ন</li>
          </ul>
          <button className="bg-white px-4 py-2 rounded mt-4 font-semibold border border-amber-500 hover:border-pink-600 hover:text-pink-800 text-orange-600">
            পেমেন্ট করুন
          </button>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-6">যোগাযোগ করুন</h2>
          <p className="text-[18px] font-semibold text-gray-800">ইমেইল: hisabnikash@gmail.com</p>
          <p className="text-[18px] font-semibold text-gray-800">মোবাইল: ০১৮৮৮৮৮৮৮৮৮</p>
          <p className="text-[18px] font-semibold text-gray-800">
            হেড অফিস: ২৭২/৫, পশ্চিম আগারগাঁও,<br />
            শেরে বাংলা নগর, ঢাকা-১২০৭ (Head Office)
          </p>
          <p className="text-[18px] font-semibold text-gray-800">
            ঠিকানা: ২৬১/১, পশ্চিম তালাইমারী, কাজলা,<br />
            বোয়ালিয়া, রাজশাহী-৬২০৪
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">
            HISAB <span className="text-pink-600">NIKASH</span>
          </h2>
          <p className="text-[15px] font-semibold mb-4">
            হিসাবনিকাশ ইনভেন্টরি ম্যানেজমেন্ট সফটওয়্যার
          </p>
          <input
            type="email"
            placeholder="আপনার ইমেইল ঠিকানা"
            className="w-full px-3 py-2 rounded border border-[#C6005C] focus:outline-none placeholder-pink-700"
          />
        </div>
      </div>
      <div className="max-w-[1650px] mx-auto px-6">
        <img src={FOOTER} alt="Footer Banner" className="w-full" />
      </div>
      <div className="bg-pink-700 text-center py-6 m-0">
        <p className="text-[17px] font-bold text-white">All Rights Reserved © Shuuno IT -2025</p>
      </div>
    </footer>
  );
};

export default Footer;
