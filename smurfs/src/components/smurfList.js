import React, { useContext } from "react";
import { SmurfContext } from "../contexts/smurfContext";
import cuid from "cuid";
import styled from 'styled-components';

const SmurfCard = styled.div`
    background-color: navy;
    color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 40%
    padding: 5%;
    
`

const SmurfList = () => {
    const { smurfList } = useContext(SmurfContext);
    console.log("Smurf list smurfList", smurfList)

    return (
        <div className="smurf-list">
            {smurfList.map(smurf => (
            <SmurfCard key={cuid()}>
                <h2>Name:{smurf.name}</h2>
                <p>Age:{smurf.age}</p>
                <p>Height:{smurf.height}</p>
            </SmurfCard>
            ))}
        </div>
    )}
export default SmurfList;
