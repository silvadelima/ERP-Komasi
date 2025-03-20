import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { useTheme } from '../../context/ThemeContext';

const MainLayout: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 ${theme}`}>
      <Navbar />
      <main className="pt-16"> {/* pt-16 para compensar a navbar fixa */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <footer className="bg-gray-800 dark:bg-gray-950 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Informações da Empresa */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Komasi</h3>
              <p className="text-gray-300">
                Loteamento Zé Chagas<br />
                Brejinho/PE<br />
                Telefone: (87) 9xxxx-xxxx<br />
                Email: contato@komasi.com.br
              </p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/lotes" className="text-gray-300 hover:text-white">
                    Lotes Disponíveis
                  </a>
                </li>
                <li>
                  <a href="/sobre" className="text-gray-300 hover:text-white">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="/contato" className="text-gray-300 hover:text-white">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="/suporte" className="text-gray-300 hover:text-white">
                    Suporte
                  </a>
                </li>
              </ul>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Komasi. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
