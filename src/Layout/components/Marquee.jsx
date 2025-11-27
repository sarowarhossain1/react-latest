import {
  Home,
  User,
  Mail,
  Bell,
  Settings,
  Camera,
  Heart,
  Star,
  Wifi,
  Phone,
  Calendar,
  Cloud,
  Battery,
  Music,
  ArrowRight,
} from "lucide-react";

import React from "react";
import Appinventory from "./Appinventory";



const Marquee = () => {
  const icons = [
    Home,
    User,
    Mail,
    Bell,
    Settings,
    Camera,
    Heart,
    Star,
    Wifi,
    Phone,
    Calendar,
    Cloud,
    Battery,
    Music,
  ];

  const marqueeIcons = [...icons, ...icons];

  return (
   <div>
    <div className="bg-white">
       <div className="container pt-10 pb-10 text-center mx-auto">

      <h5 className="text-center font-sans-sarif mt-5 text-orange-800 text-xl font-medium mb-4">
        YOUR UNIFIED PLATFORM
      </h5>

      <h1 className="text-center font-inter text-black  text-2xl font-bold font-serif mb-20">
        Tightly integrated with apps to manage every
        <br />
        angle of your business
      </h1>

      {/* TOP MARQUEE */}
      <div className="overflow-hidden relative w-full h-32">
        <div className="absolute top-0 left-0 flex marquee-track animate-marquee">
          {marqueeIcons.map((Icon, i) => (
            <div
              key={i}
              className="marquee-box bg-pink-100 border-0 border-pink-800 shadow-sm  rounded-xl flex justify-center items-center mx-5"
            >
              <Icon size={36} className="text-pink-900 font-bold font-inter" />
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM MARQUEE */}
      <div className="overflow-hidden relative w-full h-32 mt-10">
        <div className="absolute top-0 left-0 flex marquee-track animate-marquee-reverse">
          {marqueeIcons.map((Icon, i) => (
            <div
              key={i}
              className="marquee-box bg-pink-100 border-0 border-pink-800 shadow-sm  rounded-xl flex justify-center items-center mx-5"
            >
              <Icon size={36} className="text-pink-900 font-bold " />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 space-y-5">
            <h3 className="text-sm font-bold text-pink-600 font-inter "><a href=""> More Integrations   </a></h3>
              <p className="cursor-pointer text-blue-600 mt">  <ArrowRight/> </p>    
                  
      </div>

      {/* CSS */}
      <style>{`
        .marquee-track {
          display: flex;
          white-space: nowrap;
          width: max-content;
        }

        .marquee-box {
          width: 110px;
          height: 110px;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee {
          animation: scroll-left 18s linear infinite;
        }

        .animate-marquee-reverse {
          animation: scroll-right 18s linear infinite;
        }
      `}</style>
    </div>
    </div>
    <div className="">
     <Appinventory/>
    </div>
   </div>
  );
};

export default Marquee;
