import Box from "./Box/Box.jsx";
import "./boxContainer.scss";

const BoxContainer = ({ player, boxArray, setBoxArray }) => {
  return (
    <>
      <div className="box-container">
        {boxArray.map((boxInfo, id) => (
          <Box key={id} id={id} player={player} boxArray={boxArray} setBoxArray={setBoxArray} />
        ))}
      </div>
    </>
  );
};

export default BoxContainer;
