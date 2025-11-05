module.exports = {
  plugins: {
    // Esta linha garante compatibilidade com Tailwind v4 no deploy
    '@tailwindcss/postcss': {}, 
    autoprefixer: {},
  },
};
