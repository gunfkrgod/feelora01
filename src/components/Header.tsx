import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Heart, Menu, X, MessageCircle, Calendar, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const { currentUser, userProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const getDashboardLink = () => {
    if (!userProfile) return '/';
    return `/dashboard/${userProfile.role}`;
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-xl"
            >
              <Heart className="h-6 w-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Feelora
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Let your soul exhale</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link to="/resources" className="text-gray-600 hover:text-blue-600 transition-colors">
              Resources
            </Link>
            <Link to="/events" className="text-gray-600 hover:text-blue-600 transition-colors">
              Events
            </Link>
            <Link to="/emergency" className="text-red-600 hover:text-red-700 font-medium transition-colors">
              Emergency
            </Link>
            
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <Link to="/chat" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </Link>
                <Link to="/book" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Calendar className="h-5 w-5" />
                </Link>
                <Link to={getDashboardLink()} className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <User className="h-5 w-5" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Login
                </Link>
                <Link to="/signup" className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all">
                  Sign Up
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-blue-100"
          >
            <div className="px-4 py-4 space-y-4">
              <Link to="/services" className="block text-gray-600 hover:text-blue-600">
                Services
              </Link>
              <Link to="/resources" className="block text-gray-600 hover:text-blue-600">
                Resources
              </Link>
              <Link to="/events" className="block text-gray-600 hover:text-blue-600">
                Events
              </Link>
              <Link to="/emergency" className="block text-red-600 hover:text-red-700 font-medium">
                Emergency
              </Link>
              
              {currentUser ? (
                <>
                  <Link to="/chat" className="block text-gray-600 hover:text-blue-600">
                    AI Chat
                  </Link>
                  <Link to="/book" className="block text-gray-600 hover:text-blue-600">
                    Book Session
                  </Link>
                  <Link to={getDashboardLink()} className="block text-gray-600 hover:text-blue-600">
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-gray-600 hover:text-blue-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block text-gray-600 hover:text-blue-600">
                    Login
                  </Link>
                  <Link to="/signup" className="block bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-lg text-center">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;