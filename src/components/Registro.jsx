import React, { useState } from 'react';
import SocialButton from "./SocialButton";
import Formulario from "./Formulario"
import Alert from './Alert';

import 'bootstrap/dist/css/bootstrap.min.css';


function Registro() {
  const [mensaje, setMensaje] = useState('');
  const [tipo, setTipo] = useState('');

  return (
    <div className="card">
      <h1>Crear una cuenta</h1>
      <SocialButton />
      <h3>O usa tu email para registrarte</h3>
      <Formulario setMensaje={setMensaje} setTipo={setTipo} />
      <Alert mensaje={mensaje} tipo={tipo} />
    </div>
  );
}

export default Registro;
