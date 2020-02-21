import React, { useContext } from 'react';
import { FormContext } from '../contexts/formContext';


const SmurfForm = () => {
    const { handleChanges, handleSubmit, smurf} = useContext(FormContext)

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor='name'>Name</label>
            <input type="text"
                    id='name'
                    name='name'
                    onChange={ handleChanges }
                    value={ smurf.name }
            />
            <label htmlFor="age">Age</label>
            <input type="text"
                    id='age'
                    name='age'
                    onChange={ handleChanges }
                    value={ smurf.age }
            />
            <label htmlFor="height">Height</label>
            <input type="text"
                    id='height'
                    name='height'
                    onChange={ handleChanges }
                    value={ smurf.height }
            />
            <button type='submit' onClick={handleSubmit}>Add Smurf</button>
        </form>
    )
}

export default SmurfForm;