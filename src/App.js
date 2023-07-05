import logo from './logo.svg';
import './App.css';
import Interfaz1 from './componentes/interfaz1';
import Interfaz2 from './componentes/interfaz2';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import Interfaz3 from './componentes/interfaz3';

function App() {
  
  const [ofertas, setOfertas]=useState([
    {id:1,job: 'Frontend developer', salary:2300},
    {id:2,job: 'Backend developer', salary:3000},
    {id:3,job: 'DevOps', salary:2400},
    {id:4,job: 'Fullstack', salary:2000},
    {id:5,job: 'Fullstack', salary:2300},
  ]);
  
  function agregarOferta(nuevaO){
    ofertas.push(nuevaO);
  };

  const getOfertas = (id) => {
    return ofertas.find((oferta) => oferta.id === parseInt(id));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/api/offers" element={<Interfaz1 listaofertas={ofertas}/>}></Route>
          <Route path="/api/offer/new" element={<Interfaz2 agregarOfer={agregarOferta}/>}></Route>
          <Route path="/api/offer/:id" element={<Interfaz3 getOferta={getOfertas}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
