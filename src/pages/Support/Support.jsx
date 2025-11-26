import React, { useState } from "react";
import SHUNNOIT from "../../assets/SHUNNOIT.png";
import {
  Sun,
  Moon,
  Home,
  Info,
  PhoneCall,
  HelpCircle,
  Users,
  Landmark,
  Menu,
  X,
  Settings,
  LogIn
} from "lucide-react";

import { Link } from "react-router-dom";
import SupportTeam from "./SupportTeam";




const Support = ({ dark, setDark }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const menuItems = [
    { name: "হোম", path:"/", icon: <Home size={18} /> },
    { name: "ফিচার", path:"/feature", icon: <Info size={18} /> },
    { name: "সাপোর্ট টিম", path:"/support", icon: <Users size={18} /> },
    { name: "FAQ", path:"/faq", icon: <HelpCircle size={18} /> },
    { name: "যোগাযোগ", path:"/communication", icon: <PhoneCall size={18} /> },
    { name: "ব্যাংক", icon: <Landmark size={18} /> },
  ];

  return (
<div>
  <div>
        <nav
      className={`w-full fixed top-0 z-50 px-6 py-5 flex items-center justify-between shadow-md
        ${dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >

      <div className="flex items-center mx-22">
        <img src={SHUNNOIT} className="w-30 h-12" alt="logo" />
      </div>
      <div className="hidden md:flex  justify-end space-x-8 text-base font-medium ">
        {menuItems.map((item, idx) => (
          <Link
            key={idx} to={item.path}
            className="flex items-center space-x-1 cursor-pointer hover:text-blue-500"
          >
            {item.icon}
            <span className="font-bold text-pink-600">{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Right Side: Dark Mode + Profile */}
      <div className="hidden md:flex items-center space-x-4 relative">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div className="relative">
          <button
            onClick={() => setOpenProfile(!openProfile)}
            className="flex items-center space-x-2"
          >
              <span className="font-semibold hidden sm:inline-block">SAROWAR</span>
            <img
              src={SHUNNOIT}
              alt="profile"
              className="w-10 h-10 rounded-full cursor-pointer border"
            />
          
          </button>

          {openProfile && (
            <div
              className={`absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border rounded shadow-lg z-50`}
            >
              <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                <LogIn size={16} /> Login
              </button>
              <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Settings size={16} /> Settings
              </button>
            </div>
          )}
        </div>
      </div>
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? <X size={26} /> : <Menu size={26} />}
      </button>
      {openMenu && (
        <div
          className={`absolute top-20 left-0 w-full px-6 py-4 md:hidden shadow-md
           ${dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
        >
          <div className="flex flex-col space-y-4 text-base font-medium">
            {menuItems.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2 cursor-pointer">
                {item.icon} <span>{item.name}</span>
              </div>
            ))}

            {/* Dark Mode */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 w-fit rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenProfile(!openProfile)}
                className="flex items-center space-x-2 mt-2"
              >
                
                <img
                  src="https://i.pravatar.cc/40"
                  alt="profile"
                  className="w-10 h-10 rounded-full cursor-pointer border"
                />
                <span className="font-semibold">Sarowar</span>
              </button>
              {openProfile && (
                <div
                  className={`absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border rounded shadow-lg z-50`}
                >
                  <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <LogIn size={16} /> Login
                  </button>
                  <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Settings size={16} /> Settings
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  </div>
  <div className="">
<SupportTeam/>
  </div>
</div>
  );
};
export default Support;
