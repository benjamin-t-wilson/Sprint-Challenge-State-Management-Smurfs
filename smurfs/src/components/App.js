import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

import FormContext from "./contexts/FormContext.js";
import SmurfContext from "./contexts/SmurfContext.js";

const App = () => {
  const [smurfList, setSmurfList] = useState([]);
  const [formValue, setFormValue] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  });

  const handleChanges = event => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const newSmurf = () => {
    var smurfy = { ...formValue, id: Date.now() };
    setSmurfList([...smurfList, smurfy]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        setSmurfList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <SmurfContext.Provider value={{ smurfList }}>
        <FormContext.Provider value={{ formValue, handleChanges, newSmurf }}>
          <p>test</p>
        </FormContext.Provider>
      </SmurfContext.Provider>
    </>
  );
};

export default App;
