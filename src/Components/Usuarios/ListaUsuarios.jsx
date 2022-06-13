import React from "react";
import UsuarioIndividual from "./UsuarioIndividual"

function ListaUsuarios(){
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