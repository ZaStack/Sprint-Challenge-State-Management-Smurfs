import React, { useContext } from 'react';
import {SmurfContext} from '../contexts/smurfContext';

const Smurf = () => {
    const { smurf } = useContext(SmurfContext);


    return (
        <div className="smurf">
            <h2>Name:{smurf.name}</h2>
            <p>Age:{smurf.age}</p>
            <p>Height:{smurf.height}</p>
        </div>
    )
}


export default Smurf;