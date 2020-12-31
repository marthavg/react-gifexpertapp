import { useEffect, useState } from "react"
import getGifs from '../helpers/getGifs'

const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        // getGifs();
        getGifs(category)
            .then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                });
            }); //.then( imgs => setImages( imgs ))
    }, [category])

   
    return state; //{data:[], loading: true}
}

export default useFetchGifs;