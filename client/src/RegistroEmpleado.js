import React, { useState, useEffect } from "react";
import "./App.css";

export default function RegistroEmpleado({ onRegistrar, empleadoEditando }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    fecha_nacimiento: "",
    telefono: "",
    email: "",
    fecha_ingreso: "",
    id_empresa: "",
    id_cargo: ""
  });

  useEffect(() => {
    if (empleadoEditando) {
      setFormData(empleadoEditando);
    }
  }, [empleadoEditando]);

  const empresas = [
    { id: 1, nombre: "OpenAI SRL" },
    { id: 2, nombre: "Tech Solutions SA" },
    { id: 3, nombre: "Innova Group" },
  ];

  const cargos = [
    { id: 1, nombre: "Desarrollador" },
    { id: 2, nombre: "Diseñador UX/UI" },
    { id: 3, nombre: "Project Manager" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegistrar(formData);
    setFormData({
      nombre: "",
      apellido: "",
      dni: "",
      fecha_nacimiento: "",
      telefono: "",
      email: "",
      fecha_ingreso: "",
      id_empresa: "",
      id_cargo: ""
    });
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h2>{empleadoEditando ? "Editar Empleado" : "Alta de Empleado"}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </label>
          <label>
            Apellido
            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
          </label>
          <label>
            DNI
            <input type="text" name="dni" value={formData.dni} onChange={handleChange} required />
          </label>
          <label>
            Fecha de Nacimiento
            <input type="date" name="fecha_nacimiento" value={formData.fecha_nacimiento} onChange={handleChange} />
          </label>
          <label>
            Teléfono
            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
          </label>
          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Fecha de Ingreso
            <input type="date" name="fecha_ingreso" value={formData.fecha_ingreso} onChange={handleChange} />
          </label>
          <label>
            Empresa
            <select name="id_empresa" value={formData.id_empresa} onChange={handleChange} required>
              <option value="">Seleccione una empresa</option>
              {empresas.map((e) => (
                <option key={e.id} value={e.id}>{e.nombre}</option>
              ))}
            </select>
          </label>
          <label>
            Cargo
            <select name="id_cargo" value={formData.id_cargo} onChange={handleChange}>
              <option value="">Seleccione un cargo</option>
              {cargos.map((c) => (
                <option key={c.id} value={c.id}>{c.nombre}</option>
              ))}
            </select>
          </label>
          <button type="submit">
            {empleadoEditando ? "Guardar Cambios" : "Registrar Empleado"}
          </button>
        </form>
      </div>
    </div>
  );
}
