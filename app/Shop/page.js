"use client";

import { useState } from "react";

export default function Shop() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Margherita Pizza", price: 8, image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F2.png&w=1080&q=75" },
    { id: 2, name: "Margherita Pizza", price: 12, image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F1.png&w=1080&q=75" },
    { id: 3, name: "Grilled Flank Steak", price: 14, image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F3.png&w=1080&q=75" },
    { id: 4, name: "Barbecue Chicken", price: 8, image: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshop%2F5.png&w=1080&q=75" },
  ];

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className=" bg-white  min-h-screen text-gray-800">
      <header className="flex justify-between items-center px-6 md:px-16 py-4 dark:bg-black bg-white shadow-md fixed top-0 left-0 w-full z-50">
                <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" className=" md:ml-[500px] ml-[-100px] md:w-[150px] w-[80px] absolute top-[10px] absolute md:top-[60px] left-70"/>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <p className="hover:text-yellow-700 dark:text-white">Home</p>
          <p className="hover:text-yellow-700 dark:text-white ">Pages</p>
          <p className="hover:text-yellow-700 dark:text-white">Menu</p>
          <p className="hover:text-yellow-700 dark:text-white">Blog</p>
          <p className="hover:text-yellow-700 dark:text-white">Shop</p>

           <select className="hidden md:block bg-black text-white border border-gray-600 rounded px-1 text-sm">
            <option>English</option>
          
          </select>
        </nav>
        <div className="relative text-2xl">
          🛒
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-yellow-700 text-white text-xs px-1.5 rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </header>

      <section
        className="bg-black text-white text-center py-28 md:py-40 bg-cover bg-center mt-[70px]"
        style={{ backgroundImage: "url('https://cdn.prod.website-files.com/67bdfd7ed46e178f2d23b4d6/6811176bb057ee9c77084046_How-to-Open-a-Sushi-Restaurant.webp')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Special Food</h1>
        <p className="text-sm md:text-base text-gray-300">
          Home <span className="text-yellow-400">&gt;</span> Shop
        </p>
      </section>

      <section className="py-10 px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden shadow text-center">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600 mb-4">${item.price}</p>
                {cart.some((c) => c.id === item.id) ? (
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm"
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-yellow-700 text-white px-4 py-2 rounded-md hover:bg-yellow-800 text-sm"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="mt-10 bg-gray-50 p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <h2 className="text-lg font-semibold mb-3">Your Cart</h2>
            <ul className="divide-y divide-gray-200 text-sm mb-3">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between py-2">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
