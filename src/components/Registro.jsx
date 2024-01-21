// acá debo renderizar todo todo
// importar la alerta
// importar el socialbutton

import { useState } from "react";
import Formulario from "./Formulario";
import Alert from "./Alert";
import SocialButton from "./SocialButton";



function Registro() {
  const [alert, setAlert] = useState({
    error: "",
    message: "",
    color: "",
  });

  const metaIcon = true;
  const githubIcon = true;
  const linkedinIcon = true;


  
  return <>
  <main>
    <h1>Crear una cuenta</h1>
    <div className="iconos">
  <SocialButton metaIcon={metaIcon} githubIcon={githubIcon} linkedinIcon={linkedinIcon} />
  </div>

  <p>O usa tu email para registrarte</p>

  <Formulario setAlert={setAlert}/>
  { alert.message && <Alert error={alert.error} color={alert.color}>{alert.message}</Alert> }
  </main>
  </>;
}

export default Registro;
