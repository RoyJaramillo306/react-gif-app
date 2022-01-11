import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifCardItem } from './GifCardItem';

export const GifsCard = ({categoria}) => {

    const { data, loading } = useFetchGifs(categoria);

    return (
        <>
            <h3> {categoria} </h3>

            { loading && <p>Cargando data..</p> }
            
            <div className='card-gif'>
                { data.map( gif => <GifCardItem key={gif.id} {...gif} /> ) }
            </div>
        </>
    )

}

