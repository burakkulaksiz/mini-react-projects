import { useEffect, useState } from "react";
import BoxContainer from "./components/BoxContainer/BoxContainer.jsx";
import "./App.scss";

const initialBoxArray = Array(9).fill("");

const App = () => {
  const [player, setPlayer] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [noWin, setNoWin] = useState(false);
  const [boxArray, setBoxArray] = useState(initialBoxArray);

  const checkGame = (first, second, third) => {
    if (boxArray[first] === boxArray[second]) {
      if (boxArray[third] === boxArray[first]) {
        if (boxArray[first] !== "") {
          setGameOver(true);
        }
      }
    }
  };

  const checkArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    checkArray.forEach((arr) => {
      checkGame(arr[0], arr[1], arr[2]);
    });

    player === "X" ? setPlayer(() => "O") : setPlayer(() => "X");

    if (boxArray.indexOf("") === -1) {
      setGameOver(true);
      setNoWin(true);
    }
  }, [boxArray]);

  useEffect(() => {
    player === "X" ? setPlayer(() => "O") : setPlayer(() => "X");
  }, [gameOver]);

  const startNewGame = () => {
    setBoxArray(initialBoxArray);
    setGameOver(false);
    setNoWin(false);
  };

  return (
    <>
      <div className="app-container">
        {!gameOver && <span className="next-player">next player: {player}</span>}
        <div className="app-container-item">
          <div className="game-name">Tic Tac Toe</div>
          {gameOver ? (
            noWin ? (
              <div>
                no winner
                <button className="new-game" onClick={startNewGame}>
                  new game
                </button>
              </div>
            ) : (
              <div>
                winner is {player}{" "}
                <button className="new-game" onClick={startNewGame}>
                  new game
                </button>
              </div>
            )
          ) : (
            <BoxContainer player={player} boxArray={boxArray} setBoxArray={setBoxArray} />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
