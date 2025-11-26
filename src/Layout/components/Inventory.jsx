import React from "react";
import SHUNNOITZ from "../../assets/zoho.webp";
// import { FaCheck } from "react-icons/fa";
import { Check } from 'lucide-react';
import Marquee from "./Marquee";


const Inventory = () => {
  return (
    <div>
      <div className="relative">
        <div className="bg-[#FA393A] h-[450px] ">
          <div className="grid grid-cols-1 md:grid-cols-2 px-10 pt-10">
            <div className="mx-40 mt-6">
                <p className="text-[23px] font-sans-serif font-semibold text-yellow-400 mb-4">AT YOUR FINGERTIPS</p>
              <h3 className="text-3xl font-inter font-semibold mb-2 shadow-2xs text-white">Know your inventory and</h3>
              <h3 className="text-3xl font-inter font-semibold shadow-2xs text-white">grow your business</h3>
            </div>
            <div className="flex mt-24 justify-end">
              <div className="mx-5 text-white text-4xl font-bold space-y-2 mt-2">
                <button className="bg-[#212529] w-65 h-14 font-inter text-2xl text-white rounded font-bold">
                  SIGN UP FOR FREE
                </button>
              </div>
              <div className="mt-6">
                <button className="bg-[#FFFFFF] w-65 h-14 font-inter text-[17px] text-black rounded font-bold hover:bg-pink-700 hover:text-white -mt-50 me-40">
                  {" "}
                  EXPLORE DEMO VIDEO
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absulate -mt-[390px]">
          <div className="bg-white grid grid-cols-1 md:grid-cols-3 m-50 shadow-lg">
            <div className=" shadow-xl ">
              <img src={SHUNNOITZ} alt="" className="duration-300 transition transform hover:scale-105 "/>
            </div>
            <div className="mt-20 ">
              <div className="mx-20 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#FA393A] text-white rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 font-inter text-sm">
                    Accurate stock tracking with barcode and <br />
                    RFID system
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#FA393A] text-white rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 font-inter text-sm">
                    Track items based on batches and serial  <br />
                   numbers
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#FA393A] text-white rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 font-inter text-sm">
                    Sell at your pace with UoM conversion
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#FA393A] text-white rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 font-inter text-sm">
                   Receive low stock alerts with reorder <br />
                   points
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#FA393A] text-white rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 font-inter text-sm">
                    Adjust inventory levels

                  </p>
                </div>
              </div>
            </div>
            <div>
                <div className="mt-15">
                    <div className="space-y-4">
                        <div className="flex items-start  gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#FA393A] text-white rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 font-inter text-sm">
                   Configure and apply local taxes
                  </p>
                </div>
                    <div className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#FA393A] text-white rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 font-inter text-sm">
                   Generate instant reports
                  </p>
                </div>
                    <div className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#FA393A] text-white rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 font-inter text-sm">
                   Customize user roles and permissions
                  </p>
                </div>
                    <div className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#FA393A] text-white rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 font-inter text-sm">
                    Collaborate better with customer and <br />
                    vendor portal
                  </p>
                </div>
                    <div className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#FA393A] text-white rounded-full">
                    <Check size={14} />
                  </span>

                  <p className="text-gray-800 font-inter text-sm">
                   Transact across currencies and countries
                  </p>
                </div>
                    </div>
                </div>
            </div>
          </div>
          
        </div>
      </div>
      <div>
        <Marquee/>
      </div>
    </div>
  );
};

export default Inventory;
