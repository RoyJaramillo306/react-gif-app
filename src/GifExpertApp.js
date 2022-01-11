import React, { useState } from 'react'
import AgregarCategoria from './components/AgregarCategoria';
import { GifsCard } from './components/GifsCard';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Gokú']);

    /* const agregar = () => {
        setCategorias( categorias => [...categorias, 'Gohan'] );
    } */

    return (
        <>
            <h2>Gif App</h2>
            <AgregarCategoria setCategorias={setCategorias} />
            <hr/>

            <ul>
                { categorias.map( (categoria) => <GifsCard key={categoria} categoria={categoria}/> ) }
            </ul>
        </>
    )

}

