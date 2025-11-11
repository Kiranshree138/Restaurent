"use client";

import { useState } from "react";
import Footer from "../Components/Footer";

export default function MenuPage() {
  const [tab, setTab] = useState("menu");


  const foodItems = [
    {
      name: "Chicken Alfredo",
      desc: "Creamy sauce with grilled chicken and parmesan",
      offer: "Comes with free drink",
      half: "$20",
      full: "$40",
    },
    {
      name: "Fish & Chips",
      desc: "Crispy battered fish with fries and tartar sauce",
      offer: "Comes with free drink",
      half: "$36",
      full: "$70",
    },
    {
      name: "Steak Fillet",
      desc: "Grilled beef with pepper sauce and mashed potatoes",
      offer: "Comes with free drink",
      half: "$44",
      full: "$85",
    },
    {
      name: "Grilled Chicken",
      desc: "Tender chicken served with veggies and rice",
      offer: "Comes with free drink",
      half: "$20",
      full: "$40",
    },
  ];

  
  const desserts = [
    {
      name: "Brownie",
      desc: "Rich chocolate brownie with ice cream",
      offer: "Free juice with order",
      half: "$15",
      full: "$25",
    },
    {
      name: "Cheesecake",
      desc: "Classic creamy cheesecake slice",
      offer: "Free juice with order",
      half: "$18",
      full: "$30",
    },
    {
      name: "Muffins",
      desc: "Freshly baked muffins with choco chips",
      offer: "Free juice with order",
      half: "$12",
      full: "$20",
    },
    {
      name: "Cupcakes",
      desc: "Soft cupcakes topped with frosting",
      offer: "Free juice with order",
      half: "$10",
      full: "$18",
    },
  ];

  
  const seafood = [
    {
      name: "Salmon Fry",
      desc: "Pan-seared salmon with herbs and lemon",
      offer: "Free drink with order",
      half: "$28",
      full: "$50",
    },
    {
      name: "Prawn Curry",
      desc: "Spicy prawns cooked in coconut gravy",
      offer: "Free drink with order",
      half: "$26",
      full: "$48",
    },
    {
      name: "Clams",
      desc: "Fresh clams in garlic butter sauce",
      offer: "Free drink with order",
      half: "$22",
      full: "$40",
    },
    {
      name: "Red Crab",
      desc: "Juicy crab tossed with pepper sauce",
      offer: "Free drink with order",
      half: "$30",
      full: "$55",
    },
  ];

  return (
    <div className="w-full min-h-screen dark:bg-black  bg-white dark:text-white  text-gray-800">
      
      <div
        className="relative h-[80vh] flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/colorful-spices-with-copy-space-text-generative-ai_109161-220.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        
        <div className="hidden md:block absolute top-0 left-0 w-full flex flex-col md:flex-row justify-between items-center px-6 py-3 text-sm z-10">
          <div className="flex-row gap-3 text-center text-left">
            <span>📞 +4733378901</span>
            <span>📧 food@restan.com</span>
          </div>
          <span>📍 175 10th Street, Office 375 Berlin</span>
        </div>

        
        <div className="absolute top-14 left-0 w-full flex justify-between items-center px-8 md:px-12 py-5 z-10">
          <div className="hidden md:flex gap-8">
            <div className="hover:text-yellow-400 cursor-pointer">Home</div>
            <div className="hover:text-yellow-400 cursor-pointer">Pages</div>
            <div className="hover:text-yellow-400 cursor-pointer">Menu</div>
          </div>

          <img
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
            alt="logo"
            className="h-10"
          />

          <div className="hidden md:flex gap-8">
            <div className="hover:text-yellow-400 cursor-pointer">Blog</div>
            <div className="hover:text-yellow-400 cursor-pointer">Shop</div>
          </div>
        </div>

        
        <div className="relative z-10 mt-24">
          <h1 className="text-5xl font-bold mb-3">Our Menu</h1>
          <p className="text-lg">Home › Menu</p>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto py-20 px-6 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <img
            src="https://restan-nextjs.vercel.app/assets/img/banner/10.jpg"
            alt="food"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-6">Main Dishes</h2>
          {foodItems.map((item, index) => (
            <div key={index} className="mb-6 border-b pb-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-sm">{item.desc}</p>
              <p className="text-sm text-gray-500">{item.offer}</p>
              <p className="mt-1 text-sm">
                Half: {item.half} | Full: {item.full}
              </p>
            </div>
          ))}
        </div>
      </div>

      
      <div className="dark:bg-black bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6">Desserts</h2>
            {desserts.map((item, index) => (
              <div key={index} className="mb-6 border-b pb-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-sm">{item.desc}</p>
                <p className="text-sm text-gray-500">{item.offer}</p>
                <p className="mt-1 text-sm">
                  Half: {item.half} | Full: {item.full}
                </p>
              </div>
            ))}
          </div>

          <div className="md:w-1/2">
            <img
              src="https://restan-nextjs.vercel.app/assets/img/banner/11.jpg"
              alt="dessert"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <img
              src="https://restan-nextjs.vercel.app/assets/img/banner/12.jpg"
              alt="seafood"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6">Seafood Specials</h2>
            {seafood.map((item, index) => (
              <div key={index} className="mb-6 border-b pb-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-sm">{item.desc}</p>
                <p className="text-sm text-gray-500">{item.offer}</p>
                <p className="mt-1 text-sm">
                  Half: {item.half} | Full: {item.full}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-800px]">
        <Footer/>
      </div>
    </div>
  );
}