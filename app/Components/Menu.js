export default function Menu(){
    return (  <section className=" absolute bottom-[-3000px] left-[10px] absolute md:bottom-[-1800px] left-[-10px]  flex items-center justify-between md:ml-[-150px] ">
    <div className="bg-white dark:bg-black ">
        <div className="flex flex-col">
            <center>
            <p className="text-xl md:text-3xl dark:text-white text-gray-700 ">Food menu</p><br></br>
            <p className="text-3xl md:text-5xl dark:text-white text-black font-bold ">Our Specials Menu</p><br></br><br></br>
            <div className=" md:ml-[10px] flex-col flex md:flex-row text-sm md:text-2xl dark:text-white text-gray-700 rounded-xl border-3 w-[300px] md:w-[1350px] h-[100px] dark:border-white border-black py-3 gap-5"><span className="dark:bg-orange-400 bg-orange-400 hover:bg-amber-700 ">Main Dishes</span><br></br>
            <span className="hidden md:block dark:bg-black bg-black hover:bg-amber-700">Desserts</span><br></br> <br></br>
            <span className="hidden md:block dark:bg-black bg-white hover:bg-amber-700">Sea Food</span><br></br>
            <span className="hidden md:block dark:bg-black bg-white hover:bg-amber-700">Beverages</span><br></br></div> <br></br>
            <div className="flex flex-col flex md:flex-row md:gap-40">
                <div className="flex items-center  border rounded-3 p-5 shadow-sm ">
                    <div className="flex flex-col ">
                <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75" alt="Chicken" className="w-40 h-34 rounded-xl object-cover "/>
                
                <div className="flex items-center justify-between">
                    <p className="dark:text-white text-yellow-500 text-sm">4.9(5.7K)</p><br></br>
                   <p className="dark:text-white text-gray-400 line-through ">$35</p>
                   <p className="dark:text-white text-black font-semibold">$34</p>
                </div>
                <h3 className="text-xl font-bold mt-2 dark:text-white text-black">Braised Chicken Legs</h3>
                <p className="dark:text-white text-gray-500 text-sm mt-1">4 Chicken Legs • Chili Sauce •
                    Soft Drinks </p>
               <button className="dark:bg-amber-700 border border-gray-400 rounded-full px-4 py-2 mt-3 hover:bg-gray-700">🛒 Add to Cat</button>
                </div>
                </div>

                   <div className="flex items-center gap-5 border rounded-3 p-4 shadow-sm">
                    <div className="flex flex-col ">
                <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F2.jpg&w=1920&q=75" alt="Chicken" className="w-40 h-34 rounded-xl object-cover "/>
                
                <div className="flex items-center justify-between">
                    <p className="dark:text-white text-yellow-500 text-sm">4.2(3.1K)</p><br></br>
                    <p className="dark:text-white text-gray-400 line-through ">$25</p>
                     <p className="dark:text-white text-black font-semibold">$18</p>
                </div>
                <h3 className="text-xl font-bold mt-2 dark:text-white text-black">Bone Steak</h3>
                <p className="dark:text-white text-gray-500 text-sm mt-1">4 Chicken Legs • Chili Sauce •
                    Soft Drinks </p>
               <button className="dark:bg-amber-700 border border-gray-400 rounded-full px-4 py-2 mt-3 hover:bg-gray-700">🛒 Add to Cat</button>
                </div>
                </div>

                       <div className="flex items-center gap-5 border rounded-3 p-4 shadow-sm">
                    <div className="flex flex-col ">
                <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F3.jpg&w=1920&q=75" alt="Chicken" className="w-40 h-34 rounded-xl object-cover "/>
                
                <div className="flex items-center justify-between">
                    <p className="dark:text-white text-yellow-500 text-sm">4.8(6.7K)</p><br></br>
                  <p className="dark:text-white text-gray-400 line-through ">$18</p>
                <p className="dark:text-white text-black font-semibold">$12</p>
                </div>
                <h3 className="text-xl font-bold mt-2 dark:text-white text-black">Fish Tacos with Chipotle Crema</h3>
                <p className="dark:text-white text-gray-500 text-sm mt-1">4 Chicken Legs • Chili Sauce •
                    Soft Drinks </p>
               <button className="dark:bg-amber-700 border border-gray-400 rounded-full px-4 py-2 mt-3 hover:bg-gray-700">🛒 Add to Cat</button>
                </div>
                </div>
                </div> <br></br> <br></br>

      <div className="flex flex-col flex md:flex-row md:gap-40">
                <div className="flex items-center gap-5 border rounded-3 p-5 shadow-sm">
                    <div className="flex flex-col ">
                <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F4.jpg&w=1920&q=75" alt="Chicken" className="w-40 h-34 rounded-xl object-cover "/>
                
                <div className="flex items-center justify-between">
                    <p className="dark:text-white text-yellow-500 text-sm">5(3.5K)</p><br></br>
                   <p className="dark:text-white text-gray-400 line-through ">$38</p>
                   <p className="dark:text-white text-black font-semibold">$22</p>
                </div>
                <h3 className="text-xl font-bold mt-2 dark:text-white  text-black">Broken Lasagna & Parmesan</h3>
                <p className="dark:text-white text-gray-500 text-sm mt-1">4 Chicken Legs • Chili Sauce •
                    Soft Drinks </p>
               <button className="dark:bg-amber-700 border border-gray-400 rounded-full px-4 py-2 mt-3 hover:bg-gray-700">🛒 Add to Cat</button>
                </div>
                </div>

                   <div className="flex items-center gap-5 border rounded-3 p-4 shadow-sm">
                    <div className="flex flex-col ">
                <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F5.jpg&w=1920&q=75" alt="Chicken" className="w-40 h-34 rounded-xl object-cover "/>
                
                <div className="flex items-center justify-between">
                    <p className="dark:text-white text-yellow-500 text-sm">4.6(5.7K)</p><br></br>
                    <p className="dark:text-white text-gray-400 line-through ">$35</p>
                     <p className="dark:text-white text-black font-semibold">$34</p>
                </div>
                <h3 className="text-xl font-bold mt-2 dark:text-white text-black">Seared Scallops with Butter</h3>
                <p className="dark:text-white text-gray-500 text-sm mt-1">4 Chicken Legs • Chili Sauce •
                    Soft Drinks </p>
               <button className=" dark:bg-amber-700 border border-gray-400 rounded-full px-4 py-2 mt-3 hover:bg-gray-700">🛒 Add to Cat</button>
                </div>
                </div>

                       <div className="flex items-center gap-5 border rounded-3 p-4 shadow-sm">
                    <div className="flex flex-col ">
                <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F6.jpg&w=1920&q=75" alt="Chicken" className="w-40 h-34 rounded-xl object-cover "/>
                
                <div className="flex items-center justify-between">
                    <p className="dark:text-white text-yellow-500 text-sm">4.8(5.5K)</p><br></br>
                  <p className="dark:text-white text-gray-400 line-through ">$40</p>
                <p className="dark:text-whitetext-black font-semibold">$36</p>
                </div>
                <h3 className="text-xl font-bold mt-2 dark:text-white  text-black">Double-Stack Mushroom</h3>
                <p className="dark:text-white text-gray-500 text-sm mt-1">4 Chicken Legs • Chili Sauce •
                    Soft Drinks </p>
               <button className="dark:bg-amber-700 border border-gray-400 rounded-full px-4 py-2 mt-3 hover:bg-gray-700">🛒 Add to Cat</button>
                </div>
                </div>
                </div>
       </center>
        </div>
        </div>
        </section>
    )
}