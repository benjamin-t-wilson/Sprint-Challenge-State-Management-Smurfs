import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

import FormContext from "./contexts/FormContext.js";
import SmurfContext from "./contexts/SmurfContext.js";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

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

  const newSmurf = event => {
    event.preventDefault();
    var smurfy = { ...formValue, id: Date.now() };
    axios
      .post("http://localhost:3333/smurfs", smurfy)
      .then(res => {
        setSmurfList(res.data);
      })
      .catch(err => {
        console.log("Error", err);
      });
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
    <div className="container">
      <SmurfContext.Provider value={{ smurfList }}>
        <FormContext.Provider value={{ formValue, handleChanges, newSmurf }}>
          <header>
            <h1>Hello! And welcome to Smurf Village!</h1>
            <p>
              Feel free to look around and meet the smurfs, even move a new
              smurf in!
            </p>
          </header>
          <div className="sidebyside">
            <SmurfForm />
            <SmurfList />
          </div>
        </FormContext.Provider>
      </SmurfContext.Provider>
    </div>
  );
};

export default App;
