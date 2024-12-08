import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Shield, Lock } from 'lucide-react';
import logo from './assets/Flare Synthesisss-02.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-xl' 
          : 'bg-gray-900/70 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
         <div className='flex items-center space-x-2'>
         <Lock className="text-blue-400" size={34} />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                QFS Platform
              </span>
         </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            {/* <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 font-medium transition-colors duration-300">
                <span>Products</span>
                <ChevronDown size={16} className="group-hover:transform group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full -left-4 pt-4 hidden group-hover:block">
                <div className="bg-gray-800/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gray-700/50 w-48">
                  <div className="space-y-2">
                    {['Wallet', 'Exchange', 'Analytics'].map((item) => (
                      <Link
                        key={item}
                        // to={`/${item.toLowerCase()}`}
                        className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 rounded-lg transition-colors duration-300"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div> */}

            {/* <Link
              // to="/connect"
              className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-300"
            >
              Connect
            </Link> */}
            
            <Link
              // to="/contact"
              className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-300"
            >
              Contact
            </Link>

            <Link
              to="/connect"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-full transition-all duration-300 font-semibold transform hover:-translate-y-0.5 hover:shadow-lg shadow-md"
            >
            Connect
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-400 focus:outline-none transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 top-full transition-all duration-300 transform ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="bg-gray-800/95 backdrop-blur-md border-t border-gray-700/50 shadow-xl">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {/* Mobile Products Menu */}
              

              {/* <Link
                to="/connect"
                className="block px-4 py-2 text-gray-400 hover:text-blue-400 hover:bg-gray-700/50 rounded-lg transition-colors duration-300"
                onClick={toggleMenu}
              >
                Connect
              </Link> */}

             ne

              <Link
                to="/connect"
                className="block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-center shadow-md hover:shadow-lg"
                onClick={toggleMenu}
              >
                  Connect
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;