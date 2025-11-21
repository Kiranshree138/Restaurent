import Footer from '../Components/Footer'
export default function ChefsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="w-full bg-black text-white text-sm flex flex-col sm:flex-row justify-between items-center px-6 py-2">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <p className='hidden md:block'>📞 Phone: +47 333 78901</p>
          <p className="hidden md:block sm:ml-6">✉ Email: food@restan.com</p>
        </div>
        <div className="flex items-center gap-3 mt-2 sm:mt-0">
          <select className="hidden md:block bg-black text-white border border-gray-600 rounded px-1 text-sm">
            <option>English</option>
          
          </select>
          <div className="flex gap-2">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" className="hidden md:block w-4 h-4" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" className="hidden md:block w-4 h-4" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" className="hidden md:block w-4 h-4" /></a>
          </div>
        </div>
      </div>

      <div className="w-full bg-black bg-opacity-70 text-white flex justify-between items-center px-6 py-4">
        <h2 className="text-2xl font-bold text-[#9c8350]">RESTAN</h2>
        <div className="hidden sm:flex gap-6 text-sm">
          <p className="hover:text-[#9c8350]">Home</p>
          <p className="hover:text-[#9c8350]">Pages</p>
          <p className="hover:text-[#9c8350]">Menu</p>
          <p className="hover:text-[#9c8350]">Blog</p>
          <p className="hover:text-[#9c8350]">Shop</p>
        </div>
        <button className="bg-[#9c8350] text-white px-3 py-1 rounded-md text-sm">Reservation</button>
      </div>

      <div
        className="w-full h-[250px] sm:h-[320px] bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/67bdfd7ed46e178f2d23b4d6/6811176bb057ee9c77084046_How-to-Open-a-Sushi-Restaurant.webp')",
        }}
      >
        <h1 className="text-white text-3xl sm:text-4xl font-bold">Restaurant Chef</h1>
        <p className="text-white text-sm sm:text-base mt-1">Home &gt; Chef</p>
      </div>

      <div className="text-center mt-10 mb-6 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Meet Our Special Chefs
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 pb-10">
        <div className="flex flex-col items-center text-center shadow-md p-4 rounded-xl hover:shadow-lg">
          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-gray-300 mb-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStb8aXrCrjdndki_-6mery4Bij_YfQr2LsBg&s" alt="Alexender Petllo" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#9c8350] text-white py-2 px-6 rounded-tr-[20px] rounded-bl-[20px]">
            <h3 className="text-lg font-semibold">Alexander Petllo</h3>
            <p className="text-sm">Assistant Chef</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center shadow-md p-4 rounded-xl hover:shadow-lg">
          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-gray-300 mb-4">
            <img src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/3-2.jpg" alt="Petro william" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#9c8350] text-white py-2 px-6 rounded-tr-[20px] rounded-bl-[20px]">
            <h3 className="text-lg font-semibold">Petro William</h3>
            <p className="text-sm">Main Chef</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center shadow-md p-4 rounded-xl hover:shadow-lg">
          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-gray-300 mb-4">
            <img src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/2-2.jpg" alt="Mendia Juxef" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#9c8350] text-white py-2 px-6 rounded-tr-[20px] rounded-bl-[20px]">
            <h3 className="text-lg font-semibold">Mendia Juxef</h3>
            <p className="text-sm">Burger King</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center shadow-md p-4 rounded-xl hover:shadow-lg">
          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-gray-300 mb-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCRdbzJa-vc9t4P-0UjqUmeTxCddOpmDTrw&s" alt="John Carlo" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#9c8350] text-white py-2 px-6 rounded-tr-[20px] rounded-bl-[20px]">
            <h3 className="text-lg font-semibold">John Carlo</h3>
            <p className="text-sm">Pastry Chef</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center shadow-md p-4 rounded-xl hover:shadow-lg">
          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-gray-300 mb-4">
            <img src="https://media.licdn.com/dms/image/v2/C5603AQGyF9iwDE7eqA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1626126430505?e=2147483647&v=beta&t=sjhYlCfXw6p8Z2rMODkkNUpPtF6I5NBfKSfQqYvC-sQ" alt="Maria Lopez" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#9c8350] text-white py-2 px-6 rounded-tr-[20px] rounded-bl-[20px]">
            <h3 className="text-lg font-semibold">Maria Lopez</h3>
            <p className="text-sm">Dessert Chef</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center shadow-md p-4 rounded-xl hover:shadow-lg">
          <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-gray-300 mb-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJYHl7qW0cYvqQso9n1DWrWjHvQlEm7Crjg&s" alt="Steve Morgan" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#9c8350] text-white py-2 px-6 rounded-tr-[20px] rounded-bl-[20px]">
            <h3 className="text-lg font-semibold">Steve Morgan</h3>
            <p className="text-sm">Grill Master</p>
          </div>
        </div>
        <div className="absolute top-[700px]  md:top-[-100px]">
        <Footer/>
        </div>
      </div>
      
    </div>
  );
}