import axios from "axios";
import React, { useEffect, useState } from "react";
import UsuarioIndividual from "./UsuarioIndividual"
import Swal from 'sweetalert2'

function ListaUsuarios(){

    const[datausuarios, setDatausuarios] = useState([]);

    useEffect(() => {
      axios.get('/api/listaUsuarios', {headers:{"Content-Type" : "application/json"}}).then((res) =>{
        console.log(res)
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
    

    return(
        <div>
            <h2>
                Lista de usuarios      
                <UsuarioIndividual />                                                 
            </h2>
        </div>
    );
}


export default ListaUsuarios;