declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Adiciona suporte para diretivas do Tailwind
declare module 'tailwindcss/tailwind.css';
declare module 'tailwindcss/base';
declare module 'tailwindcss/components';
declare module 'tailwindcss/utilities';
