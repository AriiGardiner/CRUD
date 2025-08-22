import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistroEmpleado from "./RegistroEmpleado";
import PantallaEmpleados from "./PantallaEmpleados";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/empleados" element={<PantallaEmpleados />} />
        <Route path="/registro" element={<RegistroEmpleado />} />
      </Routes>
    </Router>
  );
}

export default App;
