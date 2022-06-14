import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function UsuarioIndividual({ usuario }) {
  var navigate = useNavigate();

  //ANIMACIONES SCROLL

  useEffect(() => {
    AOS.init();
  }, []);

  function eliminarUsuario(id) {
    Swal.fire({
      title: "Estas seguro?",
      text: "Si eliminas esta tarea, no la puedes recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar.",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete("/api/eliminar-usuarios/" + id)
          .then((res) => {
            Swal.fire(
              "Eliminada",
              "La tarea se elimino correctamente",
              "success"
            );
            navigate(0);
          })
          .catch((error) => {});
      }
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-sm-6 offset-3"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <ul className="list-group">
            <li className="list-group-item">{usuario._id}</li>
            <li className="list-group-item">{usuario.nombre}</li>
            <li className="list-group-item">{usuario.email}</li>
          </ul>
          <Link to={`/editarusuario/${usuario._id}`}>
            <li className="btn btn-success">Editar</li>
          </Link>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              eliminarUsuario(usuario._id);
            }}
          >
            Eliminar
          </button>
          <hr className="mt-4"></hr>
        </div>
      </div>
    </div>
  );
}

export default UsuarioIndividual;
