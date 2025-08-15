import './App.css';
import{ useState } from 'react';

function App() {
  const [nombre, setNombre]= useState("");
  const [apellido, setApellido]= useState("");
  const [edad, setEdad]= useState(0);
  const [nacionalidad, setNacionalidad]= useState("");
  const [cargo, setCargo]= useState("");
  const mostrardatos = () => {
    alert(nombre);
  }

  return (
    <div className="App">
      <div className="datos">
  <label>Nombre: <input 
  onChange={(event)=>{
    setNombre(event.target.value);
  }}
  type="text" /></label>
  <label>Apellido: <input 
  onChange={(event)=>{
    setApellido(event.target.value);
  }}
  type="text" /></label>
  <label>Edad: <input 
  onChange={(event)=>{
    setEdad(event.target.value);
  }}
  type="number" /></label>
  <label>Nacionalidad: <input
  onChange={(event)=>{
    setNacionalidad(event.target.value);
  }}
  type="text" /></label>
  <label>Cargo: <input 
  onChange={(event)=>{
    setCargo(event.target.value);
  }}
  type="text" /></label>
  <button onClick={mostrardatos} type="">Registrar</button>
</div>

    </div>
  );
}

export default App;
