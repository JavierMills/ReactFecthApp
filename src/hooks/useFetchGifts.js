import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifts";

 export const useFetchGifts = ( category ) => {
  
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect ( () =>{

        getGifs( category )
            .then( images => {
              setTimeout(() => {
        
                setState({
                    data: images,
                    loading: false
                })
              }, 1000);
            })
        //Evaluamos el ecfeto cundo la categoria cambia
    },[ category ])
    return state;
}


