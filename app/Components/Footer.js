export default function Footer() {
    return (
        <div className="absolute bottom-[-2500px] absolute md:bottom-[-1800px] w-[1600px] flex flex-col flex md:flex-row">
          <div >
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="dark:text-white text-gray-400 text-sm leading-relaxed mb-4">
            Continued at zealously necessary is surrounded sir motionless she end
            literature. Gay direction neglected.
          </p>
          <div className="flex space-x-3">
            <div className="bg-gray-700 hover:bg-yellow-600 p-2 rounded">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="bg-gray-700 hover:bg-yellow-600 p-2 rounded">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="bg-gray-700 hover:bg-yellow-600 p-2 rounded">
              <i className="fa-brands fa-youtube"></i>
            </div>
            <div className="bg-gray-700 hover:bg-yellow-600 p-2 rounded">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        </div>

        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Explore</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-yellow-600 cursor-pointer">Company Profile</li>
            <li className="hover:text-yellow-600 cursor-pointer">About</li>
            <li className="hover:text-yellow-600 cursor-pointer">Help Center</li>
            <li className="hover:text-yellow-600 cursor-pointer">Career</li>
            <li className="hover:text-yellow-600 cursor-pointer">Features</li>
            <li className="hover:text-yellow-600 cursor-pointer">Contact</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center space-x-3">
              <div className="bg-yellow-600 p-2 rounded">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <p>175 10th Street, Office 375 Berlin, DE 21562</p>
            </li>
            <li className="flex items-center space-x-3">
              <div className="bg-yellow-600 p-2 rounded">
                <i className="fa-solid fa-phone"></i>
              </div>
              <p>+123 34598768<br />+554 34598734</p>
            </li>
            <li className="flex items-center space-x-3">
              <div className="bg-yellow-600 p-2 rounded">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <p>food@restan.com</p>
            </li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
          <p className="text-gray-400 text-sm mb-4">
            Join our subscribers list to get the latest news and special offers.
          </p>
          <div className="relative mb-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-gray-500 text-white py-2 pr-10 outline-none"
            />
            <i className="fa-solid fa-arrow-right absolute right-2 top-3 text-yellow-600"></i>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="accent-yellow-600" />
            <label className="text-sm text-gray-400">I agree to the Privacy Policy</label>
          </div>
        </div>
    

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © Copyright 2025. <span className="text-white font-semibold">Restan</span>. All Rights Reserved.
      </div>
      </div>
  );
}