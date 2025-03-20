import React from 'react';
import Container from '../layout/Container';

const testimonials = [
  {
    id: 1,
    content: "Realizar o sonho da casa própria parecia distante, mas o Loteamento Zé Chagas tornou isso possível. As condições de pagamento são excelentes!",
    author: "Maria Silva",
    role: "Professora",
    image: "/testimonials/maria.jpg"
  },
  {
    id: 2,
    content: "O processo de compra foi muito transparente e a equipe sempre prestativa. Hoje minha família tem um lugar para chamar de nosso.",
    author: "João Santos",
    role: "Comerciante",
    image: "/testimonials/joao.jpg"
  },
  {
    id: 3,
    content: "A localização é excelente e a infraestrutura completa. Fiz um ótimo investimento para o futuro dos meus filhos.",
    author: "Ana Oliveira",
    role: "Empresária",
    image: "/testimonials/ana.jpg"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Histórias reais de pessoas que realizaram o sonho do seu terreno próprio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/48';
                    }}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <blockquote>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </blockquote>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
