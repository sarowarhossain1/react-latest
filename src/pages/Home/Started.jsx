import React from 'react'
import SHUNNOIT from "../../assets/shunnoit3.png";
import Laptop from './Laptop'

const Started = ({dark}) => {
  return (
   <div>
    <div>
         <div className='bg-[#E9ECEF]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-1 m-20'>
            <div className='mt-56  p-5'>
                <div>
                    <h1 className={`text-2xl font-bold  text-[#212529] ${dark ? "text-white": "text-black"}`}>হিসাবনিকাশ ইনভেন্টরি ম্যানেজমেন্ট সফটওয়্যার ব্যবহারে যেসব সুবিধা  </h1>
                    <p className={`text-xl font-bold  text-[#212529] ${dark ? "text-white": "text-black"}`}>পাবেনঃ</p>
                </div>
                <div className='mt-3 mb-3'>
                    <div className=' space-y-6'>
                    <p className={`text-[17px] font-bold text-justify font-serif  text-[#212529] ${dark ? "text-gray-800": "text-gray-700"}`}>আপনার ফ্যাশন হাউস, শাড়ির দোকান, জুতার দোকান, কসমেটিকের দোকান, ডিপার্টমেন্টাল শপ, ইলেকট্রনিক শপ, মোবাইল শপ অথবা যেকোন ধরনের খুচরা অথবা পাইকারী ব্যবসার দৈনিক আয়-ব্যয়, লাভ-ক্ষতি, পেমেন্ট রিসিভ, ইনভয়েস ও স্টক ট্র্যাকিং সহ দ্রুত এবং সহজে ব্যবসা পরিচালনার জন্য ব্যবহার করুন হিসাবনিকাশ সফটওয়্যার। আমাদের সফটওয়্যার ইন্টারফেস ইউজার ফ্রেন্ডলি হওয়ায় এটি ব্যবহার ও নিয়ন্ত্রণ করা খুবই সহজ। আমাদের দক্ষ সাপোর্ট টিম ২৪/৭ আপনাদের সর্বোত্তম সেবা নিশ্চিত করে থাকে। আপনার ডাটা আমাদের কাছে গুরুত্বপূর্ণ সুতরাং সবসময় আপনাদের ডেটা ব্যাকআপ ও একাধিক ক্লাউড সার্ভারে সংরক্ষিত থাকে।</p>
                </div>
                </div>
                <div>
                    <button className='border-1 border-pink-700 px-6 py-1 rounded-4xl text-pink-700 font-medium text-xl hover:bg-pink-800 hover:text-white text-center'>Get Started</button>
                </div>
            </div>
            <div className=''>
                <img src={SHUNNOIT} alt=""  className='w-[750px] transition transform duration-300 hover:scale-105'/>
            </div>
        </div>
    </div>
    </div>
    <div className='-mt-20'>
        <Laptop/>
    </div>
   </div>
  )
}

export default Started