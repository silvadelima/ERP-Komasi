import React, { useState } from 'react';
import { useLots } from '../hooks/useLots';

type ViewMode = 'grid' | 'map';

const LotsPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const { lots, loading, error, filters, updateFilters } = useLots();

  const [priceRange, setPriceRange] = useState({
    min: '',
    max: '',
  });

  const [areaRange, setAreaRange] = useState({
    min: '',
    max: '',
  });

  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters({
      minPrice: priceRange.min ? parseFloat(priceRange.min) : undefined,
      maxPrice: priceRange.max ? parseFloat(priceRange.max) : undefined,
      minArea: areaRange.min ? parseFloat(areaRange.min) : undefined,
      maxArea: areaRange.max ? parseFloat(areaRange.max) : undefined,
    });
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
            <p className="text-red-800 dark:text-red-200">
              Erro ao carregar lotes: {error.message}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Lotes Disponíveis
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Encontre o lote perfeito para realizar seu sonho
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <form onSubmit={handleFilterSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <select
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
                  onChange={(e) => updateFilters({ status: e.target.value as any })}
                  value={filters.status || ''}
                >
                  <option value="">Todos</option>
                  <option value="available">Disponível</option>
                  <option value="reserved">Reservado</option>
                  <option value="sold">Vendido</option>
                </select>
              </div>

              {/* Preço */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preço (R$)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Mín"
                    className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                  />
                  <input
                    type="number"
                    placeholder="Máx"
                    className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                  />
                </div>
              </div>

              {/* Área */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Área (m²)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Mín"
                    className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
                    value={areaRange.min}
                    onChange={(e) => setAreaRange(prev => ({ ...prev, min: e.target.value }))}
                  />
                  <input
                    type="number"
                    placeholder="Máx"
                    className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
                    value={areaRange.max}
                    onChange={(e) => setAreaRange(prev => ({ ...prev, max: e.target.value }))}
                  />
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex items-end space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Filtrar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPriceRange({ min: '', max: '' });
                    setAreaRange({ min: '', max: '' });
                    updateFilters({});
                  }}
                  className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg"
                >
                  Limpar
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Alternar Visualização */}
        <div className="flex justify-end mb-6">
          <div className="inline-flex rounded-lg border border-gray-300 dark:border-gray-600">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-l-lg ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded-r-lg ${
                viewMode === 'map'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              Mapa
            </button>
          </div>
        </div>

        {/* Lista de Lotes */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Carregando lotes...</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lots.map((lot) => (
              <div
                key={lot.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
              >
                <img
                  src={lot.images[0]?.url}
                  alt={lot.images[0]?.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Lote {lot.number}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Área: {lot.area}m²
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        lot.status === 'available'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : lot.status === 'reserved'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}
                    >
                      {lot.status === 'available'
                        ? 'Disponível'
                        : lot.status === 'reserved'
                        ? 'Reservado'
                        : 'Vendido'}
                    </span>
                  </div>
                  <p className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    R$ {lot.price.toLocaleString('pt-BR')}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {lot.features.map((feature) => (
                      <span
                        key={feature.id}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      >
                        {feature.icon} {feature.name}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <p className="text-center text-gray-600 dark:text-gray-400">
              Visualização do mapa será implementada em breve...
            </p>
          </div>
        )}

        {/* Paginação ou "Carregar Mais" pode ser adicionado aqui */}
      </div>
    </div>
  );
};

export default LotsPage;
