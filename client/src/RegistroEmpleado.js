import React, { useState } from "react";
import "./RegistroEmpleado.css"; // tu CSS moderno

export default function FormularioEmpleado() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    fecha_nacimiento: "",
    telefono: "",
    email: "",
    fecha_ingreso: "",
    empresa: "",
    cargo: ""
  });

  // Opciones de prueba (pueden venir de tu API)
  const empresas = ["WorkSense", "TechCorp", "InnovaSoft", "DataSolutions"];
  const cargos = ["Desarrollador", "Tester", "Líder de Proyecto", "Administrador"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/empleados", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Empleado registrado con éxito ✅");
        setFormData({
          nombre: "",
          apellido: "",
          dni: "",
          fecha_nacimiento: "",
          telefono: "",
          email: "",
          fecha_ingreso: "",
          empresa: "",
          cargo: ""
        });
      } else {
        alert("Error al registrar empleado ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error en la conexión con el servidor");
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Alta de Empleado</h2>
      </div>

      <form className="datos" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Apellido</label>
          <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>DNI</label>
          <input type="text" name="dni" value={formData.dni} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Fecha de Nacimiento</label>
          <input type="date" name="fecha_nacimiento" value={formData.fecha_nacimiento} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Teléfono</label>
          <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
        </div>

        <div className="form-group full">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Fecha de Ingreso</label>
          <input type="date" name="fecha_ingreso" value={formData.fecha_ingreso} onChange={handleChange} />
        </div>

        {/* EMPRESA */}
        <div className="form-group">
          <label>Empresa</label>
          <select name="empresa" value={formData.empresa} onChange={handleChange} required>
            <option value="">Seleccione una empresa</option>
            {empresas.map((empresa, idx) => (
              <option key={idx} value={empresa}>{empresa}</option>
            ))}
          </select>
        </div>

        {/* CARGO */}
        <div className="form-group full">
          <label>Cargo</label>
          <select name="cargo" value={formData.cargo} onChange={handleChange} required>
            <option value="">Seleccione un cargo</option>
            {cargos.map((cargo, idx) => (
              <option key={idx} value={cargo}>{cargo}</option>
            ))}
          </select>
        </div>

        <button type="submit">Registrar Empleado</button>
      </form>
    </div>
  );
}
