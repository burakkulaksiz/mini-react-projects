import { useState } from "react";
import "./box.scss";

const Box = ({ id, player, boxArray, setBoxArray }) => {
  const [disabledBox, setDisabledBox] = useState(false);

  const handleClick = () => {
    setDisabledBox(!disabledBox);
    let newArray = [...boxArray];
    newArray[id] = player;
    setBoxArray(newArray);
  };

  return (
    <>
      <button disabled={disabledBox} onClick={handleClick} className={`box box-disabled-${disabledBox}`}>
        {boxArray[id]}
      </button>
    </>
  );
};

export default Box;
