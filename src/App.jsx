import React, { useState } from 'react';
import originalTamarindChiliImg from './assets/1.jfif';
import mildTamarindFusionImg from './assets/2.jfif';
import extraHotInfernoImg from './assets/3.jfif';
import sweetSpicyImg from './assets/4.jfif';

const LesothoSauceWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  

  // Localized product data for Lesotho market
  const products = [
    {
      id: 1,
      name: "Seshoto sa Moroto",
      price: "M35.00",
      image: originalTamarindChiliImg,
      rating: 4.9,
      description: "Our signature blend with traditional Basotho spices - perfect for papa and morogo",
      spiceLevel: 4,
      sesotho: "Seshoto sa heso se tšoanang"
    },
    {
      id: 2,
      name: "Mild Motsoko",
      price: "M28.00",
      image: mildTamarindFusionImg,
      rating: 4.6,
      description: "Gentle heat for the whole family - great with chakalaka and pap",
      spiceLevel: 2,
      sesotho: "Seshoto se bonolo"
    },
    {
      id: 3,
      name: "Fire Mountain",
      price: "M42.00",
      image: extraHotInfernoImg,
      rating: 4.8,
      description: "Inspired by the flames of Maluti Mountains - for the brave only!",
      spiceLevel: 5,
      sesotho: "Mollo oa Maluti"
    },
    {
      id: 4,
      name: "Honey Highlands",
      price: "M38.00",
      image: sweetSpicyImg ,
      rating: 4.7,
      description: "Sweet mountain honey meets fiery peppers - a Basotho favorite",
      spiceLevel: 3,
      sesotho: "Honey ea thaba"
    }
  ];

  const addToCart = (product) => {
    setCartItems(cartItems + 1);
  };

  const SpiceLevel = ({ level }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-flame w-4 h-4 ${i < level ? 'text-red-600 fill-red-600' : 'text-gray-400'}`}> {/* MODIFIED: Changed grey color for unlit flames */}
          <path d="M8.5 14.5A7.5 7.5 0 0 0 12 22a7.5 7.5 0 0 0 3.5-7.5c0-7.5-3.5-7.5-3.5-7.5s-3.5 0-3.5 7.5Z"/>
          <path d="M12 5.5s2.5 0 2.5-2.5c0-1.5-2.5-1.5-2.5-1.5s-2.5 0-2.5 1.5c0 2.5 2.5 2.5 2.5 2.5Z"/>
        </svg>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white"> {/* MODIFIED: Main background to black */}
      <style>
        {`
        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        `}
      </style>

      {/* Header */}
      <header className="bg-black shadow-xl sticky top-0 z-50 border-b border-red-700"> {/* MODIFIED: Header to black, added red border */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-3 rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame w-8 h-8 text-red-600">
                  <path d="M8.5 14.5A7.5 7.5 0 0 0 12 22a7.5 7.5 0 0 0 3.5-7.5c0-7.5-3.5-7.5-3.5-7.5s-3.5 0-3.5 7.5Z"/>
                  <path d="M12 5.5s2.5 0 2.5-2.5c0-1.5-2.5-1.5-2.5-1.5s-2.5 0-2.5 1.5c0 2.5 2.5 2.5 2.5 2.5Z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Tsunami Products</h1>
                <p className="text-red-200 text-sm">Hot Sauce Lesotho</p> {/* MODIFIED: Text color */}
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-red-500 transition-colors font-medium">Home</a> {/* MODIFIED: Hover color */}
              <a href="#products" className="text-white hover:text-red-500 transition-colors font-medium">Li-Sauce</a> {/* MODIFIED: Hover color */}
              <a href="#about" className="text-white hover:text-red-500 transition-colors font-medium">Ka Rona</a> {/* MODIFIED: Hover color */}
              <a href="#contact" className="text-white hover:text-red-500 transition-colors font-medium">Re Letsetse</a> {/* MODIFIED: Hover color */}
            </nav>

            <div className="flex items-center space-x-4">
              <button className="relative bg-white text-red-600 p-2 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-5 h-5">
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>

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
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 bg-black"> {/* MODIFIED: Added black background for consistency */}
              <nav className="flex flex-col space-y-2">
                <a href="#home" className="text-white hover:text-red-500 transition-colors py-2">Home</a> {/* MODIFIED: Hover color */}
                <a href="#products" className="text-white hover:text-red-500 transition-colors py-2">Li-Sauce</a> {/* MODIFIED: Hover color */}
                <a href="#about" className="text-white hover:text-red-500 transition-colors py-2">Ka Rona</a> {/* MODIFIED: Hover color */}
                <a href="#contact" className="text-white hover:text-red-500 transition-colors py-2">Re Letsetse</a> {/* MODIFIED: Hover color */}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-black via-red-900 to-black text-white py-20 overflow-hidden"> {/* MODIFIED: Darker, red-centric gradient */}
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* MODIFIED: Increased opacity for darker overlay */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Tsunami Products
              <span className="text-yellow-400 block">HOT SAUCE!</span> {/* MODIFIED: Stronger yellow/orange */}
            </h2>
            <p className="text-lg md:text-xl mb-4 text-red-100"> {/* MODIFIED: Text color */}
              Made in the Kingdom in the Sky - ' Lesotho
            </p>
            <p className="text-lg md:text-xl mb-8 text-red-100"> {/* MODIFIED: Text color */}
              Handcrafted hot sauce with Basotho pride - perfect for your papa, morogo, and braai!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"> {/* MODIFIED: Stronger red text */}
                Reka Hona Joale (Buy Now)
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 hover:text-white transition-all transform hover:scale-105"> {/* MODIFIED: Hover background to red */}
                Learn More
              </button>
            </div>
          </div>

          {/* Mountain silhouette decoration */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-950 to-transparent opacity-60"></div> {/* MODIFIED: Dark red mountain silhouette */}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-100"> {/* MODIFIED: Light grey background for contrast */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Li-Sauce <span className="text-red-700">Tsa Rona</span> {/* MODIFIED: Stronger red */}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Made with love in Maseru - each bottle brings the taste of Lesotho to your table
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"> {/* MODIFIED: Simple white background for cards */}
                <div className="h-64 bg-gray-100 flex items-center justify-center"> {/* MODIFIED: Neutral background for images */}
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center" />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                      <p className="text-sm text-gray-500 italic">{product.sesotho}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star w-4 h-4 text-yellow-500 fill-yellow-500"> {/* MODIFIED: Stronger yellow for stars */}
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-700">Heat Level:</span>
                    <SpiceLevel level={product.spiceLevel} />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-700">{product.price}</span> {/* MODIFIED: Price color to red */}
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-gradient-to-r from-red-500 to-red-700 text-white px-4 py-2 rounded-full hover:from-red-600 hover:to-red-800 transition-all transform hover:scale-105 shadow-lg text-sm" // MODIFIED: Changed to red gradient
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-red-800 to-black"> {/* MODIFIED: Red to black gradient */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Made with <span className="text-yellow-400">Basotho Pride</span> {/* MODIFIED: Stronger yellow */}
              </h2>
              <p className="text-lg mb-6 text-red-100"> {/* MODIFIED: Text color */}
                Born in the beautiful Kingdom of Lesotho, our hot sauce celebrates the rich flavors 
                and warm hospitality of our Basotho heritage. Every bottle is handcrafted right here 
                in Maseru, supporting local farmers and bringing authentic taste to your table.
              </p>
              <p className="text-lg mb-8 text-red-100"> {/* MODIFIED: Text color */}
                We use only the finest local ingredients, including peppers grown in our mountain 
                valleys and traditional spices that have been part of Basotho cuisine for generations. 
                Perfect for enhancing your favorite dishes - from papa and morogo to braai and vetkoek.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-white text-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"> {/* MODIFIED: Icon color to red */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mountain w-8 h-8">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-white">Mountain Fresh</h3> {/* MODIFIED: Text color */}
                  <p className="text-sm text-red-200">From Maluti Mountains</p> {/* MODIFIED: Text color */}
                </div>
                <div className="text-center">
                  <div className="bg-white text-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"> {/* MODIFIED: Icon color to red */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-8 h-8">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-white">Local Support</h3> {/* MODIFIED: Text color */}
                  <p className="text-sm text-red-200">Supporting Basotho farmers</p> {/* MODIFIED: Text color */}
                </div>
              </div>
            </div>

            <div className="bg-black bg-opacity-30 p-8 rounded-3xl backdrop-blur-sm border border-red-700"> {/* MODIFIED: Black with red border */}
              <div className="text-center">
                <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flame w-16 h-16 text-red-700"> {/* MODIFIED: Stronger red for flame */}
                    <path d="M8.5 14.5A7.5 7.5 0 0 0 12 22a7.5 7.5 0 0 0 3.5-7.5c0-7.5-3.5-7.5-3.5-7.5s-3.5 0-3.5 7.5Z"/>
                    <path d="M12 5.5s2.5 0 2.5-2.5c0-1.5-2.5-1.5-2.5-1.5s-2.5 0-2.5 1.5c0 2.5 2.5 2.5 2.5 2.5Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Tumelo ea Rona (Our Promise)</h3>
                <p className="text-red-100 text-lg leading-relaxed"> {/* MODIFIED: Text color */}
                  "We promise every bottle is made with pride in Lesotho, using the best local ingredients 
                  and traditional methods. If you're not happy, we'll make it right - that's the Basotho way!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-950 text-white"> {/* MODIFIED: Very dark gray/almost black */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Re <span className="text-yellow-400">Letsetse</span> {/* MODIFIED: Stronger yellow */}
            </h2>
            <p className="text-xl text-gray-300">
              Ready to add some Lesotho fire to your kitchen? Get in touch!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-2xl border border-red-700"> {/* MODIFIED: Added red border */}
              <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"> {/* MODIFIED: Icon background to red */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-8 h-8 text-white">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Letsetse</h3>
              <p className="text-gray-300">+266 57401317</p>
              <p className="text-gray-400 text-sm">WhatsApp available</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-2xl border border-red-700"> {/* MODIFIED: Added red border */}
              <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"> {/* MODIFIED: Icon background to red */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-8 h-8 text-white">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">info@malutifire.co.ls</p>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-2xl border border-red-700"> {/* MODIFIED: Added red border */}
              <div className="bg-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"> {/* MODIFIED: Icon background to red */}
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
            <h3 className="text-2xl font-bold mb-6 text-red-400">Find Us At:</h3> {/* MODIFIED: Heading color */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
              <div className="bg-gray-800 p-4 rounded-lg border border-red-700"> {/* MODIFIED: Added red border */}
                <h4 className="font-bold text-white mb-2">Maseru Markets</h4>
                <p className="text-sm">Available at local markets and spaza shops</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-red-700"> {/* MODIFIED: Added red border */}
                <h4 className="font-bold text-white mb-2">Online Orders</h4>
                <p className="text-sm">WhatsApp orders with delivery in Maseru</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-red-700"> {/* MODIFIED: Added red border */}
                <h4 className="font-bold text-white mb-2">Bulk Orders</h4>
                <p className="text-sm">Special rates for restaurants and events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-red-700"> {/* MODIFIED: Added red border */}
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
              <h4 className="font-bold mb-4 text-red-400">Li-Sauce Tsa Rona</h4> {/* MODIFIED: Heading color */}
              <ul className="space-y-2 text-gray-400">
                <li>Seshoto sa Moroto</li>
                <li>Mild Motsoko</li>
                <li>Fire Mountain</li>
                <li>Honey Highlands</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-red-400">Ka Rona</h4> {/* MODIFIED: Heading color */}
              <ul className="space-y-2 text-gray-400">
                <li>Our Story</li>
                <li>Local Farmers</li>
                <li>Basotho Heritage</li>
                <li>Community Support</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-red-400">Re Latele</h4> {/* MODIFIED: Heading color */}
              <div className="flex space-x-4">
                <div className="bg-red-700 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-800 transition-colors"> {/* MODIFIED: Icon background to red */}
                  <span className="text-white font-bold">f</span> {/* Placeholder for Facebook icon */}
                </div>
                <div className="bg-red-700 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-800 transition-colors"> {/* MODIFIED: Icon background to red */}
                  <span className="text-white font-bold">W</span> {/* Placeholder for WhatsApp icon */}
                </div>
                <div className="bg-red-700 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-800 transition-colors"> {/* MODIFIED: Icon background to red */}
                  <span className="text-white font-bold">@</span> {/* Placeholder for Instagram/Email icon */}
                </div>
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