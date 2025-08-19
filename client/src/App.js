import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistroEmpleado from "./RegistroEmpleado";
import PantallaEmpleados from "./PantallaEmpleados";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PantallaEmpleados />} />
          <Route path="/registro" element={<RegistroEmpleado />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
