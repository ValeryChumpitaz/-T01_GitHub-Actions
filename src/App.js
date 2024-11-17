import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa Routes
import Navbar from "./components/Navbar"; // Componente de navegación
import Footer from "./components/Footer"; // Componente de pie de página
import About from "./pages/About"; // Página "Sobre nosotros"
import Contact from "./pages/Contact"; // Página de contacto
import Home from './pages/Home';
import TodoList from './pages/TodoList'; // Asegúrate de que la ruta sea correcta
import "./styles/app.css"; // Ruta correcta al archivo de estilos

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Barra de navegación */}
        <Navbar />
 
        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Pie de página */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
