import PropTypes from "prop-types";
import React from "react";
import { Contacto } from "../../models/contacto.class";

export const ContactoComponent = ({ contacto }) => {
    return (
    <div>
        <h3>
            Nombre: { contacto.nombre }
        </h3>
        <h3>
            Apellido: { contacto.apellido }
        </h3>
        <h3>
            Email: { contacto.email }
        </h3>
        <h4>
            { contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible' }
        </h4>
    </div>
);
};

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
};