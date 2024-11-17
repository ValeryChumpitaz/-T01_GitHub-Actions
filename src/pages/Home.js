import React, { useState } from "react";  // Importa useState
import "../styles/Home.css"; // Estilos específicos para la página de inicio

// Componente Home
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Beautiful App</h1>
      <p>This is the homepage. You can navigate through different sections using the navbar above.</p>
    </div>
  );
};

export default Home;
