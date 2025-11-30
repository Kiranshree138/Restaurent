"use client";
import { useRouter } from "next/navigation";
import Food from "./Components/Food";
import Menu from "./Components/Menu";
import Timings  from "./Components/Timings";
import Chef from "./Components/Chef";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";

export default function Homepage(){
  const router = useRouter();
  
  
  return (
    
    <div className="bg-white overflow-x-hidden dark:bg-black">
   <div className=" relative w-[450px] md:w-full md:h-[700px] h-[300px] ">
    
    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    className="w-[500px] md:w-full object-cover rounded-2xl"/>
    <p className="hidden md:block absolute top-5 left-5 text-white text-0.5xl font-semibold ml-[100px]"> Phone: +4733378901</p>
     <p className="hidden md:block absolute top-5 left-5 text-white text-0.5xl font-semibold ml-[300px]">Email: food@restan.com</p>
     <p className="hidden md:block absolute top-5 right-5 text-white text-0.5xl font-semibold">175 10h Street, Office 375 Berlin, De 21562</p>  
     <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-white opacity-100"></div>
     <div className="flex flex-col">
     <div className="flex flex-row ">
        
        <select className="hidden md:block absolute top-20 left-10 hover:text-orange-300 text-white ml-[350px] text-lg"><option>Home</option>
        <option>Page 1</option>
        <option>Page 2</option>
        <option>Page 3</option>
        <option>Page 4</option>
        </select>
         
         <select onClick={() => router.push('/Pages')} className="hidden md:block absolute top-20 left-30  hover:text-orange-300 text-white ml-[400px] text-lg"><option>Pages</option><option>AboutUs</option>
         
      </select>
        <select onClick={() => router.push('/Menu')} className="hidden md:block absolute top-20 left-50  hover:text-orange-300 text-white ml-[450px] text-lg"><option>Menu</option>
        
        </select>
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" className=" md:ml-[500px] ml-[-100px] md:w-[150px] w-[80px] absolute top-[10px] absolute md:top-[60px] left-70"/>
         <select onClick={() => router.push('/Blog')} className="hidden md:block absolute top-20 left-160  hover:text-orange-300 text-white ml-[400px] text-lg"><option>Blog</option>
         
      </select>
        <select  onClick={() => router.push('/Shop')} className="hidden md:block absolute top-20 left-180  hover:text-orange-300 text-white ml-[400px] text-lg"><option>Shop</option>
         </select>
        <div onClick={() => router.push('/Contact')} className="hidden md:block absolute top-20 left-200  hover:text-orange-300 text-white ml-[400px] text-lg">Contact Us</div>
   </div>
   <div className="text-white md:text-7xl text-3xl md:mt-4 mt-[500px] absolute md:top-1/4 md:left-[550px] absolute top-[-400px] ml-[95px] font-bold">Best Restaurant</div>
   <section className=" absolute top-[150px] left-[180px] absolute md:top-2/3 md:left-[750px] w-20 md:w-40 h-20 md:h-40 rounded-full border-2 border-white flex items-center justify-center text-white text-sm md:text-lg font-semibold   text-white font-semibold ">Best Food <br></br>
   since 1965
   </section>
      <section className="flex justify-between items-start gap-8 p-0 shadow-amber-50">
    <div className="w-[360px] md:w-[500px] h-[600px] bg-white dark:bg-black rounded-3xl p-6 absolute md:bottom-[-900px] left-[20px] absolute bottom-[-650px] left-[20px]">
    
    <div className="flex items-center gap-3">
        <div className="w-12 h-12 border-3 rounded full border-white border-orange-400  flex center items-center justify-center">
            🍴
        </div>
        <p className=" text-4xl dark:text-white text-black font-semibold">Book a Table</p>

    </div>
    <form className="flex flex-col gap-3 dark:text-white text-black">
        <input type="text" placeholder="Name" className="border p-2 border-black rounded-lg" />
        <input type="text" placeholder="Phone" className="border p-2 rounded-lg" />
   <input type="number" placeholder="3 person " className="border p-2 rounded-lg" />
   <input type="date" placeholder="Date" className="border p-2 rounded-lg" />
       <input type="time"  className="border p-2 rounded-lg" />
       <button className="bg-orange-300 text-white py-2 rounded-lg mt-2 hover:bg-black">Book a table</button>
    </form>
    </div>

    <div className="md:w-1/2 w-[350px] dark:bg-black bg-white rounded-2xl p-10 mt-[40px] absolute md:bottom-[-800px] right-[400px] md:ml-[600px] absolute bottom-[-2250px] left-[20px]">
    <h2 className="text-4xl dark:text-white text-black font-semibold mb-4 items-center justify-center">🔥Our Popular Category </h2>
    <div className="flex flex-col md:grid grid-cols-4 gap-4">
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F26.jpg&w=1920&q=75" alt="Cheesecake" className="rounded-lg  text-black"/>
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F28.jpg&w=1920&q=75" alt="Hot chocolate" className="rounded-lg text-black"/>
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F27.jpg&w=1920&q=75" alt="Salmon Fry" className="rounded-lg  text-black"/>
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F25.jpg&w=1920&q=75" alt="Chicken Alfredo" className="rounded-lg  text-black"/>
      
    </div>
    </div>
   </section>
   <div className=" flex flex-col flex md:flex-row absolute md:bottom-[-1200px] absolute bottom-[-3100px] items-center justify-center md:ml-[300px] ml-[10px]">
   <Food />
   <Menu />
   
   <div className="absolute bottom-[600px] ml-[30px] absolute md:bottom-[2100px] mb-[-4500px]  w-[350px] md:w-[1350px] h-[800px] md:h-[500px] bg-gray-700 border-4 rounded-4xl md:ml-[-100px] ">
    <div className="flex flex-col flex md:flex-row">
    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75" className="w-[200px] md:w-[500px] h-[200px] md:h-[500px] mt-[20px] md:mt-[10px] ml-[30px] md:ml-1" />
    <div className="flex flex-col">
     <h1 className="font-extrabold text-white ml-[20px] mt-[100px] text-4xl">Are you Ready to Start <br></br> your online Order? </h1>
     <p className="mt-[40px] ml-[20px] text-white text-sm ">Bndulgence diminution so discovered mr apartments. Are off under folly death <br></br> wrote cause her way spite. Plan upon yet way get cold spot its week. Almost<br></br> do am or limits hearts. Resolve parties but why she shewing. She sang know now</p>
     <div className="flex flex-col flex md:flex-row">
      <button className=" w-[100px] md:w-[150px] rounded-4xl border-5 bg-white hover:bg-black text-gray-800 ml-[80px]">App Store</button><br></br> <br></br>
      <button className="w-[100px] md:w-[150px] rounded-4xl border-4 bg-orange-500 hover:bg-white text-gray-800 ml-[80px] md:ml-[10px]">Play Store</button>
     </div>
    </div>
   </div>
   
   </div>
<div className="flex flex-col md:flex-row absolute md:bottom-[-3200px] bottom-[-5000px] items-center justify-center ml-[10px] md:ml-[40px]">


    <Timings/>
    <Chef/>
    <Blog/>
    <Footer/>
   </div>
  </div>
   </div>
   
    </div>
    </div>
  )
}
