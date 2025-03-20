import React, { useState } from 'react';
import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const ClientLayout: React.FC = () => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Protege a rota do cliente
  if (!user || user.role !== 'client') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const menuItems = [
    { icon: '🏠', label: 'Início', path: '/cliente' },
    { icon: '📋', label: 'Meus Lotes', path: '/cliente/lotes' },
    { icon: '💰', label: 'Financeiro', path: '/cliente/financeiro' },
    { icon: '📝', label: 'Contratos', path: '/cliente/contratos' },
    { icon: '📨', label: 'Suporte', path: '/cliente/suporte' },
    { icon: '👤', label: 'Perfil', path: '/cliente/perfil' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800 dark:bg-gray-950 w-64">
          {/* Logo */}
          <div className="flex items-center mb-8 px-2">
            <Link to="/" className="text-2xl font-semibold text-white">
              Komasi
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden ml-auto text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Menu */}
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Suporte Rápido */}
          <div className="mt-8 p-4 bg-gray-700 dark:bg-gray-800 rounded-lg">
            <h3 className="text-white font-medium mb-2">Precisa de ajuda?</h3>
            <p className="text-gray-300 text-sm mb-3">
              Nossa equipe está disponível para te ajudar.
            </p>
            <Link
              to="/cliente/suporte"
              className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
            >
              Abrir Chamado
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`${sidebarOpen ? 'md:ml-64' : ''}`}>
        {/* Top Bar */}
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="h-16 px-4 flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
            >
              ☰
            </button>

            <div className="flex items-center ml-auto space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
              </button>

              {/* Notifications */}
              <button className="p-2 text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white relative">
                🔔
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              {/* User Menu */}
              <div className="relative">
                <Link
                  to="/cliente/perfil"
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                >
                  <img
                    src={user.avatar || 'https://via.placeholder.com/40'}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{user.name}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700">
            <nav className="text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link
                    to="/cliente"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    Área do Cliente
                  </Link>
                </li>
                {location.pathname !== '/cliente' && (
                  <>
                    <li>
                      <span className="text-gray-500 dark:text-gray-400">•</span>
                    </li>
                    <li className="text-gray-900 dark:text-white">
                      {menuItems.find(item => item.path === location.pathname)?.label || 'Página Atual'}
                    </li>
                  </>
                )}
              </ol>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 shadow-sm mt-8">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Komasi. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-gray-900 bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default ClientLayout;
