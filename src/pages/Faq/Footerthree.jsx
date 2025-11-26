import React from 'react'
import FOOTER from "../../assets/FOOTER.png";

const Footerthree = () => {
  return (
    <div>
        <div>
            <footer class="bg-pink-200 text-black py-16">
  <div class="max-w-8xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

 
    <div className='mx-25'>
      <h2 class="text-2xl font-bold mb-6">আমাদের সম্পর্কে</h2>
      <ul class="space-y-3">
        <li  className="text-xl font-semibold mb-2 text-gray-800">আমাদের সম্পর্কে</li>
        <li  className="text-xl font-semibold mb-2 text-gray-800">ফিচার</li>
        <li  className="text-xl font-semibold mb-2 text-gray-800">প্যাকেজ</li>
        <li  className="text-xl font-semibold mb-2 text-gray-800">প্রশ্ন ও উত্তর</li>
        <li  className="text-xl font-semibold mb-2 text-gray-800">যোগাযোগ</li>
      </ul>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-6">আরো তথ্য</h2>
      <ul class="space-y-3">
        <li className="mt-3 className='text-xl font-semibold mb-2 text-gray-800">আমাদের সম্পর্কে</li>
        <li  className="text-xl font-semibold mb-2 text-gray-800">শর্তাবলী</li>
        <li  className="text-xl font-semibold mb-2 text-gray-800">রিটার্ন</li>
      </ul>
      <button class="bg-yellow-300 px-4 py-2 rounded mt-4 font-semibold">
        পেমেন্ট করুন
      </button>
    </div>


    <div>
      <h2 class="text-2xl font-bold mb-6">যোগাযোগ করুন</h2>
      <p className='text-xl font-semibold mb-2 text-gray-800'>ইমেইল: hisabnikash@gmail.com</p>
      <p className='text-xl font-semibold mb-2 text-gray-800'>মোবাইল: ০১৮৮৮৮৮৮৮৮৮</p>
      <p class="mt-3 className='text-xl font-semibold mb-2 text-gray-800">
        হেড অফিস: ২৭২/৫, পশ্চিম আগারগাঁও,<br />
        শেরে বাংলা নগর, ঢাকা-১২০৭ (Head Office)
      </p>
      <p class="mt-3 mt-3 className='text-xl font-semibold mb-2 text-gray-800">
        ঠিকানা: ২৬১/১, পশ্চিম তালাইমারী, কাজলা,<br />
        বোয়ালিয়া, রাজশাহী-৬২০৪
      </p>
    </div>


    <div className='me-20'>
      <h2 class="text-2xl font-bold mb-6">
        HISAB <span class="text-pink-600">NIKASH</span>
      </h2>
      <h2 class="text-xm text-[15px] font-bold mb-6">
       হিসাবনিকাশ ইনভেন্টরি ম্যানেজমেন্ট সফটওয়্যার
      </h2>
      <input
        type="email"
        placeholder="আপনার ইমেইল ঠিকানা"
        class="w-full px-3 py-2 rounded border focus:outline-none"
      />
    </div>
  </div>


  <div class="max-w-[1650px] mx-auto px-6 mt-25 ">
     <img src={FOOTER} alt=""  className=''/>
    </div>
</footer>
        </div>
        <div className='bg-pink-700 text-center py-6'>
            <h2 className='text-xl font-bold text-white font-sans'>All Rights Reserved © Shuuno IT -2025</h2>
        </div>

    </div>
  )
}

export default Footerthree