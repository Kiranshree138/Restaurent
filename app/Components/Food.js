
export default function Food() {
return (
  
    <div className="flex flex-col">
      <form className="rounded-3xl bg-amber-50 dark:bg-black boredr-3 shadow-amber-50 border-white md:w-[1300px] md:h-[250px] md:ml-[-150px]">
    <div className="flex flex-col flex md:flex-row gap-10  ">
        <div className="flex flex-col ml-[30px] md:ml-[10px] items-start justify-around">
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75" className="w-[100px] h-[100px] justify-center"/>
        <div className="dark:text-white text-gray-800 "><span className="font-bold dark:text-white text-black">Quality Foods</span><br></br> <br></br>
        Belonging sir curiosity discovery extremity yet<br></br> forfeited prevailed own off. Traveling by<br></br> introduced of mr terminated.</div>
        </div> 
         <div className="flex flex-col ml-[30px]  md:ml-[70px] items-baseline-last justify-center">
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=640&q=75" className="w-[100px] h-[100px] justify-center"/>
        <div className="dark:text-white text-gray-800 "><span className="font-bold dark:text-white text-black">Fast Delivery</span><br></br> <br></br>
          Belonging sir curiosity discovery extremity yet <br></br>forfeited prevailed own off. Traveling by<br></br> introduced of mr terminated.</div>
        </div>
         <div className="flex flex-col ml-[30px] md:ml-[100px] items-baseline-last justify-end">
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F15.png&w=640&q=75" className="w-[100px] h-[100px] justify-center"/>
        <div className="dark:text-white text-gray-800 "><span className="font-bold dark:text-white text-black">Delicious Recipes</span><br></br> <br></br>
        Belonging sir curiosity discovery extremity yet<br></br> forfeited prevailed own off. Traveling by<br></br> introduced of mr terminated.</div>
        </div>
         </div>
        </form>

    <section className="w-[350px] md:w-[1350px] h-[700px] md:h-[650px] absolute md:bottom-[-700px] left-[10px] md:ml-[-150px] absolute bottom-[-800px] left-[10px]  flex items-center justify-between bg-amber-500 p-20 rounded-2xl">
        <div className="flex flex-col flex md:flex-row">
         <div >
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=1080&q=75" className="hidden md:block w-[100px] h-[100px] mt-[-150px] ml-[10px]"/><br></br>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=1080&q=75" className="w-[200px] h-[200px] mt-[10px] md:mt-[-100px] ml-[10px] md:ml-[100px]"/> <br></br>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=1080&q=75" className="hidden md:block w-[100px] h-[100px] mt-[-50px] ml-[10px]"/> <br></br>
            </div>
            <div className="flex flex-col">
            <p className="text-black mr-[10px] md:mr-[100px] mt-[-10px] md:mt-[-150px] ml-[10px] md:ml-[150px] text-xl md:text-3xl">Today Special Offer</p><br></br><br></br>
            <p className="text-black mr-[100px] mt-[-1px] ml-[10px] md:ml-[150px] text-3xl md:text-4xl font-extrabold"><span>Explore Irresistible</span> <br></br>Promotions!</p><br></br>
            <p className="dark:text-black text-shadow-gray-500 mr-[100px] mt-[-1px] ml-[10px] md:ml-[150px] text-sm">Contrasted dissimilar get joy you instrument out<br></br> reasonably.Again keeps at no meant stuff. To perpetual do existence <br></br>northward as difficult preserved daughters. Continued at up to zealously necessary.</p> <br></br>
            <button className="ml-[10px] md:ml-[150px] w-[150px] md:w-[300px] h-[50px] rounded-4xl border-4 bg-amber-800 hover:bg-black text-white">Order Now</button>
            </div>
            </div>
            </section>
        </div>
        

)
}