import axios from "axios";
import React, { useState } from "react";
import uniqid from "uniqid";

function RegistroUsuarios() {

    
    //HOOKS
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [password, setPassword] = useState('');

    function agregarUsuario(){
        var usuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            password: password,
            idUsuario: uniqid()
        }

        axios.post('/api/registro', usuario).then(res => {
            alert(res.data)
        }).then(err => {
            console.log(err)
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
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" value={nombre} onChange={(e) =>{setNombre(e.target.value)}}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) =>{setEmail(e.target.value)}}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Telefono</label>
                <input type="number" className="form-control" value={telefono} onChange={(e) =>{setTelefono(e.target.value)}}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" value={password} onChange={(e) =>{setPassword(e.target.value)}}></input>
            </div>
            <button onClick={agregarUsuario} className="btn btn-success">Guardar usuario</button>
        </div>
      </div>
    </div>
  );
}

export default RegistroUsuarios;
