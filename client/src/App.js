import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistroEmpleado from "./RegistroEmpleado";
import PantallaEmpleados from "./PantallaEmpleados";
import RegistroEmpresa from "./RegistroEmpresa";
import PantallaEmpresa from "./PantallaEmpresa"; // coincide con el archivo y el componente
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/empleados" element={<PantallaEmpleados />} />
        <Route path="/registro" element={<RegistroEmpleado />} />
        <Route path="/empresas" element={<PantallaEmpresa />} /> {/* coincide con import */}
        <Route path="/registro-empresa" element={<RegistroEmpresa />} />
      </Routes>
    </Router>
  );
}

export default App;
