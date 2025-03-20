import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LotDetails from '../components/LotDetails';
import type { LotDetails as LotDetailsType } from '../types';

// TODO: Substituir por chamada real à API
const mockLot: LotDetailsType = {
  id: '1',
  number: '001',
  block: 'A',
  area: 1000,
  price: 150000,
  status: 'available',
  description: 'Lote com vista privilegiada para a serra, ideal para construção de chácara. Terreno plano com vegetação nativa preservada e nascente própria. Localização privilegiada com fácil acesso à cidade.',
  images: [
    {
      id: '1',
      url: 'https://via.placeholder.com/800x600',
      alt: 'Vista frontal do lote',
      isMain: true,
    },
    {
      id: '2',
      url: 'https://via.placeholder.com/800x600',
      alt: 'Vista lateral do lote',
      isMain: false,
    },
  ],
  location: {
    latitude: -8.2109,
    longitude: -36.0169,
    address: 'Loteamento Zé Chagas, s/n',
    reference: 'Próximo à entrada principal',
  },
  features: [
    {
      id: '1',
      name: 'Água Encanada',
      icon: '💧',
      description: 'Acesso à rede de água tratada',
    },
    {
      id: '2',
      name: 'Energia Elétrica',
      icon: '⚡',
      description: 'Rede elétrica instalada',
    },
    {
      id: '3',
      name: 'Nascente',
      icon: '🌊',
      description: 'Nascente natural no terreno',
    },
    {
      id: '4',
      name: 'Vegetação',
      icon: '🌳',
      description: 'Área verde preservada',
    },
  ],
  documents: [
    {
      id: '1',
      name: 'Escritura do Terreno',
      url: '#',
      type: 'pdf',
    },
    {
      id: '2',
      name: 'Planta do Lote',
      url: '#',
      type: 'pdf',
    },
  ],
  realtor: {
    id: '1',
    name: 'João Silva',
    email: 'joao@komasi.com.br',
    phone: '(87) 99999-9999',
    avatar: 'https://via.placeholder.com/100',
  },
  createdAt: new Date(),
  updatedAt: new Date(),
};

const LotPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [lot, setLot] = useState<LotDetailsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchLot = async () => {
      try {
        setLoading(true);
        // TODO: Substituir por chamada real à API
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simula delay da rede
        setLot(mockLot);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro ao carregar detalhes do lote'));
      } finally {
        setLoading(false);
      }
    };

    fetchLot();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Carregando detalhes do lote...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !lot) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
            <p className="text-red-800 dark:text-red-200">
              {error ? error.message : 'Lote não encontrado'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <a href="/lotes" className="hover:text-blue-600 dark:hover:text-blue-400">
                Lotes
              </a>
            </li>
            <li>•</li>
            <li>Lote {lot.number}</li>
          </ol>
        </nav>

        <LotDetails lot={lot} showFullDetails />
      </div>
    </div>
  );
};

export default LotPage;
