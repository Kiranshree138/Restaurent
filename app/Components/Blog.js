export default function Blog() {
    return (
        <div className="absolute bottom-[-2500px] absolute md:bottom-[-1200px] mt-[-400px] ml-[-80px]">
            <div className="dark:bg-black bg-amber-50 w-[500px] md:w-[1350px] h-[800px] md:h-[500px] md:ml-[-150px]">
                <center>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl md:text-4xl dark:text-white  text-orange-400">News & Blog</h1> <br></br>
                        <p className="dark:text-white text-black text-xl md:text-2xl">Latest News & Blog</p>
                    </div>
                    <div className="flex flex-col flex md:flex-row md:gap-15">
                        <div className="flex flex-col">
                            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75" className="w-[500px] md:w-[700px] h-[250px] md:h-[300px] border-2 border-white "/> <br></br>
                            <h1 className="font-semibold dark:text-white  text-black ">Picked up a Brussels burger<br></br> Sprouts with ham</h1>
                        </div>
                        <div className="flex flex-col">
                            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75" className="w-[500px] md:w-[700px] h-[250px] md:h-[300px] border-2 border-white "/> <br></br>
                            <h1 className="font-semibold dark:text-white  text-black ">This prefabricated passive<br></br> house is highly sustainable</h1>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    )
}