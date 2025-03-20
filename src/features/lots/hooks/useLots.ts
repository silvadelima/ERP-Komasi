import { useState, useEffect } from 'react';
import type { LotDetails } from '../types';

// Simulando dados iniciais para desenvolvimento
const mockLots: LotDetails[] = [
  {
    id: '1',
    number: '001',
    block: 'A',
    area: 1000,
    price: 150000,
    status: 'available',
    description: 'Lote com vista privilegiada para a serra, ideal para construção de chácara.',
    images: [
      {
        id: '1',
        url: 'https://via.placeholder.com/800x600',
        alt: 'Vista frontal do lote',
        isMain: true,
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
    ],
    documents: [
      {
        id: '1',
        name: 'Escritura',
        url: '#',
        type: 'pdf',
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

interface UseLotsOptions {
  initialFilters?: {
    status?: 'available' | 'reserved' | 'sold';
    minPrice?: number;
    maxPrice?: number;
    minArea?: number;
    maxArea?: number;
  };
}

export function useLots(options: UseLotsOptions = {}) {
  const [lots, setLots] = useState<LotDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [filters, setFilters] = useState(options.initialFilters || {});

  useEffect(() => {
    const fetchLots = async () => {
      try {
        setLoading(true);
        // TODO: Substituir por chamada real à API
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simula delay da rede
        
        let filteredLots = [...mockLots];
        
        // Aplicar filtros
        if (filters.status) {
          filteredLots = filteredLots.filter(lot => lot.status === filters.status);
        }
        if (filters.minPrice) {
          filteredLots = filteredLots.filter(lot => lot.price >= filters.minPrice!);
        }
        if (filters.maxPrice) {
          filteredLots = filteredLots.filter(lot => lot.price <= filters.maxPrice!);
        }
        if (filters.minArea) {
          filteredLots = filteredLots.filter(lot => lot.area >= filters.minArea!);
        }
        if (filters.maxArea) {
          filteredLots = filteredLots.filter(lot => lot.area <= filters.maxArea!);
        }

        setLots(filteredLots);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro ao carregar lotes'));
      } finally {
        setLoading(false);
      }
    };

    fetchLots();
  }, [filters]);

  const updateFilters = (newFilters: Partial<UseLotsOptions['initialFilters']>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return {
    lots,
    loading,
    error,
    filters,
    updateFilters,
  };
}
