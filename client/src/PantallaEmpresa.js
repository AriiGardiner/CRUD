import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import "./PantallaEmpresa.css"; // Podés usar el mismo CSS que empleados

const PantallaEmpresas = () => {
  const [empresas, setEmpresas] = useState([
    {
      id: 1,
      nombre: "WorkSense",
      cuit: "30-12345678-9",
      direccion: "Av. Siempre Viva 123",
      telefono: "011-1234-5678",
      email: "contacto@worksense.com",
      fecha_creacion: "2022-01-15",
      estado: "Activo",
    },
    {
      id: 2,
      nombre: "TechCorp",
      cuit: "33-87654321-0",
      direccion: "Calle Falsa 456",
      telefono: "011-8765-4321",
      email: "info@techcorp.com",
      fecha_creacion: "2021-05-20",
      estado: "Activo",
    },
    {
      id: 3,
      nombre: "InnovaSoft",
      cuit: "27-11223344-5",
      direccion: "Av. Innovación 789",
      telefono: "011-1122-3344",
      email: "hola@innovasoft.com",
      fecha_creacion: "2020-09-10",
      estado: "Inactivo",
    },
  ]);

  const handleDelete = (id) => {
    setEmpresas(empresas.filter((emp) => emp.id !== id));
  };

  return (
    <div className="empleados-container">
      <div className="empleados-header">
        <div>
          <h1>Gestión de Empresas</h1>
          <p>Administra las empresas registradas en el sistema</p>
        </div>
        {/* Botón redirige al formulario de registro de empresas */}
        <Link to="/registro-empresa">
          <button className="btn-nuevo">
            <FaPlus /> Nueva Empresa
          </button>
        </Link>
      </div>

      <div className="card">
        <h2 className="card-title">🏢 Empresas Registradas</h2>
        <p className="card-subtitle">Lista completa de empresas en el sistema</p>

        <table className="tabla-empleados">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>CUIT</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Fecha de Creación</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empresas.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.nombre}</td>
                <td>{emp.cuit}</td>
                <td>{emp.direccion}</td>
                <td>{emp.telefono}</td>
                <td>{emp.email}</td>
                <td>{emp.fecha_creacion}</td>
                <td>
                  <span
                    className={`estado ${
                      emp.estado === "Activo" ? "activo" : "inactivo"
                    }`}
                  >
                    {emp.estado}
                  </span>
                </td>
                <td>
                  <button className="btn-accion editar">
                    <FaEdit />
                  </button>
                  <button
                    className="btn-accion eliminar"
                    onClick={() => handleDelete(emp.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PantallaEmpresas;
