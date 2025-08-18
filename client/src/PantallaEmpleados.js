import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import "./PantallaEmpleados.css";

const EmployeeList = () => {
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([
    { id: 1, nombre: "Juan", apellido: "Pérez", email: "juan@mail.com", telefono: "123456" },
    { id: 2, nombre: "María", apellido: "López", email: "maria@mail.com", telefono: "654321" },
  ]);

  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.nombre.toLowerCase().includes(search.toLowerCase()) ||
      emp.apellido.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Gestión de Empleados</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar empleado..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/registro">
          <button className="add-btn">
            <FaPlus />
          </button>
        </Link>
      </div>

      <ul className="employee-list">
        {filteredEmployees.map((emp) => (
          <li key={emp.id} className="employee-item">
            {emp.nombre} {emp.apellido} - {emp.email} - {emp.telefono}
            <div className="actions">
              <button><FaEdit /></button>
              <button onClick={() => handleDelete(emp.id)}><FaTrash /></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
