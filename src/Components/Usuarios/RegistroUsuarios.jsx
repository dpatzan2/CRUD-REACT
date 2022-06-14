import axios from "axios";
import React, { useState } from "react";
import uniqid from "uniqid";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RegistroUsuarios() {

  var navigate = useNavigate();
  //HOOKS
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");

  function agregarUsuario() {
    var usuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      password: password,
      idUsuario: uniqid(),
    };

    axios
      .post("/api/registro", usuario)
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Bien...',
          text: "me registre",
          footer: '<a href="">Why do I have this issue?</a>'
        })
        navigate("/")
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.Error,
          footer: '<a href="">Why do I have this issue?</a>'
        })
        console.log(error.response.data.Error)
      });
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Registrar usuarios</h2>
      </div>

      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Telefono
            </label>
            <input
              type="number"
              name="telefono"
              className="form-control"
              value={telefono}
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <button onClick={agregarUsuario} className="btn btn-success">
            Guardar usuario
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistroUsuarios;
