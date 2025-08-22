import React from "react";
import "./Dashboard.css";
import { FaBuilding, FaUsers, FaThLarge } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <FaBuilding className="logo-icon" />
          <div>
            <h2 className="logo">Gestión</h2>
            <span className="subtitle">Empresarial</span>
          </div>
        </div>

        <nav>
          <ul className="menu">
            <li>
              <Link to="/" className="menu-link active">
                <FaThLarge className="icon" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/empresas" className="menu-link">
                <FaBuilding className="icon" />
                Empresas
              </Link>
            </li>
            <li>
              <Link to="/empleados" className="menu-link">
                <FaUsers className="icon" />
                Empleados
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="main">
        <h1 className="title">Dashboard</h1>
        <p className="subtitle">Resumen general del sistema de gestión</p>

        <div className="cards">
          <div className="card">
            <h3>Total Empresas</h3>
            <p className="number">24</p>
            <span className="info">+2 desde el mes pasado</span>
          </div>
          <div className="card">
            <h3>Total Empleados</h3>
            <p className="number">156</p>
            <span className="info">+12 desde el mes pasado</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
