import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categoria) => {

    const [state, setstate] = useState({ data: [], loading: true });

    useEffect(() => {
        
        getGifs(categoria)
            .then( resp => {
                setTimeout(() => {
                    setstate({
                        data: resp,
                        loading: false
                    });
                }, 1500);
            })

    }, [categoria])

    return state;

}


