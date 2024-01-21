import { useState } from "react";

// acá vamos a tomar los datos y campos del formulario
// cuando uso el UsedState voy a modificar el estado de un componente y que este se renderice con los nuevos valores

function Formulario({ setAlert }) {
  const [formData, SetFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validarFormulario = (e) => {
    e.preventDefault(); // nos ayuda a que el formulario no se envíe antes de que estén todos los datos

    const { nombre, email, password, confirmPassword } = formData;
    const validarInputs = !nombre || !email || !password || !confirmPassword;
    const validarClave = password !== confirmPassword;

    validarInputs // operador
      ? setAlert({
          error: true,
          message: "Por favor, completa todos los campos",
          color: "warning",
        })
      : setAlert({
          error: false,
          message: "Cuenta creada exitosamente",
          color: "success",
        });

    if (validarClave) {
      // IF
      setAlert({
        error: true,
        message: "Las contraseñas no coinciden",
        color: "danger",
      });
      return;
    }

    SetFormData({
      // después de enviar el formulario se borrarán todos los datos
      nombre: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    SetFormData({ ...formData, [e.target.name]: e.target.value }); // esta copia del estado es por si es que pasa algún error de código y todo esto se rompa
  };

  // todo lo que está previo al return es la lógica, lo verá el programador
  return (
    // todo lo que viene bajo el return es lo que se renderizará y verá el usuario
    <>
      <form className="formulario" onSubmit={(e) => validarFormulario(e)}>
        <div className="form-group mb-3">
          {/* Elemento nombre */}
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            onChange={handleChange}
            value={formData.nombre}
          />
        </div>

        <div className="form-group mb-3">
          {/* Elemento email */}
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="correoelectrónico@dominio.com"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="form-group mb-3">
          {/* Elemento contraseña */}
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Contraseña"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <div className="form-group mb-3">
          {/* Elemento confirmar contraseña */}
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="Confirma tu constraseña"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
        </div>

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-success">
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
}

export default Formulario;
