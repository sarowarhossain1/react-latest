import React from "react";
import Accordion from "../../components/Accordion";
import SHUNNOIT from "../../assets/shunnoit7.png";
import Google from "./Google";

const Question = ({ dark }) => {
  const faqItems = [
    { title: "হিসাবনিকাশ সফটওয়্যার কি?", content: "এটি একটি ইনভেন্টরি ম্যানেজমেন্ট সফটওয়্যার..." },
    { title: "হিসাবনিকাশ কেন ব্যবহার করবো?", content: "আপনার ব্যবসার ক্রয়-বিক্রয়..." },
    { title: "এই সফটওয়্যারে কিস্তিতে বিক্রি করা যায়?", content: "জি, এই সফটওয়্যারে কিস্তিতে..." },
    { title: "গ্রাহক এর লেজার দেখা যায়?", content: "জি, হিসাবনিকাশ সফটওয়্যারে প্রতিটি..." },
    { title: "এই সফটওয়্যারে মাসিক রিপোর্ট পাওয়া যায়?", content: "হিসাবনিকাশ সফটওয়্যারে দৈনিক..." },
    { title: "এই সফটওয়্যারে বারকোড কাজ করে?", content: "জি, হিসাবনিকাশ সফটওয়্যারে বারকোড..." },
    { title: "কাদের জন্য এই সফটওয়ার?", content: "সকল প্রকার পাইকারি এবং খুচরা..." },
    { title: "কোন কোন ডিভাইসে ব্যবহার করা যাবে?", content: "কম্পিউটার, মোবাইল বা ট্যাব..." },
  ];

  return (
    <div>
      <div className="bg-[#CFE2FF] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              প্রায় জিজ্ঞাসিত প্রশ্নাবলী (FAQ)
            </h3>

            <div className="shadow-lg bg-white rounded-lg p-4">
              <Accordion items={faqItems} />
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={SHUNNOIT}
              alt=""
              className="w-full max-w-md transition-transform duration-300 hover:scale-105"
            />
          </div>

        </div>
      </div>

      {/* Google Section */}
      <div className="-mt-10">
        <Google />
      </div>
    </div>
  );
};

export default Question;
