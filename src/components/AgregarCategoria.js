import React, { useState } from 'react';
import PropTypes from 'prop-types'

export default function AgregarCategoria( {setCategorias} ) {

    const [valor, setValor] = useState('');

    const valorNuevo = (e) => {
        setValor( e.target.value );
    }

    const enterSubmit = (e) => {
        e.preventDefault();

        if (valor.trim().length > 2) {
            setCategorias( cats => [ valor, ...cats ] );
            setValor('');
        }

    }

    return (
        <form onSubmit={enterSubmit}>
            <input type="text" placeholder='Ingrese un valor' value={ valor } onChange={ valorNuevo }/>
        </form>
    )

}

AgregarCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

