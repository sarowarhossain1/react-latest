import React from "react";
import EVERYHERE from "../../assets/everyhere.webp";
import ITLOGO from "../../assets/itlogo.svg";
import ITLOGO1 from "../../assets/itlogo1.svg";
import { ArrowRight } from "lucide-react";
import Pricing from "./Pricing";

const Appinventory = () => {
  return (
    <div className="">
      <div className="bg-[#F94049] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 md:px-12">
          <div className="md:pl-12 text-center md:text-left">
            <p className="text-yellow-200 text-lg md:text-xl mb-3 font-inter">
              WITH YOU EVERYWHERE
            </p>

            <h3 className="text-3xl md:text-4xl text-white mb-2 font-inter font-bold">
              Inventory apps to
            </h3>
            <h3 className="text-3xl md:text-4xl text-white mb-6 md:mb-8 font-inter font-bold">
              close deals on the go
            </h3>

            <div className="flex justify-center md:justify-start gap-4 cursor-pointer mb-6">
              <img src={ITLOGO} alt="Logo" className="w-24 md:w-28 max-w-full" />
              <img src={ITLOGO1} alt="Logo2" className="w-24 md:w-28 max-w-full" />
            </div>

            <div className="flex justify-center md:justify-start items-center gap-2 cursor-pointer group">
              <h3 className="text-lg md:text-xl font-semibold text-white font-inter">
                <a href="#">Check out our mobile apps</a>
              </h3>

              <ArrowRight
                className="text-white mt-1 transform transition duration-300 group-hover:translate-x-2"
              />
            </div>
          </div>
          <div className="flex justify-center mt-12 md:mt-0">
            <img
              src={EVERYHERE}
              alt="Everywhere"
              className="w-full max-w-[580px] object-contain"
            />
          </div>
        </div>
      </div>

      <Pricing />
    </div>
  );
};

export default Appinventory;
