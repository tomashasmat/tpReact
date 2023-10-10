import React from "react";
import "./styles.css";
import logo from "./imagenes/logo.png";
import fondo from "./imagenes/fondo5.png";
import { Link } from "react-router-dom";

export default function App() {
  const fondoStyle = {
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  };

  return (
    <div className="App" style={fondoStyle}>
      <header className="header">
        <img className="logo" src={logo} alt="Logo" />
        <div className="search-bar">
          <input type="text" placeholder="Buscar Post" />
          <button>Buscar</button>
        </div>
      </header>
      <div className="content">
        <ul className="link-pag">
          <li>Create Post</li>
          <li>
            <a className="links" href="#">
              Trends
            </a>
          </li>
          <li>
            <a className="links" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="links" href="#">
              Profile
            </a>
          </li>
        </ul>
      </div>

      {/* Otras rutas de tu aplicación */}

      <h2> Forever Trini </h2>
    </div>
  );
}
