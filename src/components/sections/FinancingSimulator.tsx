import React, { useState } from 'react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface SimulationResult {
  monthlyPayment: number;
  totalAmount: number;
  numberOfInstallments: number;
}

const FinancingSimulator: React.FC = () => {
  const [lotValue, setLotValue] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [installments, setInstallments] = useState('180');
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateFinancing = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);

    // Simulação básica com taxa de juros de 0.99% ao mês
    const monthlyInterestRate = 0.0099;
    const totalValue = Number(lotValue.replace(/\D/g, '')) / 100;
    const entryValue = Number(downPayment.replace(/\D/g, '')) / 100;
    const numberOfInstallments = Number(installments);
    const financedAmount = totalValue - entryValue;

    // Cálculo da parcela usando a fórmula de financiamento
    const monthlyPayment = (
      financedAmount *
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfInstallments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfInstallments) - 1)
    );

    // Simulando uma chamada à API
    setTimeout(() => {
      setResult({
        monthlyPayment,
        totalAmount: monthlyPayment * numberOfInstallments,
        numberOfInstallments
      });
      setIsCalculating(false);
    }, 1000);
  };

  const formatCurrency = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, '');
    const amount = Number(onlyNumbers) / 100;
    return amount.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const handleCurrencyInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = e.target.value.replace(/\D/g, '');
    setter(formatCurrency(value));
  };

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card title="Simulador de Financiamento">
          <form onSubmit={calculateFinancing} className="space-y-6">
            <Input
              label="Valor do Lote"
              value={lotValue}
              onChange={(e) => handleCurrencyInput(e, setLotValue)}
              placeholder="R$ 0,00"
              required
            />
            <Input
              label="Valor de Entrada"
              value={downPayment}
              onChange={(e) => handleCurrencyInput(e, setDownPayment)}
              placeholder="R$ 0,00"
              required
            />
            <Input
              type="number"
              label="Número de Parcelas"
              value={installments}
              onChange={(e) => setInstallments(e.target.value)}
              min="12"
              max="180"
              required
            />
            <Button
              type="submit"
              fullWidth
              isLoading={isCalculating}
              disabled={!lotValue || !downPayment}
            >
              Calcular
            </Button>
          </form>

          {result && (
            <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Resultado da Simulação
              </h3>
              <div className="space-y-3">
                <p className="text-gray-600 dark:text-gray-300">
                  Valor da Parcela:{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {result.monthlyPayment.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </span>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Valor Total:{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {result.totalAmount.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </span>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Número de Parcelas:{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {result.numberOfInstallments}x
                  </span>
                </p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default FinancingSimulator;
