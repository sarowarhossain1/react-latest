import React from "react";
import FOOTER from "../../assets/FOOTER.png";

const Footerthree = () => {
  return (
    <div>
      <div>
        <footer class="bg-pink-200 text-black py-16">
          <div class="max-w-8xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="mx-25">
              <h2 class="text-xl font-sans-sarif font-bold mb-6">
                আমাদের সম্পর্কে
              </h2>
              <ul class="space-y-5">
                <li className="text-[18px] font-semibold mb-2 font-inter text-gray-800">
                  আমাদের সম্পর্কে
                </li>
                <li className="text-[18px] font-semibold mb-2 font-inter text-gray-800">
                  ফিচার
                </li>
                <li className="text-[18px] font-semibold mb-2 font-inter text-gray-800">
                  প্যাকেজ
                </li>
                <li className="text-[18px] font-semibold mb-2 font-inter text-gray-800">
                  প্রশ্ন ও উত্তর
                </li>
                <li className="text-[18px] font-semibold mb-2 font-inter text-gray-800">
                  যোগাযোগ
                </li>
              </ul>
            </div>

            <div>
              <h2 class="text-xl font-inter font-bold mb-6">আরো তথ্য</h2>
              <ul class="space-y-4">
                <li className=" className='text-[18px] font-semibold mb-2 font-inter text-gray-800">
                  আমাদের সম্পর্কে
                </li>
                <li className="text-[18px] font-semibold mb-2 font-inter text-gray-800">
                  শর্তাবলী
                </li>
                <li className="text-[18px] font-semibold mb-2 font-inter text-gray-800">
                  রিটার্ন
                </li>
              </ul>
              <button class="bg-white px-4 py-2 rounded mt-4 font-semibold fontinter border border-amber-500 hover:bg-white hover:border-pink-600 hover:text-pink-800 text-orange-600">
                পেমেন্ট করুন
              </button>
            </div>

            <div className="space-y-8">
              <h2 class="text-xl font-sans-sarif font-bold mb-6">
                যোগাযোগ করুন
              </h2>
              <p className="text-[18px] font-semibold mb-2 font-inter text-gray-800">
                ইমেইল: hisabnikash@gmail.com
              </p>
              <p className="text-[18px] font-semibold mb-2 font-inter text-gray-800">
                মোবাইল: ০১৮৮৮৮৮৮৮৮৮
              </p>
              <p class="text-[18px] font-semibold mb-2 font-inter text-gray-800">
                হেড অফিস: ২৭২/৫, পশ্চিম আগারগাঁও,
                <br />
                শেরে বাংলা নগর, ঢাকা-১২০৭ (Head Office)
              </p>
              <p class="text-[18px] font-semibold mb-2 font-inter text-gray-800">
                ঠিকানা: ২৬১/১, পশ্চিম তালাইমারী, কাজলা,
                <br />
                বোয়ালিয়া, রাজশাহী-৬২০৪
              </p>
            </div>

            <div className="me-20 space-y-5">
              <h2 class="text-2xl font-bold mb-6">
                HISAB <span class="text-pink-600 font-inter">NIKASH</span>
              </h2>
              <h2 class="text-xm text-[15px] font-bold mb-6 font-sans-sarif">
                হিসাবনিকাশ ইনভেন্টরি ম্যানেজমেন্ট সফটওয়্যার
              </h2>
              <input
                type="email"
                placeholder="আপনার ইমেইল ঠিকানা"
                class="w-full px-3 py-2 rounded border border-[#C6005C] focus:outline-none placeholder-pink-700"
              />
            </div>
          </div>

          <div class="max-w-[1650px] mx-auto px-6 mt-25 ">
            <img src={FOOTER} alt="" className="" />
          </div>
        </footer>
      </div>
      <div className="bg-pink-700 text-center py-6">
        <h2 className="text-[17px] font-bold text-white font-sans-sarif">
          All Rights Reserved © Shuuno IT -2025
        </h2>
      </div>
    </div>
  );
};

export default Footerthree;
