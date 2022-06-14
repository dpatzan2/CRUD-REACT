import axios from "axios";
import React, { useEffect, useState } from "react";
import UsuarioIndividual from "./UsuarioIndividual";
import Swal from "sweetalert2";

function ListaUsuarios() {
  const [datausuarios, setDatausuarios] = useState([]);

  useEffect(() => {
    axios
      .get("/api/listaUsuarios", {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data.Usuarios);
        setDatausuarios(res.data.Usuarios);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.Error,
          footer: '<a href="">Why do I have this issue?</a>',
        });
        console.log(error);
      });
  }, []);

  

  //MAPEAR LISTA DE USUARIOS
  const listausuarios = datausuarios.map((Usuarios) => {
    return (
      <div>
        <UsuarioIndividual usuario={Usuarios} />
      </div>
    );
  });

  return (
    <div>
      <h2>Lista de usuarios</h2>

      {listausuarios}
    </div>
  );
}

export default ListaUsuarios;
