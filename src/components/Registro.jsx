import React, { useState } from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";

import facebooktLogo from "../assets/img/001-facebook.png";
import linkedinLogo from "../assets/img/002-linkedin-logo.png";
import githubLogo from "../assets/img/003-github.png";

import "bootstrap/dist/css/bootstrap.min.css";

function Registro() {
  const [mensaje, setMensaje] = useState("");
  const [tipo, setTipo] = useState("");

  return (
    <div className="card">
      <h1>Crear una cuenta</h1>
      <div className="social">
        <SocialButton
          url="https://www.facebook.com/"
          icono={facebooktLogo}
          name="Facebook icon"
        />
        <SocialButton
          url="https://www.linkedin.com/"
          icono={linkedinLogo}
          name="LinkdIn icon"
        />
        <SocialButton
          url="https://github.com"
          icono={githubLogo}
          name="Github icon"
        />
      </div>

      <h3>O usa tu email para registrarte</h3>
      <Formulario setMensaje={setMensaje} setTipo={setTipo} />
      <Alert mensaje={mensaje} tipo={tipo} />
    </div>
  );
}

export default Registro;
