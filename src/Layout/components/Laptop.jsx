import React from 'react'
import SHUNNOIT from "../../assets/shunnoit4.png";
import Smart from './Smart';


const Laptop = () => {
  return (
    <div>
        <div>
            <div className='bg-[#E44679]  '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 m-18'>
            <div>
                <img src={SHUNNOIT} alt="" className='w-[6500px] transition transform duration-300 hover:scale-105'/>
        </div>
        <div className='mt-64'>
            <div>
                <p className='text-yellow-400 text-xl font-bold mb-4'>   
           এখন হিসাবনিকাশ
                </p>
            </div>
            <div>
                <h3 className='text-3xl font-inter text-white mb-3'>আপনার হাতের মুঠোয় ইনভেন্টরি রাখুন,</h3>
                <p className='text-3xl font-inter text-white'>ব্যবসার উন্নতি করুন।</p>
            </div>
            <div className='flex gap-3'>
                <div className='mt-6'>
                    <button className='bg-[#212529] px-20 py-4 text-xl text-white rounded  font-sans-serif'>SIGN UP FOR FREE</button>
                </div>
                <div className='mt-6'>
                  <button className='bg-[#FFFFFF] px-14 py-4 text-xl text-black rounded font-bold hover:bg-pink-700 hover:text-white'>  EXPLORE DEMO VIDEO</button>
                </div>
            </div>
        </div>
        </div>
    </div>
        </div>
        <div className='-mt-20'>
            <Smart/>
        </div>
    </div>
  )
}

export default Laptop