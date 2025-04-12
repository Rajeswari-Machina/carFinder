# 🚗 CarFinder — Car Search Web App

A sleek and responsive **Car Finder Web Application** built using **Next.js** and **TailwindCSS**, designed to help users search, filter, and explore cars effortlessly. This project offers a seamless experience with modern design patterns, debounced search, intelligent suggestions, toast notifications, and light/dark themes.

## 🌐 Live Preview

🔗 **[Live Demo](https://car-finder-bk.vercel.app/)** 

![Website Preview](https://youtu.be/1x6LfOhUv20?si=ryU7pzOpQvA6rKdQ)

---

## ✨ Features

- 🔍 **Smart Debounced Search**  
  Reduces API calls while searching by introducing delay logic using a debounce utility.

- 🧠 **Autocomplete & Suggestions**  
  Offers real-time, predictive search suggestions as the user types.

- 🧪 **Advanced Filters**  
  Filter cars by:
  - Brand
  - Price Range
  - sort according to prices(low to high and high to low )
  - Fuel Type
  - Seating Capacity
  - color

- 🧾 **Car Detail View**  
  Displays detailed car information and specs upon selection.

- 💖 **Wishlist with LocalStorage**  
  Save your favorite cars with persistence across sessions using browser local storage.

- 🔔 **Toast Notifications (React Toastify)**  
  Visual feedback for adding/removing items from the wishlist.

- 🌗 **Dark / Light Mode Toggle**  
  Custom themed UI for better visual experience.

- 🚫 **Custom 404 Page**  
  Personalized error page to handle non-existing routes.

- 🔁 **Real-Time UI Updates**  
  Instantly reflects filter and wishlist changes without page reloads.

- 📱 **Responsive Design**  
  Optimized for all screen sizes using mobile-first design with TailwindCSS.

---

## 🛠️ Tech Stack

| Category            | Technology         |
|---------------------|--------------------|
| **Frontend**        | [Next.js](https://nextjs.org/), React.js |
| **Styling**         | [TailwindCSS](https://tailwindcss.com/),MaterialUI |
| **State Management**| React Hooks (`useState`, `useEffect`) |
| **Notifications**   | [React Toastify](https://fkhadra.github.io/react-toastify/introduction) |
| **Storage**         | `LocalStorage` |
| **Utilities**       | Custom debounce function, API handlers |
| **others**       | Mock API at src/data/mock/cars.json |

---

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rajeswari-Machina/carFinder.git
   cd carFinder

1. **Install Dependencies**
   ```bash
   npm install
1. **Run the development server**
   ```bash
   npm run dev
1. **visit the app in browser**
   ```bash
   http://localhost:3000

## Example Use Cases

- Type "Hon" to see live suggestions like Honda Civic
- Use price slider to filter between ₹5L - ₹15L
- Click ❤️ to add cars to your wishlist and see toast confirmation
- Switch to dark mode from the toggle in navbar

##Future Improvemnets 

- Add-to-cart or test-drive booking
- Real API Integration
- User Login and profile managemnet
- Analytics on car viewslikes

## Developed By 
### Rajeswari Machina
![GitHub](https://github.com/Rajeswari-Machina)


⭐️ *If you like this project, don't forget to drop a star on the [GitHub repo](https://github.com/Rajeswari-Machina/carFinder)!*
