import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Bot className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AI Chatbot Builder</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/builder" 
              className={({ isActive }) => 
                isActive ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-gray-900"
              }
            >
              Builder
            </NavLink>
            <NavLink 
              to="/features" 
              className={({ isActive }) => 
                isActive ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-gray-900"
              }
            >
              Features
            </NavLink>
            <NavLink 
              to="/pricing" 
              className={({ isActive }) => 
                isActive ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-gray-900"
              }
            >
              Pricing
            </NavLink>
            <NavLink 
              to="/documentation" 
              className={({ isActive }) => 
                isActive ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-gray-900"
              }
            >
              Documentation
            </NavLink>
            <NavLink 
              to="/support" 
              className={({ isActive }) => 
                isActive ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-gray-900"
              }
            >
              Support
            </NavLink>
          </nav>
          
          <div className="flex items-center">
            <button className="hidden md:block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
              Sign In
            </button>
            
            <button 
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink 
              to="/builder" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md ${isActive ? "bg-indigo-50 text-indigo-600 font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Builder
            </NavLink>
            <NavLink 
              to="/features" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md ${isActive ? "bg-indigo-50 text-indigo-600 font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </NavLink>
            <NavLink 
              to="/pricing" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md ${isActive ? "bg-indigo-50 text-indigo-600 font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </NavLink>
            <NavLink 
              to="/documentation" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md ${isActive ? "bg-indigo-50 text-indigo-600 font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </NavLink>
            <NavLink 
              to="/support" 
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md ${isActive ? "bg-indigo-50 text-indigo-600 font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </NavLink>
            <div className="px-3 py-2">
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;