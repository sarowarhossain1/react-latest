import React from "react";
import SHUNNOITZ from "../../assets/zoho.webp";
import { Check } from "lucide-react";
import Marquee from "./Marquee";

const Inventory = ({dark}) => {
  return (
    <div>
      <div className="relative bg-[#FA393A] py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          <div className="space-y-4">
            <p className="text-yellow-400 text-lg md:text-xl font-semibold">AT YOUR FINGERTIPS</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Know your inventory and</h3>
            <h3 className="text-2xl md:text-3xl font-bold text-white">grow your business</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:justify-end mt-6 md:mt-0">
            <button className="bg-[#212529] w-96 h-15 text-white px-8  py-3   rounded font-semibold text-sm md:text-sm">
              SIGN UP FOR FREE
            </button>
            <button className="bg-white text-black w-96 h-15 px-8  py-3  rounded font-semibold text-sm md:text-sm hover:bg-pink-700 hover:text-white transition mb-30">
              EXPLORE DEMO VIDEO
            </button>
          </div>
        </div>
      </div>
      <div className="relative -mt-26 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white shadow-lg rounded-lg p-6">
        
          <div className="flex justify-center md:justify-start">
            <img src={SHUNNOITZ} alt="Inventory" className="w-full max-w-xs transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="space-y-4">
            {[
              "Accurate stock tracking with barcode and RFID system",
              "Track items based on batches and serial numbers",
              "Sell at your pace with UoM conversion",
              "Receive low stock alerts with reorder points",
              "Adjust inventory levels"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-[#FA393A] text-white rounded-full">
                  <Check size={14} />
                </span>
                <p className="text-gray-800 font-inter text-sm">{text}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {[
              "Configure and apply local taxes",
              "Generate instant reports",
              "Customize user roles and permissions",
              "Collaborate better with customer and vendor portal",
              "Transact across currencies and countries"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center bg-[#FA393A] text-white rounded-full">
                  <Check size={14} />
                </span>
                <p className="text-gray-800 font-inter text-sm">{text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
      {/* Marquee Section */}
      <div className="mt-12">
        <Marquee />
      </div>
    </div>
  );
};

export default Inventory;
