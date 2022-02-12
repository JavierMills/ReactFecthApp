import React , { useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( {setCategories}) => {
    const [valueInput, setValueInput] = useState('');

    const InputChange = (e) => {
        setValueInput(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        if(valueInput.trim().length > 2){
           setCategories ( categ => [valueInput, ...categ, ]);
           setValueInput('');

        }
        
        // console.log('Submit hecho');


    }

  return (
   <form onSubmit={ submit }>
        <input 
        type='text'
        value={ valueInput }
        onChange={ InputChange} />
   </form>
         )
}


AddCategory.propTypes = {
     setCategories : PropTypes.func.isRequired
}


