import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// Components
import SmurfForm from "./smurfForm";
import SmurfList from "./smurfList";
import cuid from "cuid";

// Contexts
import { SmurfContext } from "../contexts/smurfContext";
import { FormContext } from "../contexts/formContext";

const App = () => {
  const [smurfList, setSmurfList] = useState([]);
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log("Response", res);
        setSmurfList(res.data);
      })
      .catch(err => console.log("Get error", err));
  }, [smurf]);

  const addSmurf = smurf => {
    const newSmurf = {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height,
      id: cuid()
    };

    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        console.log('Response', res)
        smurfList.push()
      })
      .catch(err => {
        console.log('Post error', err)
      });
      console.log('Appended list', smurfList)
  };

  const handleChanges = e => {
    e.preventDefault();
    setSmurf({...smurf, [e.target.name]: e.target.value })
  };

  const handleSubmit = e => {
    e.preventDefault();
    addSmurf(smurf);
    setSmurf({name: '', age: '', height: ''})
  }

  return (
    <div className="App">
      <SmurfContext.Provider value={{ smurfList }}>
      <FormContext.Provider value={{ handleChanges, handleSubmit, smurf } }>
        <div className="container">
          <SmurfForm key={cuid()} />
          <SmurfList key={cuid()} />
        </div>
      </FormContext.Provider>
      </SmurfContext.Provider>
    </div>
  );
};

export default App;
