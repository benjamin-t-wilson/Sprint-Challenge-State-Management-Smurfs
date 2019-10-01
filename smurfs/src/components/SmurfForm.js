import React, { useContext } from "react";
import FormContext from "./contexts/FormContext.js";

const SmurfForm = () => {
  const { formValue, handleChanges, newSmurf } = useContext(FormContext);
  return (
      <form onSubmit={newSmurf}>
          <p>Oh, are you new in town? Please, tell me about yourself!</p>
          <label htmlFor="name">What is your name?</label>
          <input type="text" name="name" value={formValue.name} placeholder="Smurfy McSmurf-Face" onChange={handleChanges} />
          <label htmlFor="age">How old are you?</label>
          <input type="text" name="age" value={formValue.age} placeholder="42" onChange={handleChanges} />
          <label htmlFor="height">How tall are you?</label>
          <input type="text" name="height" value={formValue.height} placeholder="10cm" onChange={handleChanges} />
          <button type="submit">New Smurf</button>
      </form>
  )
};

export default SmurfForm;
