import React, { useContext } from "react";
import { SmurfContext } from "../contexts/smurfContext";

const SmurfList = () => {
    const { smurfList } = useContext(SmurfContext);
    console.log("Smurf list smurfList", smurfList)

    return (
        <div className="smurf-list">
            {smurfList.map(smurf => (
            <div className="smurf">
                <h2>Name:{smurf.name}</h2>
                <p>Age:{smurf.age}</p>
                <p>Height:{smurf.height}</p>
            </div>
            ))}
        </div>
    )}
export default SmurfList;
