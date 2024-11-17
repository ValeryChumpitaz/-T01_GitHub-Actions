import React from "react";
import ReactDOM from "react-dom";
import App from "./App";  // El componente principal de la aplicación
import "./styles/styles.css";  // Asegúrate de que sea la ruta correcta a 'src/styles/styles.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
