

export default function Contact() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <header className="flex justify-between items-center px-6 md:px-16 py-4 bg-black shadow-md fixed top-0 left-0 w-full z-50">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-yellow-700">🍽️ Restan</span>
        </div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <p className="hover:text-yellow-700 text-white">Home</p>
          <p className="hover:text-yellow-700 text-white">Pages</p>
          <p className="hover:text-yellow-700 text-white">Menu</p>
          <p className="hover:text-yellow-700 text-white">Blog</p>
          <p className="hover:text-yellow-700 text-white">Shop</p>
        </nav>

         <select className="hidden md:block bg-gray-400 text-white border border-gray-600 rounded px-1 text-sm">
            <option>English</option>
          
          </select>
      </header>

      <section
        className="bg-black text-white text-center py-28 md:py-40 bg-cover bg-center mt-[70px]"
        style={{ backgroundImage: "url('https://cdn.prod.website-files.com/67bdfd7ed46e178f2d23b4d6/6811176bb057ee9c77084046_How-to-Open-a-Sushi-Restaurant.webp')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
        <p className="text-sm md:text-base text-gray-300">
          Home <span className="text-yellow-400">&gt;</span> Contact
        </p>
      </section>

      <section className="py-10 px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="shadow-lg p-6 md:p-8 rounded-lg hover:shadow-xl transition">
          <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-blue-500">📞</div>
          <h2 className="font-semibold text-lg md:text-xl mb-1 md:mb-2">Hotline</h2>
          <p className="text-gray-600 text-sm md:text-base">+47 333 78901</p>
        </div>

        <div className="shadow-lg p-6 md:p-8 rounded-lg hover:shadow-xl transition">
          <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-red-500">📍</div>
          <h2 className="font-semibold text-lg md:text-xl mb-1 md:mb-2">Our Location</h2>
          <p className="text-gray-600 text-sm md:text-base">
            55 Main Street, The Grand Avenue 2nd
          </p>
        </div>

        <div className="shadow-lg p-6 md:p-8 rounded-lg hover:shadow-xl transition">
          <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-yellow-500">✉️</div>
          <h2 className="font-semibold text-lg md:text-xl mb-1 md:mb-2">Official Email</h2>
          <p className="text-gray-600 text-sm md:text-base">info@restan.com</p>
        </div>
      </section>

      <section className="bg-gray-50 py-10 md:py-14 px-6 md:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Send us a Message</h2>
        <form className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm md:text-base"
            />
            <input
              type="email"
              placeholder="Email *"
              required
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm md:text-base"
            />
          </div>
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border border-gray-300 p-3 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm md:text-base"
          />
          <textarea
            placeholder="Your Message *"
            required
            className="w-full border border-gray-300 p-3 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32 text-sm md:text-base"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-700 text-white px-6 py-3 rounded-md hover:bg-yellow-800 transition text-sm md:text-base"
          >
            Get In Touch
          </button>
        </form>

      </section>
    </div>
  );
}
