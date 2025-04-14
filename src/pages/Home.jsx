import { useState, useEffect } from 'react';
import { Map, Compass, Heart, CheckSquare, Search, Globe, Menu, X, Zap, Plane, MapPin, Wind } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState('all');
  const [animatedText, setAnimatedText] = useState(0);
  
  // Animated text for hero section
  const adventureWords = ["Adventure", "Journey", "Discovery", "Exploration", "Wanderlust"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedText((prev) => (prev + 1) % adventureWords.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const featuredDestinations = [
    { id: 1, name: "Santorini, Greece", image: "https://media.istockphoto.com/id/475124388/photo/white-church-in-oia-town-on-santorini-island-in-greece.webp?s=2048x2048&w=is&k=20&c=IRxrR6lRHfI6_iRWLCbm-K08kgpIDoNIYDhwBbVYoaU=", region: "europe", color: "bg-blue-500", description: "White-washed buildings with blue domes overlooking the Aegean Sea." },
    { id: 2, name: "Kyoto, Japan", image: "https://media.istockphoto.com/id/904453184/photo/composite-image-of-mt-fuji-and-tokyo-skyline.jpg?s=2048x2048&w=is&k=20&c=WX4wDucpTekX__e_ryRG3kO4BSoVG2XaJurWT7dJnRs=", region: "asia", color: "bg-red-500", description: "Ancient temples, traditional gardens, and vibrant cherry blossoms." },
    { id: 3, name: "Machu Picchu, Peru", image: "/api/placeholder/800/500", region: "americas", color: "bg-green-500", description: "Breathtaking Incan citadel set against a mountain backdrop." },
    { id: 4, name: "Marrakech, Morocco", image: "/api/placeholder/800/500", region: "africa", color: "bg-yellow-500", description: "Vibrant markets, stunning architecture, and rich cultural heritage." },
    { id: 5, name: "Sydney, Australia", image: "/api/placeholder/800/500", region: "oceania", color: "bg-purple-500", description: "Iconic harbor, beautiful beaches, and vibrant city life." },
    { id: 6, name: "Northern Lights, Iceland", image: "/api/placeholder/800/500", region: "europe", color: "bg-teal-500", description: "Mesmerizing aurora borealis dancing across the Arctic sky." }
  ];
  
  const filteredDestinations = activeRegion === 'all' 
    ? featuredDestinations 
    : featuredDestinations.filter(dest => dest.region === activeRegion);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-yellow-300 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-blue-300 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-green-300 blur-3xl"></div>
      </div>
      
      {/* Navigation */}
         
      <Header/>
      
      {/* Hero Section */}
      <div className="relative z-10 overflow-hidden py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                Start Your
              </span>
              <div className="relative mt-2 h-20">
                {adventureWords.map((word, index) => (
                  <span key={word} className={`absolute left-0 right-0 transition-all duration-1000 ${
                    index === animatedText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                      {word}
                    </span>
                  </span>
                ))}
              </div>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:max-w-3xl text-gray-600">
              Explore amazing destinations, create your travel wishlist, and track your adventures.
            </p>
            
            {/* Animated floating elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-16 h-16 opacity-20 animate-float">
                <Plane className="w-full h-full text-blue-600" />
              </div>
              <div className="absolute bottom-20 right-10 w-12 h-12 opacity-20 animate-float-delay">
                <Compass className="w-full h-full text-yellow-600" />
              </div>
              <div className="absolute top-32 right-1/4 w-14 h-14 opacity-20 animate-float-slow">
                <Map className="w-full h-full text-green-600" />
              </div>
              <div className="absolute bottom-40 left-1/4 w-10 h-10 opacity-20 animate-float-slower">
                <MapPin className="w-full h-full text-red-600" />
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="mt-10 max-w-xl mx-auto relative">
              <div className="flex rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                <div className="relative flex-grow focus-within:z-10">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-l-full pl-12 sm:text-sm border-gray-300 p-5"
                    placeholder="Where do you want to go?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button className="relative inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-r-full text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300">
                  <span className="mr-2">Explore</span>
                  <Zap className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Curved separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
            <path d="M0,96L48,101.3C96,107,192,117,288,106.7C384,96,480,64,576,64C672,64,768,96,864,106.7C960,117,1056,107,1152,90.7C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Featured Destinations */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">Featured Destinations</span>
          </h2>
          
          {/* Region filters */}
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => setActiveRegion('all')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeRegion === 'all' 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              All Regions
            </button>
            <button 
              onClick={() => setActiveRegion('europe')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeRegion === 'europe' 
                ? 'bg-blue-500 text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              Europe
            </button>
            <button 
              onClick={() => setActiveRegion('asia')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeRegion === 'asia' 
                ? 'bg-red-500 text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              Asia
            </button>
            <button 
              onClick={() => setActiveRegion('americas')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeRegion === 'americas' 
                ? 'bg-green-500 text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              Americas
            </button>
            <button 
              onClick={() => setActiveRegion('africa')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeRegion === 'africa' 
                ? 'bg-yellow-500 text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              Africa
            </button>
            <button 
              onClick={() => setActiveRegion('oceania')} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeRegion === 'oceania' 
                ? 'bg-purple-500 text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              Oceania
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map(destination => (
            <div key={destination.id} className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 ${destination.color} mix-blend-multiply opacity-30 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <img src={destination.image} alt={destination.name} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white bg-opacity-80 backdrop-blur-sm rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="h-5 w-5 text-red-500" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                  <span className={`w-3 h-3 rounded-full ${destination.color}`}></span>
                </div>
                <p className="text-gray-600">{destination.description}</p>
                <div className="mt-6 flex justify-between items-center">
                  <button className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200 group">
                    <Heart className="h-4 w-4 mr-1 group-hover:animate-pulse" /> 
                    <span className="relative">
                      Add to Wishlist
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </button>
                  <button className="flex items-center text-sm font-medium text-green-600 hover:text-green-800 transition-colors duration-200 group">
                    <CheckSquare className="h-4 w-4 mr-1 group-hover:animate-pulse" /> 
                    <span className="relative">
                      Visited
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-teal-400 rounded-full blur-3xl"></div>
            </div>
            <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between relative z-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to track your travels?</h2>
                <p className="mt-2 text-blue-100">
                  Create lists of places you want to visit and keep track of your adventures.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row md:mt-0">
                <a href="/wishlist" className="bg-white px-6 py-3 rounded-full font-medium text-blue-600 hover:bg-blue-50 transition-colors duration-300 shadow-md hover:shadow-lg mb-4 sm:mb-0 sm:mr-4 text-center transform hover:-translate-y-1">
                  <span className="flex items-center justify-center">
                    <Heart className="h-5 w-5 mr-2" /> 
                    Start Wishlist
                  </span>
                </a>
                <a href="/visited" className="bg-blue-800 px-6 py-3 rounded-full font-medium text-white hover:bg-blue-900 transition-colors duration-300 shadow-md hover:shadow-lg text-center transform hover:-translate-y-1">
                  <span className="flex items-center justify-center">
                    <CheckSquare className="h-5 w-5 mr-2" /> 
                    Track Visited
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
            Traveler Stories
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600">J</span>
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Jessica R.</h3>
                <p className="text-sm text-gray-500">Visited 27 countries</p>
              </div>
            </div>
            <p className="text-gray-600 italic">"This app has completely transformed how I plan my travels. The wishlist feature helps me keep track of all the places I dream of visiting!"</p>
            <div className="mt-4 flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-xl font-bold text-green-600">M</span>
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Michael T.</h3>
                <p className="text-sm text-gray-500">Visited 42 countries</p>
              </div>
            </div>
            <p className="text-gray-600 italic">"Being able to mark places as visited creates a beautiful visual record of my adventures. I love looking back at where I've been!"</p>
            <div className="mt-4 flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-xl font-bold text-purple-600">S</span>
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Sophia L.</h3>
                <p className="text-sm text-gray-500">Visited 18 countries</p>
              </div>
            </div>
            <p className="text-gray-600 italic">"I love how easy it is to discover new places! The recommendations are spot on and have led me to some amazing hidden gems."</p>
            <div className="mt-4 flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
      
       {/* Footer */}
           <Footer/>
          </div>
        );
      }
        