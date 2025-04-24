import { useState } from 'react';
import { Globe, Heart, CheckSquare, Map, Search, Menu, X, ChevronRight } from 'lucide-react';

function Footer() {
  return (
    <div>
                  <footer className="bg-gray-900 text-white py-12">
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <div className="flex items-center space-x-2 text-white font-bold text-xl mb-6">
                      <Globe size={24}/>
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
  )
}

export default Footer