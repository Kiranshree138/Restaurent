
export default function Section() {
  return (
   
    <div className="md:h-[500px] h-[100px]">
        <img src="https://www.dailynews.com/wp-content/uploads/2020/12/SGT-L-DINE-SUSHIROLLS-1204-4-1.jpg?w=1600&resize=1600,900"  className="md:w-full md:h-full object-cover"/>

       <p className="hidden md:block absolute top-5 left-5 text-white text-0.5xl font-semibold ml-[100px]"> Phone: +4733378901</p>
     <p className="hidden md:block absolute top-5 left-5 text-white text-0.5xl font-semibold ml-[300px]">Email: food@restan.com</p>
     <p className="hidden md:block absolute top-5 right-5 text-white text-0.5xl font-semibold">175 10h Street, Office 375 Berlin, De 21562</p>  
     <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-white opacity-100"></div>
     <div className="flex flex-col">
     <div className="flex flex-row">
        
        <div className="hidden md:block absolute top-20 left-10 hover:text-orange-300 text-white ml-[400px] text-lg">Home</div>
         
         <p onClick={() => router.push('/Pages')} className="hidden md:block absolute top-20 left-30  hover:text-orange-300 text-white ml-[400px] text-lg">Pages</p>
        <p onClick={() => router.push('/Menu')} className="hidden md:block absolute top-20 left-50  hover:text-orange-300 text-white ml-[400px] text-lg">Menu</p>
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" className=" md:ml-[500px] ml-[-100px] md:w-[150px] w-[80px] absolute top-[10px] absolute md:top-[60px] left-70"/>
         <p onClick={() => router.push('/Blog')} className="hidden md:block absolute top-20 left-160  hover:text-orange-300 text-white ml-[400px] text-lg">Blog</p>
        <p  onClick={() => router.push('/Shop')} className="hidden md:block absolute top-20 left-180  hover:text-orange-300 text-white ml-[400px] text-lg">Shop</p>
        <p onClick={() => router.push('/Contact')} className="hidden md:block absolute top-20 left-200  hover:text-orange-300 text-white ml-[400px] text-lg">Contact Us</p>
        </div>
   </div>
   </div>
      )
      }