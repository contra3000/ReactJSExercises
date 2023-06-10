import React, { useState } from "react";
import PropTypes from 'prop-types';
import { ContactoComponent } from "../pure/contacto";
import { Contacto } from "../../models/contacto.class";

export const EstadoContacto = ({ contactoComponent }) => {

    const [conectado, setconectado] = useState(false);

    const defaultContacto = new Contacto('Juan', 'Contreras', 'email', conectado)

    const changeState = () => {
        setconectado(!defaultContacto.conectado);
    }

    return (
        <div>
            <ContactoComponent contacto={defaultContacto}></ContactoComponent>
            <button onClick={changeState}>Cambiar estado</button>
        </div>
    )
}

EstadoContacto.propTypes = {
    contactoComponent: PropTypes.instanceOf(ContactoComponent),
};