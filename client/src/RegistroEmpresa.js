import React, { useState } from "react";
import "./RegistroEmpresa.css"; // tu CSS moderno

export default function FormularioEmpresa() {
  const [formData, setFormData] = useState({
    nombre: "",
    cuit: "",
    direccion: "",
    telefono: "",
    email: "",
    fecha_creacion: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/empresas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Empresa registrada con éxito ✅");
        setFormData({
          nombre: "",
          cuit: "",
          direccion: "",
          telefono: "",
          email: "",
          fecha_creacion: "",
        });
      } else {
        alert("Error al registrar empresa ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error en la conexión con el servidor");
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Alta de Empresa</h2>
      </div>

      <form className="datos" onSubmit={handleSubmit}>
        <div className="form-group full">
          <label>Nombre</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>

        <div className="form-group full">
          <label>CUIT</label>
          <input type="text" name="cuit" value={formData.cuit} onChange={handleChange} required />
        </div>

        <div className="form-group full">
          <label>Dirección</label>
          <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} />
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
          <label>Fecha de Creación</label>
          <input type="date" name="fecha_creacion" value={formData.fecha_creacion} onChange={handleChange} />
        </div>

        <button type="submit">Registrar Empresa</button>
      </form>
    </div>
  );
}
