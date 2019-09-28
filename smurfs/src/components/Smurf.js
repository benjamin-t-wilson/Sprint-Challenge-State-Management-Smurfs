import React from "react";

const Smurf = props => {
  const smurfy = props.value;
  return (
    <div className="smurf">
      <h1>{smurfy.name}</h1>
      <p>Age: {smurfy.age}</p>
      <p>Height: {smurfy.height}</p>
    </div>
  );
};

export default Smurf;
