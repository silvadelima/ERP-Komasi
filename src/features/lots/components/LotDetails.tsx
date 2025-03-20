import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { LotDetails as LotDetailsType } from '../types';

interface LotDetailsProps {
  lot: LotDetailsType;
  showFullDetails?: boolean;
}

const LotDetails: React.FC<LotDetailsProps> = ({ lot, showFullDetails = false }) => {
  const [activeImage, setActiveImage] = useState(lot.images[0]);
  const [showContactForm, setShowContactForm] = useState(false);

  const statusColors = {
    available: {
      bg: 'bg-green-100 dark:bg-green-900',
      text: 'text-green-800 dark:text-green-200',
    },
    reserved: {
      bg: 'bg-yellow-100 dark:bg-yellow-900',
      text: 'text-yellow-800 dark:text-yellow-200',
    },
    sold: {
      bg: 'bg-red-100 dark:bg-red-900',
      text: 'text-red-800 dark:text-red-200',
    },
  };

  const statusText = {
    available: 'Disponível',
    reserved: 'Reservado',
    sold: 'Vendido',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      {/* Galeria de Imagens */}
      <div className="relative">
        <img
          src={activeImage.url}
          alt={activeImage.alt}
          className="w-full h-64 md:h-96 object-cover"
        />
        {showFullDetails && lot.images.length > 1 && (
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto">
            {lot.images.map((image) => (
              <button
                key={image.id}
                onClick={() => setActiveImage(image)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  activeImage.id === image.id
                    ? 'border-blue-600'
                    : 'border-transparent'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Informações do Lote */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Lote {lot.number} - Quadra {lot.block}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Área: {lot.area.toLocaleString('pt-BR')}m²
            </p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              statusColors[lot.status].bg
            } ${statusColors[lot.status].text}`}
          >
            {statusText[lot.status]}
          </span>
        </div>

        <p className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          R$ {lot.price.toLocaleString('pt-BR')}
        </p>

        {/* Características */}
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Características
          </h4>
          <div className="flex flex-wrap gap-2">
            {lot.features.map((feature) => (
              <span
                key={feature.id}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                title={feature.description}
              >
                {feature.icon} {feature.name}
              </span>
            ))}
          </div>
        </div>

        {showFullDetails ? (
          <>
            {/* Descrição Completa */}
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Descrição
              </h4>
              <p className="text-gray-600 dark:text-gray-400">{lot.description}</p>
            </div>

            {/* Localização */}
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Localização
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {lot.location.address}
                {lot.location.reference && (
                  <>
                    <br />
                    <span className="text-sm">Referência: {lot.location.reference}</span>
                  </>
                )}
              </p>
              {/* TODO: Adicionar mapa aqui */}
            </div>

            {/* Documentos */}
            {lot.documents.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Documentos
                </h4>
                <div className="space-y-2">
                  {lot.documents.map((doc) => (
                    <a
                      key={doc.id}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      📄 {doc.name}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Corretor Responsável */}
            {lot.realtor && (
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Corretor Responsável
                </h4>
                <div className="flex items-center">
                  <img
                    src={lot.realtor.avatar || 'https://via.placeholder.com/40'}
                    alt={lot.realtor.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {lot.realtor.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {lot.realtor.phone}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Formulário de Contato */}
            {showContactForm ? (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    rows={4}
                    placeholder="Escreva sua mensagem..."
                  ></textarea>
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                  >
                    Enviar Mensagem
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg font-medium"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex gap-4">
                <button
                  onClick={() => setShowContactForm(true)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Tenho Interesse
                </button>
                <Link
                  to={`/lotes/${lot.id}/simulacao`}
                  className="flex-1 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg font-medium text-center"
                >
                  Simular Financiamento
                </Link>
              </div>
            )}
          </>
        ) : (
          <Link
            to={`/lotes/${lot.id}`}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-block text-center"
          >
            Ver Detalhes
          </Link>
        )}
      </div>
    </div>
  );
};

export default LotDetails;
