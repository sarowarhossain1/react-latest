import React from "react";
import Accordion from "../../components/Accordion";
import SHUNNOIT from "../../assets/shunnoit7.png";
import Footerthree from "./Footerthree";


const Faque = ({ dark }) => {
  const faqItems = [
    {
      title: "হিসাবনিকাশ সফটওয়্যার কি?",
      content:
        "এটি একটি ইনভেন্টরি ম্যানেজমেন্ট সফটওয়্যার। হিসাবনিকশ সফটওয়্যার এর মাধ্যমে ব্যবসার সকল প্রকার আয়-ব্যয়, লাভ-ক্ষতি, পেমেন্ট রিসিভ, ইনভয়েস ও স্টক ট্র্যাকিং সহ দ্রুত এবং সহজে ব্যবসা পরিচালনার জন্য ব্যবহার করা যায়।",
    },
    {
      title: "হিসাবনিকাশ কেন ব্যবহার করবো?",
      content:
        "আপনার ব্যবসার ক্রয়-বিক্রয়, আয়-ব্যয়, স্টকসহ সকল প্রকার হিসাবনিকাশ এই সফটওয়্যার এর মাধ্যমে করতে পারেন।",
    },
    {
      title: "এই সফটওয়্যারে কিস্তিতে বিক্রি করা যায়?",
      content:
        "জি, এই সফটওয়্যারে কিস্তিতে পণ্য বিক্রি করা যায়। কিস্তি কার্ড প্রিন্ট করা যায় এবং প্রতি কিস্তির আলাদা আলাদা হিসাব রাখা যায়।।",
    },
    {
      title: "গ্রাহক এর লেজার দেখা যায়?",
      content:
        "জি, হিসাবনিকাশ সফটওয়্যারে প্রতিটি গ্রাহকের আলাদা আলাদা লেজার দেখা যায় এবং প্রিন্ট করা যায়।",
    },
    {
      title: "এই সফটওয়্যারে মাসিক রিপোর্ট পাওয়া যায়?",
      content:
        "হিসাবনিকাশ সফটওয়্যারে দৈনিক, মাসিক, এবং বাৎসরিক রিপোর্ট পাওয়া যায়।",
    },
    {
      title: "এই সফটওয়্যারে বারকোড কাজ করে?",
      content:
        "জি, হিসাবনিকাশ সফটওয়্যারে বারকোড জেনারেট করা যায় এবং বারকোড রিডার ব্যবহার করে স্ক্যান করতে পারবেন।",
    },
    {
      title: "কাদের জন্য এই সফটওয়ার?",
      content:
        "সকল প্রকার পাইকারি এবং খুচরা বিক্রেতাগণ এই সফটওয়্যার ব্যবহার করতে পারেন।",
    },
    {
      title: "কোন কোন ডিভাইসে এই সফটওয়্যার ব্যবহার করা যাবে?",
      content:
        "আপনার কম্পিউটার, মোবাইল বা ট্যাব এর মাধ্যমে এই সফটওয়্যার ব্যবহার করা যায় এবং ছোট-বড় সকল প্রকার প্রিন্টার ব্যবহার করে ইনভয়েস প্রিন্ট করা যায়।",
    },
  ];

  return (
    <div>
      <div className="bg-[#CFE2FF]">
        <div className="shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 m-15 ">
            <div className="mt-20 mx-32">
              <div className="mb-4">
                <h3 className="text-2xl font-inter font-bold font-sans-sarif">
                  প্রায় জিজ্ঞাসিত প্রশ্নাবলী (FAQ)
                </h3>
              </div>
              <div className="">
                <Accordion items={faqItems} className="bg-amber-950" />
              </div>
            </div>
            <div>
              <img
                src={SHUNNOIT}
                alt=""
                className="transition transform duration-300 hover:scale-105 w-[750px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-15">
       <Footerthree/>
      </div>
    </div>
  );
};

export default Faque;
