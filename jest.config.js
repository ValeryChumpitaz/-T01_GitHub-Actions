module.exports = {
    preset: 'react',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',  // Mapea archivos CSS para pruebas
    },
    coverageDirectory: 'coverage',  // Directorio para los reportes de cobertura
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/index.js'],  // Archivos a incluir en la cobertura
  };
  