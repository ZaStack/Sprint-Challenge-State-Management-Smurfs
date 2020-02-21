import React, { useContext } from 'react';
import { FormContext } from '../contexts/formContext';
import styled from 'styled-components';

const FormDiv = styled.div `
    border: 3px solid navy;
    margin: 5%;
`


const SmurfForm = () => {
    const { handleChanges, handleSubmit, smurf} = useContext(FormContext)

    return (
        <FormDiv>
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
        </FormDiv>

    )
}

export default SmurfForm;