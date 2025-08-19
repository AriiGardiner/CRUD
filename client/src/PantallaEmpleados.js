import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import "./PantallaEmpleados.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      nombre: "Juan Pérez",
      dni: "12345678",
      email: "juan.perez@techsolutions.com",
      empresa: "Tech Solutions SA",
      cargo: "Desarrollador Senior",
      estado: "Activo",
    },
    {
      id: 2,
      nombre: "María González",
      dni: "87654321",
      email: "maria.gonzalez@innovacion.com",
      empresa: "Innovación Digital SRL",
      cargo: "Diseñadora UX",
      estado: "Activo",
    },
    {
      id: 3,
      nombre: "Carlos Rodríguez",
      dni: "11223344",
      email: "carlos.rodriguez@servicios.com",
      empresa: "Servicios Integrales SA",
      cargo: "Gerente de Ventas",
      estado: "Inactivo",
    },
  ]);

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="empleados-container">
      <div className="empleados-header">
        <div>
          <h1>Gestión de Empleados</h1>
          <p>Administra los empleados registrados en el sistema</p>
        </div>
        <Link to="/registro">
          <button className="btn-nuevo">
            <FaPlus /> Nuevo Empleado
          </button>
        </Link>
      </div>

      <div className="card">
        <h2 className="card-title">👥 Empleados Registrados</h2>
        <p className="card-subtitle">Lista completa de empleados en el sistema</p>

        <table className="tabla-empleados">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>DNI</th>
              <th>Email</th>
              <th>Empresa</th>
              <th>Cargo</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.nombre}</td>
                <td>{emp.dni}</td>
                <td>{emp.email}</td>
                <td>{emp.empresa}</td>
                <td>{emp.cargo}</td>
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

export default EmployeeList;
