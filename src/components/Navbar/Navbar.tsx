import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white text-xl font-bold">
              Komasi
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/lotes" className="text-gray-300 hover:text-white px-3 py-2">
              Lotes
            </Link>
            <Link to="/sobre" className="text-gray-300 hover:text-white px-3 py-2">
              Sobre
            </Link>
            <Link to="/contato" className="text-gray-300 hover:text-white px-3 py-2">
              Contato
            </Link>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-gray-300 hover:text-white p-2 rounded-full"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>

            {/* User Menu */}
            {user ? (
              <div className="relative ml-3">
                <div className="flex items-center space-x-4">
                  {/* Notifications */}
                  <button
                    onClick={() => setNotificationsOpen(!notificationsOpen)}
                    className="text-gray-300 hover:text-white p-2 rounded-full relative"
                  >
                    🔔
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                  </button>

                  {/* Avatar */}
                  <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <img
                      className="h-8 w-8 rounded-full"
                      src={user.avatar || 'https://via.placeholder.com/40'}
                      alt={user.name}
                    />
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                Entrar
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/lotes"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md"
          >
            Lotes
          </Link>
          <Link
            to="/sobre"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md"
          >
            Sobre
          </Link>
          <Link
            to="/contato"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md"
          >
            Contato
          </Link>
          {!user && (
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md"
            >
              Entrar
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
