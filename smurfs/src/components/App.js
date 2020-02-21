import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

// Components
import SmurfForm from "./smurfForm";
import SmurfList from "./smurfList";

// Contexts
import { SmurfContext } from "../contexts/smurfContext";
import cuid from "cuid";

const App = () => {
  const [smurfList, setSmurfList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log("Response", res)
        setSmurfList(res.data)
      })
      .catch(err => console.log("Get error", err));
  }, []);

  
  const addSmurf = smurf => {
    setSmurfList([...smurfList, smurf]);
  };


  return (
    <div className="App">
      <SmurfContext.Provider value={{ smurfList, addSmurf }}>
        <div className="container">
          <SmurfForm key={cuid()}/>
          <SmurfList key={cuid()}/>
        </div>
      </SmurfContext.Provider>
    </div>
  );
};

export default App;
