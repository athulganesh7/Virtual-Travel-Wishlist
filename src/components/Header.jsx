import { useState } from 'react';
import { Globe, Heart, CheckSquare, Map, Search, Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';


function Header() {
    
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
          <nav className="relative z-10 bg-white bg-opacity-90 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <Link to={'/'}>
            <div className="flex items-center mt-4">
              <div className="relative">
                <Globe className="h-8 w-8 text-blue-600 animate-pulse" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>
              <span className="ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">Travel Wishlist</span>
            </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/home" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">Home</a>
              <a href="/wishlist" className="text-gray-600 hover:text-blue-600 font-medium flex items-center group">
                <Heart className="h-5 w-5 mr-1 group-hover:text-red-500 transition-transform group-hover:scale-110" /> 
                <span className="relative">
                  Wishlist
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
              <a href="/visited" className="text-gray-600 hover:text-blue-600 font-medium flex items-center group">
                <CheckSquare className="h-5 w-5 mr-1 group-hover:text-green-500 transition-transform group-hover:scale-110" /> 
                <span className="relative">
                  Visited
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50"
              >
                {mobileMenuOpen ? 
                  <X className="h-6 w-6" /> : 
                  <Menu className="h-6 w-6" />
                }
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-white bg-opacity-95 backdrop-blur-lg shadow-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/home" className="block px-3 py-2 text-blue-600 font-medium border-l-4 border-blue-600">Home</a>
              <a href="/wishlist" className=" px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors duration-200 flex items-center">
                <Heart className="h-5 w-5 mr-1" /> Wishlist
              </a>
              <a href="/visited" className=" px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors duration-200 flex items-center">
                <CheckSquare className="h-5 w-5 mr-1" /> Visited
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Header
