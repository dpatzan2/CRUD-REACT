import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditarUsuario() {
  const params = useParams();
  var navigate = useNavigate();
  //HOOKS
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios.get('/api/obtenerUsuario/' + params.idUsuario).then((res) =>{
        console.log(res)

        const datausuario = res.data.Usuarios;
        setNombre(datausuario.nombre);
        setEmail(datausuario.email);
    }).catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.Error,
            footer: '<a href="">Why do I have this issue?</a>'
          })
          console.log(error)
    })
  }, [])

  //FUNCION PARA EDITAR
  function editarusuario(){
    const actualizarusuario ={
        nombre: nombre,
        email: email,
    }

    axios.put("/api/editar-usuarios/" + params.idUsuario, actualizarusuario).then((res) =>{
        Swal.fire({
            icon: 'success',
            title: 'Bien',
            text: "me registre",
            footer: '<a href="">Why do I have this issue?</a>'
          })
          navigate("/")
    }).catch((error) =>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.Error,
            footer: '<a href="">Why do I have this issue?</a>'
          })
          console.log(error)
    })
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Editar usuarios</h2>
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
          <button onClick={editarusuario} className="btn btn-success">
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditarUsuario;
