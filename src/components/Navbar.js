import React from "react";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import "../styles/navbar.css"; // Estilos para la barra de navegación

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={require("../assets/logo.png")} alt="Logo" /> {/* Asegúrate de que la ruta de la imagen sea correcta */}
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/todo" className="navbar-link">Todo List</Link> {/* Enlace a la página TodoList */}
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
