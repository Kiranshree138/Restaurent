🍴Restaurant Website
This is a modern and fully responsive restaurant website built using Next.js and Tailwind CSS. The site showcases a clean layout with sections for the home page, menu, blog, chef section, shop, reservation, and contact details.

🔗 Live Website: https://restaurent1-two.vercel.app/

Project Overview:

This project is a fully responsive and visually appealing restaurant website developed using Next.js with the App Router architecture and styled using Tailwind CSS.
The website is designed to deliver a modern user experience with smooth navigation, fast performance, and a clean UI. It includes multiple dedicated sections such as Home, Menu, Blog, Chef, Shop, Contact, and Reservation, each built with attention to layout, readability, and responsiveness across all devices.

The home page introduces the restaurant with engaging visuals and guiding sections that lead users toward the menu, shop, or contact page. The Menu page highlights available dishes in an organized layout, while the Blog section is designed to share updates or food-related articles. The Chef page showcases profiles or information about the culinary team, adding credibility and personality to the brand.

Additionally, the Shop page allows users to explore products or food items, and the Reservation page is structured to help customers book tables easily.
The project also incorporates multiple reusable components—such as the Footer, Food section, Chef section, Menu block, and various UI sections—ensuring consistency throughout the website while making the codebase easier to manage and scale.

The website is hosted on Vercel, which ensures quick deployment, optimized performance, and automatic builds whenever changes are pushed to the repository. This makes the project maintainable, efficient, and production-ready.

📁 Project Structure:

The project follows the Next.js App Router layout, where all route-based pages are organized inside the app/ folder. Each main page—such as Blog, Menu, Contact, Shop, and Reservation—has its own dedicated folder within the app/ directory, and inside each folder, a page.js file is responsible for rendering that specific page’s content.

The Home page is defined at the root level inside the app/page.js file, providing the main landing view for the website.

All UI building blocks and reusable elements are stored inside the app/Components/ directory. This folder contains components such as Footer, Food, Menu, Chef, Blog, Section, and Timings, each responsible for rendering a specific reusable part of the user interface. Storing them in a central location allows the same components to be used across multiple pages, keeping the design consistent and the code maintainable.

The layout of the entire website—including headers, metadata, global structure, and wrapping elements—is handled by the app/layout.js file, which is the base layout required in the App Router system.

Global styling for the entire application is defined in the styles/globals.css file, where Tailwind CSS utilities and custom styles are configured.
All static files, such as images, icons, and other assets, are placed inside the public/ directory, making them easily accessible throughout the project.

Together, this structure keeps the project clean, scalable, and easy to navigate, making future updates or feature additions more efficient.

app/
 ├── page.js                     → Home Page
 │
 ├── Blog/
 │     └── page.js               → Blog Page (uses Section component)
 │
 ├── Components/                 → Reusable Components
 │     ├── Blog.js
 │     ├── Chef.js
 │     ├── Food.js
 │     ├── Footer.js             → Reusable Footer Component
 │     ├── Menu.js
 │     ├── Section.js            → Used ONLY in Blog Page
 │     └── Timings.js
 │
 ├── Contact/
 │     └── page.js               → Contact Page
 │
 ├── Menu/
 │     └── page.js               → Menu Page
 │
 ├── Pages/
 │     ├── page.js
 │
 ├── Reservation/
 │     └── page.js               → Reservation Page
 │
 ├── Shop/
 │     └── page.js               → Shop Page
 │
 └── layout.js                   → Root Layout

public/
 ├── favicon.ico
 └── images/                     → Static Assets

styles/
 └── globals.css                 → Global Styles


