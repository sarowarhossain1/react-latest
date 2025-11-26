import React from "react";
import EVERYHERE from "../../assets/everyhere.webp";
import ITLOGO from "../../assets/itlogo.svg";
import ITLOGO1 from "../../assets/itlogo1.svg";
import { ArrowRight } from "lucide-react";
import Pricing from "./Pricing";


const Appinventory = () => {
  return (
    <div>
        <div>
            <div className="bg-[#F94049] py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center container mx-auto px-8">
        {/* LEFT CONTENT */}
        <div className="md:pl-20">
          <p className="text-yellow-200 font-serif text-xl mb-3">
            WITH YOU EVERYWHERE
          </p>

          <h3 className="text-5xl text-white mb-2 font-serif">
            Inventory apps to
          </h3>
          <h3 className="text-5xl text-white mb-8 font-serif">
            close deals on the go
          </h3>

          <div className="flex gap-4 cursor-pointer">
            <img src={ITLOGO} alt="Logo" className="w-40" />
            <img src={ITLOGO1} alt="Logo2" className="w-40" />
          </div>

          <div className="flex mt-6 items-center gap-2 cursor-pointer group">
            <h3 className="text-xl font-semibold text-white font-mono">
              <a href="#">Check out our mobile apps</a>
            </h3>

            <ArrowRight
              className="text-white mt-1 transform transition duration-300 group-hover:translate-x-2 cursor-pointer"
            />
          </div> 
    
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center mt-40 md:mt-0">
          <img
            src={EVERYHERE}
            alt="Everywhere"
            className="w-[880px]  cursor-pointer"
          />
        </div>
      </div>
    </div>
        </div>
        <div className="">
            <Pricing/>
        </div>
    </div>
  );
};

export default Appinventory;
