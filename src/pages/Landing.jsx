import React, { useState } from 'react';
import { Globe, MapPin, Heart, List, Search, ChevronRight, Star, ArrowRight, ChevronDown } from 'lucide-react';
import video from '../assets/background.mp4'; // Placeholder for video import
import Button from '../components/Button';

const Landing = () => {

  const [email, setEmail] = useState('');
  
  const popularDestinations = [
    { id: 1, name: "Kyoto, Japan", rating: 4.9, saved: 1250, imageUrl: "https://boutiquejapan.com/wp-content/uploads/2019/07/yasaka-pagoda-higashiyama-kyoto-japan-1140x761.jpg" },
    { id: 2, name: "Santorini, Greece", rating: 4.8, saved: 980, imageUrl: "https://res.cloudinary.com/enchanting/q_70,f_auto,w_600,h_400,c_fit/ymt-web/2023/01/600x400-Santorini20Greece20Sunset.jpg" },
    { id: 3, name: "Machu Picchu, Peru", rating: 4.7, saved: 1100, imageUrl: "https://www.perurail.com/wp-content/uploads/2016/02/ciudadela-de-machu-picchu-maravilla-del-mundo-cusco-perurail.jpg" }
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for joining! We'll send updates to ${email}`);
    setEmail('');
  };
  
  // Scroll function to navigate to the features section
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
    
      {/* Hero Section - Now 100vh with video background */}
      <div className="relative h-screen w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute min-w-full min-h-full object-cover w-full h-full"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay to improve text readability */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        </div>
        
        {/* Content positioned over video */}
        <div className="max-w-6xl mx-auto px-4 relative z-20 w-full">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Track Your Dream Destinations
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Create your virtual travel wishlist and turn your travel dreams into reality, one destination at a time.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button/>
                
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer" onClick={scrollToFeatures}>
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} className="text-white" />
          </div>
        </div>
      </div>
      
      {/* Features */}
      <section id="features" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Create a Travel Wishlist?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Organize your dream destinations and plan your adventures efficiently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md  transition-transform duration-300 hover:scale-110">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <MapPin size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Discover Places</h3>
              <p className="text-gray-600">
                Explore thousands of destinations and find hidden gems around the world.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-110">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-6">
                <Heart size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Save Favorites</h3>
              <p className="text-gray-600">
                Create collections of your favorite destinations to visit in the future.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-110">
              <div className="bg-amber-100 p-3 rounded-full w-fit mb-6">
                <List size={24} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Plan Itineraries</h3>
              <p className="text-gray-600">
                Organize your trip planning with custom itineraries and checklists.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Destinations */}
      <section id="destinations" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Popular Destinations</h2>
            <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center">
              View all <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 ">
            {popularDestinations.map(destination => (
              <div key={destination.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md  transition-transform duration-300 hover:scale-110">
                <div className="relative ">
                  <img 
                    src={destination.imageUrl}
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <Heart size={20} className="text-gray-500" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                  <div className="flex items-center mb-4">
                    <Star size={16} className="text-yellow-500 mr-1" fill="currentColor" />
                    <span className="text-gray-700 mr-2">{destination.rating}</span>
                    <span className="text-gray-500 text-sm">({destination.saved} saved)</span>
                  </div>
                  <button className="w-full py-2 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Travelers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of adventurers who are using Wanderlust to plan their dream trips.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm transition-transform duration-300 hover:scale-110">
              <p className="text-gray-600 mb-6">
                "Wanderlust helped me organize my bucket list and turn my travel dreams into reality. I've visited 3 countries from my wishlist this year alone!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full mr-4   bg-[url('https://st2.depositphotos.com/1007566/11626/v/950/depositphotos_116266656-stock-illustration-young-man-face-cartoon-design.jpg')] bg-cover bg-center"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-500">Adventure Enthusiast</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm transition-transform duration-300 hover:scale-110">
              <p className="text-gray-600 mb-6">
                "The best travel planning app I've used. It's intuitive, beautiful, and makes me excited about planning my next adventure."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4   bg-[url('https://thumbs.dreamstime.com/b/face-expression-handsome-young-man-smiling-male-emotion-avatar-cartoon-character-vector-illustration-isolated-white-186212346.jpg')] bg-cover bg-center"></div>
                <div>
                  <h4 className="font-bold">Mark Thompson</h4>
                  <p className="text-gray-500">Digital Nomad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Travel Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get exclusive travel tips, destination recommendations, and early access to new features.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-6 py-3 rounded-lg text-gray-900 bg-white"
              required
            />
            <button type="submit" className="px-6 py-3 bg-yellow-500 text-gray-900 font-medium rounded-lg hover:bg-yellow-400 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 text-white font-bold text-xl mb-6">
                <Globe size={24} />
                <span>Travel Wishlist</span>
              </div>
              <p className="text-gray-400">
                Your personal travel wishlist platform to discover, save, and explore the world.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Travel Guides</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Travel Wishlist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;