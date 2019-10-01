import React, { useContext } from "react";
import SmurfContext from "./contexts/SmurfContext.js";
import Smurf from "./Smurf";

const SmurfList = () => {
  const { smurfList } = useContext(SmurfContext);
  return (
    <div className="smurfVillage">
      {smurfList.map(cv => {
        return <Smurf value={cv} key={cv.id} />;
      })}
    </div>
  );
};

export default SmurfList;
