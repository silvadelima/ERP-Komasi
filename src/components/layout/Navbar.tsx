import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import Container from './Container';

const Navbar: React.FC = () => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 dark:bg-gray-800 shadow-lg">
      <Container>
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white text-xl font-bold">
              Komasi
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/lotes" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">
              Lotes
            </Link>
            <Link to="/financiamento" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">
              Financiamento
            </Link>
            <Link to="/sobre" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">
              Sobre
            </Link>
            <button
              onClick={toggleTheme}
              className="text-gray-300 hover:text-white p-2 rounded-lg transition-colors"
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Menu principal"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/lotes"
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Lotes
              </Link>
              <Link
                to="/financiamento"
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Financiamento
              </Link>
              <Link
                to="/sobre"
                className="block text-gray-300 hover:text-white px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left text-gray-300 hover:text-white px-3 py-2 rounded-md"
              >
                {theme === 'dark' ? 'Modo Claro 🌞' : 'Modo Escuro 🌙'}
              </button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
