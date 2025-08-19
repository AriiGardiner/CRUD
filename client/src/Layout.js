import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaBuilding, FaChartBar, FaTachometerAlt, FaSignOutAlt } from "react-icons/fa";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <FaBuilding size={22} />
          <span>Gestión</span>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <FaTachometerAlt /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/empresas">
                <FaBuilding /> Empresas
              </Link>
            </li>
            <li>
              <Link to="/empleados" className="active">
                <FaUsers /> Empleados
              </Link>
            </li>
            <li>
              <Link to="/reportes">
                <FaChartBar /> Reportes
              </Link>
            </li>
          </ul>
        </nav>
        <div className="rol">Rol: Admin</div>
      </aside>

      {/* Main */}
      <div className="main">
        <header className="topbar">
          <div className="titulo">Sistema de Gestión Empresarial</div>
          <div className="usuario">
            <div className="avatar">A</div>
            <div>
              <p>Administrador</p>
              <span className="tag">Administrador</span>
            </div>
            <button className="logout">
              <FaSignOutAlt /> Salir
            </button>
          </div>
        </header>
        <main className="contenido">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

