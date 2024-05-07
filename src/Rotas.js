import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Atualize aqui
import Home from './Home';
import Atividade01 from './Atividade01';

function Rotas() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/atividade01" element={<Atividade01 />} /> 
      </Routes>
    </Router>
  );
}

export default Rotas;
