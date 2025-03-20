import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white mt-auto">
      <Container className="py-12">
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
                <Link to="/lotes" className="text-gray-300 hover:text-white transition-colors">
                  Lotes Disponíveis
                </Link>
              </li>
              <li>
                <Link to="/financiamento" className="text-gray-300 hover:text-white transition-colors">
                  Simulador de Financiamento
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário de Funcionamento</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 8h às 12h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Komasi. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
