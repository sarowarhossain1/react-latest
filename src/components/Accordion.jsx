import React, { useState } from 'react'

const Accordion = ({items}) => {
    const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }
  return (
    <div>
         <div className="w-full max-w-2xl mx-auto space-y-3 border-0">
      {items.map((item, index) => (
        <div
          key={index}
          className="  shadow-sm "
        >
          <button
            onClick={() => toggle(index)}
            className="w-full p-4 border-0 flex justify-between items-center text-left text-pink-700 hover:border-2 hover:border-gray-400  font-bold  text-[18px]"
          >
            {item.title}
            <span className="text-3xl ">{openIndex === index ? "−" : "^"}</span>
          </button>

          <div
            className={`px-4 pb-4 mt-2 text-gray-800 dark:text-gray-800 border-0 text-[17px] font-bold transition-all duration-300 ${
              openIndex === index ? "block" : "hidden"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Accordion