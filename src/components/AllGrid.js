import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts'
import { GifGridItem } from './GifGridItem';

export const AllGrid = ({ category }) => {
    
    const { data:images, loading } =  useFetchGifts( category );
   
    
    //    getGifs();
    return(
        
        <> 
            <h3 className='animate__animated animate__rubberBand'>{ category }</h3>
            { loading && <p>Cargando...</p> }
            <div className= "card-grid">
            <ol>
                {
                    images.map( item => (
                      <GifGridItem
                       key={ item.id}
                      {...item}
                      />
                    ))
                }
            </ol>
        </div>
        </>
    )
}
