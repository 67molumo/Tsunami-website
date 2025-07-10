import React, { useState, useEffect } from 'react';

// Product Images
import malakabepasteImage from './assets/malakabepaste.jfif';
import majaperengsauceImage from './assets/majaperengsauce.jfif';
import onionsauceImage from './assets/onionsauce.jfif';
import tsunamisauceImage from './assets/tsunamisauce.jfif';
import lefokatlalisauceImage from './assets/lefokatlalisauce.jfif';

// New: Import Lesotho Mountain Images
import mountain1 from './assets/mountain1.jpg'; // Adjust file names as per your assets folder
import mountain2 from './assets/mountain2.jfif';
import mountain3 from './assets/mountain3.jpg';
import mountain4 from './assets/mountain4.jfif';
import mountain5 from './assets/mountain5.jpg';
import tsunamiLogo from './assets/logo.png';

// Using placeholder images for demonstration.
const API_BASE_URL = 'http://127.0.0.1:5000'; // IMPORTANT: Change this to your deployed Flask API URL in production

const LesothoSauceWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsData, setProductsData] = useState([]); // State to hold products

  // New: State for mountain slideshow
  const [currentMountainImageIndex, setCurrentMountainImageIndex] = useState(0);

  // Array of Lesotho Mountain Images
  const lesothoMountainImages = [
    mountain1,
    mountain2,
    mountain3,
    mountain4,
    mountain5,
    // Add more mountain images here following the import pattern
  ];

  // Localized product data for Lesotho market - IDs changed to strings for consistency
  const initialProducts = [
     {
    id: "malakabepaste",
    name: "Malakabepaste",
    price: "M45.00",
    image: malakabepasteImage,
    description: "Malakabepaste e sebetsa bakeng sa pizza le ho tlotsa nama e kenyoang ka ovening",
    spiceLevel: 4,
    sesotho: "Malakabepaste works well for pizza and for glazing meat that is oven-cooked"
  },
  {
    id: "majaperengsauce",
    name: "Majaperengsauce",
    price: "M50.00",
    image: majaperengsauceImage,
    description: "Majapereng e ntle haholo bakeng sa lichips 🍟 and sandwiches, e etsa chips tse tsamaeang haholo ho bo rakhoebo ba li chips",
    spiceLevel: 2,
    sesotho: "Majapereng sauce is perfect for chips 🍟 and sandwiches — it creates chips that are popular with chip vendors"
  },
  {
    id: "onionsauce",
    name: "Onionsauce",
    price: "M50.00",
    image: onionsauceImage,
    description: "onionsauce e monate haholo ha e jeoa ka wors",
    spiceLevel: 5,
    sesotho: "Onion sauce is very tasty when enjoyed with sausage (wors)"
  },
  {
    id: "tsunamisauce",
    name: "Tsunamisauce",
    price: "M38.00",
    image: tsunamisauceImage,
    description: "Tsunamisauce eona ke mpoli ea tsona...hohle ea sebetsa...",
    spiceLevel: 3,
    sesotho: "Tsunami Sauce is the king of them all — it works with almost anything"
  },
  {
    id: "lefokatlalisauce",
    name: "Lefokatlalisauce",
    price: "M25.00",
    image: lefokatlalisauceImage,
    description: "Lefokatlalisauce e sebetsa sebakeng sa lijo tsohle ke nthoe kang tabasco",
    spiceLevel: 3,
    sesotho: "Lefokatlali Sauce can be used with all kinds of food — think of it like Tabasco"
  }
  ];

  // Load initial product data
  useEffect(() => {
    setProductsData(initialProducts);
  }, []);

  // New: useEffect for mountain slideshow auto-play
  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setCurrentMountainImageIndex(prevIndex => (prevIndex + 1) % lesothoMountainImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(slideshowInterval); // Cleanup on component unmount
  }, [lesothoMountainImages.length]); // Re-run if the number of images changes

  // Function to handle dot clicks for slideshow
  const handleDotClick = (index) => {
    setCurrentMountainImageIndex(index);
  };


  const SpiceLevel = ({ level }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-flame w-4 h-4 ${i < level ? 'text-red-600 fill-red-600' : 'text-gray-400'}`}>
          <path d="M8.5 14.5A7.5 7.5 0 0 0 12 22a7.5 7.5 0 0 0 3.5-7.5c0-7.5-3.5-7-5-3.5-7.5s-3.5 0-3.5 7.5Z"/>
          <path d="M12 5.5s2.5 0 2.5-2.5c0-1.5-2.5-1.5-2.5-1.5s-2.5 0-2.5 1.5c0 2.5 2.5 2.5 2.5 2.5Z"/>
        </svg>
      ))}
    </div>
  );

  // Phone number for direct call
  const phoneNumber = '+26657401317';
  // WhatsApp number (without '+' for the URL scheme)
  const whatsappNumber = '26657401317';

  return (
    <div className="min-h-screen bg-black text-white">
      <style>
        {`
        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        `}
      </style>

      {/* Header */}
      <header className="bg-black shadow-xl sticky top-0 z-50 border-b border-red-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* This is where your logo image will go */}
              <div className="bg-white p-3 rounded-full shadow-lg">
                <img
                  src={tsunamiLogo} // Use the imported logo variable here
                  alt="Tsunami Products Logo" // Important for accessibility
                  className="w-12 h-12 object-contain" // Adjust w- and h- as needed to fit
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Tsunami Products</h1>
                <p className="text-red-200 text-sm">Hot Sauce Lesotho</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-red-500 transition-colors font-medium">Home</a>
              <a href="#products" className="text-white hover:text-red-500 transition-colors font-medium">Sauces</a>
              <a href="#about" className="text-white hover:text-red-500 transition-colors font-medium">About us</a>
              <a href="#contact" className="text-white hover:text-red-500 transition-colors font-medium">contact us</a>
            </nav>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x w-6 h-6">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-6 h-6">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 bg-black">
              <nav className="flex flex-col space-y-2">
                <a href="#home" className="text-white hover:text-red-500 transition-colors py-2">Home</a>
                <a href="#products" className="text-white hover:text-red-500 transition-colors py-2">Li-Sauce</a>
                <a href="#about" className="text-white hover:text-red-500 transition-colors py-2">Ka Rona</a>
                <a href="#contact" className="text-white hover:text-red-500 transition-colors py-2">Re Letsetse</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-black via-red-900 to-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Tsunami Products
              <span className="text-yellow-400 block">HOT SAUCE!</span>
            </h2>
            <p className="text-lg md:text-xl mb-4 text-red-100">
              Made in the Kingdom in the Sky - ' Lesotho
            </p>
            <p className="text-lg md:text-xl mb-8 text-red-100">
              Handcrafted hot sauce with Basotho pride - perfect for your papa, morogo, and braai!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#products" className="bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                Explore Products
              </a>
              <a href="#about" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 hover:text-white transition-all transform hover:scale-105">
                Learn More
              </a>
            </div>
          </div>

          {/* Mountain silhouette decoration */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-950 to-transparent opacity-60"></div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Li-Sauce <span className="text-red-700">Tsa Rona</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Made with love in Maseru - each bottle brings the taste of Lesotho to your table
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productsData.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 bg-gray-100 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center" />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                      <p className="text-sm text-gray-500 italic">{product.sesotho}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-1">Spice level:</p>
                    <SpiceLevel level={product.spiceLevel} />
                  </div>

                  <p className="text-gray-700 mb-4">{product.description}</p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-red-700">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-red-800 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Made with <span className="text-yellow-400">Basotho Pride</span>
              </h2>
              <p className="text-lg mb-6 text-red-100">
                Born in the beautiful Kingdom of Lesotho, our hot sauce celebrates the rich flavors
                and warm hospitality of our Basotho heritage. Every bottle is handcrafted right here
                in Maseru, supporting local farmers and bringing authentic taste to your table.
              </p>
              <p className="text-lg mb-8 text-red-100">
                We use only the finest local ingredients, including peppers grown in our mountain
                valleys and traditional spices that have been part of Basotho cuisine for generations.
                Perfect for enhancing your favorite dishes - from papa and morogo to braai and vetkoek.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-white text-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mountain w-8 h-8">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-white">Mountain Fresh</h3>
                  <p className="text-sm text-red-200">From Maluti Mountains</p>
                </div>
                <div className="text-center">
                  <div className="bg-white text-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-8 h-8">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-white">Local Support</h3>
                  <p className="text-sm text-red-200">Supporting Basotho farmers</p>
                </div>
              </div>
            </div>

            {/* Existing 'Our Promise' div replaced with Mountain Slideshow */}
            <div className="bg-black bg-opacity-30 p-8 rounded-3xl backdrop-blur-sm border border-red-700">
              <div className="text-center">
                {/* Mountain Slideshow Container */}
                <div id="mountain-slideshow" className="relative w-full h-64 overflow-hidden rounded-lg mb-6">
                  {lesothoMountainImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Lesotho Mountain ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        index === currentMountainImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation dots for Mountain Slideshow */}
                <div id="slideshow-dots" className="flex justify-center mt-4 space-x-2">
                  {lesothoMountainImages.map((_, index) => (
                    <span
                      key={`dot-${index}`}
                      className={`w-3 h-3 rounded-full cursor-pointer ${
                        index === currentMountainImageIndex ? 'bg-red-700' : 'bg-gray-400'
                      }`}
                      onClick={() => handleDotClick(index)}
                    ></span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Explore the Majestic Mountains of Lesotho</h3>
                <p className="text-red-100 text-lg leading-relaxed">
                  Explore mouthwatering dishes where rich sauces bring every bite to life, all set against the breathtaking serenity of Lesotho’s Maloti Mountains.

📸 Stunning photographs capture the perfect blend of culinary delight and natural wonder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Re <span className="text-yellow-400">Letsetse</span>
            </h2>
            <p className="text-xl text-gray-300">
              Ready to add some Lesotho fire to your kitchen? Get in touch!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-2xl border border-red-700">
              <a href={`tel:${phoneNumber}`} className="block">
                <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-8 h-8 text-white">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Letsetse</h3>
                <p className="text-gray-300">{phoneNumber}</p>
                <p className="text-gray-400 text-sm">WhatsApp available</p>
              </a>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-2xl border border-red-700">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-6 h-6 text-white">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-gray-300">{phoneNumber}</p>
                <p className="text-gray-400 text-sm">Chat with us!</p>
              </a>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-2xl border border-red-700">
              <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-8 h-8 text-white">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-300">Maseru, Lesotho</p>
              <p className="text-gray-400 text-sm">Available at local stores</p>
            </div>
          </div>

          {/* Local availability info */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 text-red-400">Find Us At:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
              <div className="bg-gray-800 p-4 rounded-lg border border-red-700">
                <h4 className="font-bold text-white mb-2">Maseru Markets</h4>
                <p className="text-sm">Available at local markets and spaza shops</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-red-700">
                <h4 className="font-bold text-white mb-2">Online Orders</h4>
                <p className="text-sm">WhatsApp orders with delivery in Maseru</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-red-700">
                <h4 className="font-bold text-white mb-2">Bulk Orders</h4>
                <p className="text-sm">Special rates for restaurants and events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-red-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame w-6 h-6 text-red-600">
                    <path d="M8.5 14.5A7.5 7.5 0 0 0 12 22a7.5 7.5 0 0 0 3.5-7.5c0-7.5-3.5-7.5-3.5-7.5s-3.5 0-3.5 7.5Z"/>
                    <path d="M12 5.5s2.5 0 2.5-2.5c0-1.5-2.5-1.5-2.5-1.5s-2.5 0-2.5 1.5c0 2.5 2.5 2.5 2.5 2.5Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Tsunami</h3>
                  <p className="text-gray-400 text-sm">Hot Sauce Lesotho</p>
                </div>
              </div>
              <p className="text-gray-400">
                Proudly made in Lesotho - bringing authentic Basotho flavors to your table.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-red-400">Li-Sauce Tsa Rona</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Malakabepaste</li>
                <li>Majaperengsauce</li>
                <li>Onionsauce</li>
                <li>Tsunamisauce</li>
                <li>Lefokatlalisauce</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-red-400">Ka Rona</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Our Story</li>
                <li>Local Farmers</li>
                <li>Basotho Heritage</li>
                <li>Community Support</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-red-400">Re Latele</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="bg-red-700 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-800 transition-colors">
                  <span className="text-white font-bold">f</span>
                </a>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="bg-red-700 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-6 h-6 text-white">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                  </svg>
                </a>
                <a href="mailto:info@malutifire.co.ls" className="bg-red-700 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-800 transition-colors">
                  <span className="text-white font-bold">@</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Tsunami product Hot Sauce Lesotho. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LesothoSauceWebsite;
