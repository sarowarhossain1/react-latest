import { MapPin } from 'lucide-react';
import React from 'react'
import { BsTelephone } from "react-icons/bs";
import Footer from './Footer';


const Management = ({dark}) => {
  return (
  <div>
    <div>
        <div className='text-center mt-25 mb-10'>
            <p className='text-pink-800 text-xl font-sans font-bold mb-3'>একটি পূর্ণ অভিজ্ঞতার জন্য</p>
            <h2 className='text-3xl font-serif  font-semibold'>সেরা ম্যানেজমেন্ট সফটওয়্যার থেকে</h2>
            <h1 className='text-pink-800 text-2xl font-sans font-bold mb-3'>পছন্দ করুন বিশ্বজুড়ে</h1>
        </div>
      <div className={`p-6 rounded-md ${dark ?  " text-black": " text-black"}`}>
  <div className="flex justify-center gap-16 flex-wrap ">
    
  <div className="shadow-2xl w-[1450px] h-96 bg-[#F8F9FA]">

    <div className='flex justify-center gap-2 p-2 mt-10'>
      <div className="flex items-start gap-3 max-w-md ">
      <p className="text-3xl text-pink-800 font-bold">
        <MapPin />
      </p>
      <h2 className='text-[20px] font-sans-sorif font-bold '>
        ঢাকা অফিস ঠিকানাঃ ২৭২/৫, পশ্চিম আগারগাঁও, <br />
        শেরেবাংলা নগর, ঢাকা-১২০৭ (Head Office)
      </h2>
    </div>

    <div className="flex items-start gap-3 max-w-md">
      <p className="text-3xl text-pink-800 font-bold">
        <MapPin />
      </p>
      <h2 className='text-[20px] font-sans-sorif font-bold'>
        রাজশাহী অফিস ঠিকানাঃ ২১৬/১, পশ্চিম তালাইমারি, <br />
        কাজলা, বোয়ালিয়া, রাজশাহী-৬২০৪
      </h2>
    </div>
    </div>

  
  <div className="text-center my-11">
    <button className="border-1 border-pink-400 rounded-4xl px-6 py-2  hover:bg-pink-800 text-pink-600 text-xl font-bold hover:text-white">
      সাইন আপ
    </button>
  </div>
  <div className="flex justify-center gap-10 flex-wrap">
    
    <div className="flex items-center gap-2">
      <BsTelephone className="text-xl text-pink-700" />
      <p className='text-xl font-inter font-semibold'>০১৮৯৬৪৮৮৪৮০</p>
    </div>

    <div className="flex items-center gap-2">
      <BsTelephone className="text-xl text-pink-700" />
      <p className='text-xl font-inter font-semibold'>০১৮৯৬৪৮৮৪৮০</p>
    </div>

    <div className="flex items-center gap-2">
      <BsTelephone className="text-xl text-pink-700" />
      <p className='text-xl font-inter font-semibold'>০১৮৯৬৪৮৮৪৮০</p>
    </div>

  </div>
  </div>
</div>
  
</div>

    </div>
    <div>
        <Footer/>
    </div>
  </div>
  )
}

export default Management