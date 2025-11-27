import { Check } from "lucide-react";
import React, { useState } from "react";
import SHUNNOIT from "../../assets/shunnoit9.png";
import Management from "./Management";

const Pricing = ({ dark }) => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    { title: "STANDARD", price: 29, users: 2, orders: 500 },
    { title: "PROFESSIONAL", price: 79, users: 5, orders: 1000 },
    { title: "PREMIUM", price: 129, users: 10, orders: 2000, popular: true },
    { title: "ENTERPRISE", price: 249, users: 20, orders: 5000 },
  ];

  return (
    <div className={dark ? "dark font-inter" : "font-inter"}>
      <div className="bg-[#F2F0E9] py-12 px-6 md:px-12">
        <h2 className="text-xl text-[#F94049] font-semibold text-center mb-4">GET STARTED</h2>
        <h3 className="text-2xl md:text-4xl font-bold text-center mb-8">Simple pricing. No surprises.</h3>
        <div className="flex justify-center items-center gap-6 mb-12">
          <span
            onClick={() => setIsYearly(false)}
            className={`cursor-pointer font-bold text-lg md:text-2xl ${!isYearly ? "text-[#F94049]" : "text-black"}`}
          >
            Monthly
          </span>

          <div
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-7 bg-[#F94049] rounded-full relative cursor-pointer"
          >
            <span
              className={`absolute top-0 w-6 h-6 bg-white rounded-full shadow transform transition-all ${isYearly ? "translate-x-6" : "translate-x-0"}`}
            ></span>
          </div>

          <span
            onClick={() => setIsYearly(true)}
            className={`cursor-pointer font-bold text-lg md:text-2xl ${isYearly ? "text-[#F94049]" : "text-black"}`}
          >
            Yearly
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 shadow-sm  ">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl shadow-xl p-8 flex flex-col justify-between relative ${
                plan.popular ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-0 bg-yellow-300 text-black text-sm px-3 py-1 rounded-b font-semibold">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-center text-xl font-semibold mb-3">{plan.title}</h3>
              <p className="text-center text-3xl md:text-4xl font-bold mb-2">
                ${plan.price}
              </p>
              <p className={`text-center ${plan.popular ? "text-white" : "text-gray-700"} mb-6`}>
                per organization / month {isYearly ? "billed annually" : ""}
              </p>

              <button
                className="bg-[#FFE4DE] hover:bg-[#D32C3E] hover:text-white text-[#D32C3E] font-bold py-2 px-6 rounded mb-6 transition"
              >
                Get Started
              </button>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-[#D32C3E]" />
                  <span>{plan.orders} orders / month</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-[#D32C3E]" />
                  <span>{plan.users} users</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4  mt-12">
          <div className="bg-[#FFE4DE] rounded flex items-center justify-center p-4">
            <img src={SHUNNOIT} alt="SHUNNOIT" className="max-w-full max-h-40" />
          </div>
          <div className="bg-white rounded p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">FREE</h3>
            <p className="text-3xl font-bold mb-1">$0</p>
            <p className="font-semibold">per organization / month</p>
          </div>
          <div className="bg-white rounded p-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <Check size={16} className="text-[#D32C3E]" />
              <span>500 orders / month</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Check size={16} className="text-[#D32C3E]" />
              <span>2 users</span>
            </div>
          </div>
          <div className="bg-white rounded p-6 flex items-center justify-center">
            <button className="bg-[#FFE4DE] hover:bg-[#D32C3E] hover:text-white text-[#D32C3E] font-bold py-2 px-6 rounded transition">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <Management />
    </div>
  );
};

export default Pricing;
