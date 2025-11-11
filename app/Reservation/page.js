"use client";

import Section from "../Components/Section";
import Footer from "../Components/Footer";
export default function Reservation() {
    return (
        <div className="dark:bg-black bg-white">
            <Section />
        <div className="dark:bg-black bg-gray-100 flex flex-col md:flex-row justify-center items-start py-12 px-6 md:px-20">
      <div className="w-full md:w-1/2 flex justify-center">
        <iframe width="562" height="600" src="https://www.youtube.com/embed/F3zw1Gvn4Mk" title="Mr Fox Restaurant Promo Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          alt="Restaurant"
          className="h-[400px] w-full object-cover rounded-lg"
        </iframe>"
      </div>
      
<div className="md:w-1/2 w-full mt-10 md:mt-20 md:ml-10 dark:bg-black  bg-white">
        <h2 className="text-4xl font-bold mb-8 md:mt-[50px] ml-[60px]">Book A Table</h2>
        <div className="space-y-6 ml-[60px] h-[400px]">

 
  {/* <p className=""></p> */}

  <input
    type="text"
    placeholder="Phone"
    className="border border-gray-400 rounded-lg px-4 py-2 mb-4 w-[80%] "
  />
  <input
    type="number"
    placeholder="3 person"
    className="border border-gray-400 rounded-lg px-4 py-2 mb-4 w-[80%] "
  />

  <input
    type="date"
    className="border border-gray-400 rounded-lg px-4 py-2 mb-6 w-[80%] "
  />
  <input
    type="time"
    className="border border-gray-400 rounded-lg px-4 py-2 mb-6 w-[80%] "
  />

  <button className="bg-orange-900  text-white px-6 py-2 rounded-[10px] hover:bg-black transition">
    Book A Table
  </button>
</div>
     
      </div>
      </div>
    <div className="absolute top-[-150px]">
    <Footer />
    </div>
    </div>
   
    )
}