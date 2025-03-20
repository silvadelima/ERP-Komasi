import React, { useState } from 'react';
import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const AdminLayout: React.FC = () => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Protege a rota administrativa
  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const menuItems = [
    { icon: '📊', label: 'Dashboard', path: '/admin' },
    { icon: '🏗️', label: 'Lotes', path: '/admin/lotes' },
    { icon: '👥', label: 'Clientes', path: '/admin/clientes' },
    { icon: '👔', label: 'Corretores', path: '/admin/corretores' },
    { icon: '💰', label: 'Financeiro', path: '/admin/financeiro' },
    { icon: '📝', label: 'Contratos', path: '/admin/contratos' },
    { icon: '🎯', label: 'Vendas', path: '/admin/vendas' },
    { icon: '📨', label: 'Suporte', path: '/admin/suporte' },
    { icon: '⚙️', label: 'Configurações', path: '/admin/configuracoes' },
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
            <span className="text-2xl font-semibold text-white">Komasi</span>
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
                <button className="flex items-center space-x-3 text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
                  <img
                    src={user.avatar || 'https://via.placeholder.com/40'}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{user.name}</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4">
          <Outlet />
        </main>
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

export default AdminLayout;
