// Remova qualquer 'import' ou 'export default' e use a sintaxe abaixo:

module.exports = {
  // O Next.js exige que a chave principal seja 'plugins'
  plugins: {
    // Usamos o pacote correto do Tailwind (instalado anteriormente)
    '@tailwindcss/postcss': {}, 
    autoprefixer: {},
  },
};