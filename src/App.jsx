import { useState } from "react";
import Icon from "./components/icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const tikArray = new Array(9).fill("");

function App() {
  const [isCross, setIsCross] = useState(true);
  const [winMessage, setWinMessage] = useState("");

  //Play again

  const playAgain = () => {
    tikArray.fill("");
    setIsCross(true);
    setWinMessage("");
  };

  //Find winner

  const findWinner = () => {
    if (
      tikArray[0] == tikArray[1] &&
      tikArray[0] == tikArray[2] &&
      tikArray[0] != ""
    ) {
      setWinMessage(tikArray[0], "has won");
    } else if (
      tikArray[3] == tikArray[4] &&
      tikArray[3] == tikArray[5] &&
      tikArray[3] != ""
    ) {
      setWinMessage(tikArray[3], "has won");
    } else if (
      tikArray[6] == tikArray[7] &&
      tikArray[6] == tikArray[8] &&
      tikArray[6] != ""
    ) {
      setWinMessage(tikArray[6], "has won");
    } else if (
      tikArray[0] == tikArray[4] &&
      tikArray[0] == tikArray[8] &&
      tikArray[0] != ""
    ) {
      setWinMessage(tikArray[0], "has won");
    } else if (
      tikArray[2] == tikArray[4] &&
      tikArray[2] == tikArray[6] &&
      tikArray[2] != ""
    ) {
      setWinMessage(tikArray[2], "has won");
    } else if (
      tikArray[0] == tikArray[3] &&
      tikArray[0] == tikArray[6] &&
      tikArray[0] != ""
    ) {
      setWinMessage(tikArray[0], "has won");
    } else if (
      tikArray[1] == tikArray[4] &&
      tikArray[1] == tikArray[7] &&
      tikArray[1] != ""
    ) {
      setWinMessage(tikArray[1], "has won");
    } else if (
      tikArray[2] == tikArray[5] &&
      tikArray[2] == tikArray[8] &&
      tikArray[2] != ""
    ) {
      setWinMessage(tikArray[2], "has won");
    } else if (tikArray.indexOf("") == -1) {
      setWinMessage("Nobody");
    }
  };

  //Change item

  const changeItem = (index) => {
    if (winMessage) {
      return toast("Game over, press the reset button for a new one");
    }
    if (tikArray[index] != "") {
      return toast("already marked");
    } else if (tikArray[index] == "") {
      tikArray[index] = isCross == true ? "cross" : "circle";
      setIsCross(!isCross);
      findWinner();
    }
  };

  return (
    <>
      {winMessage ? (
        <>
          <h2>Game Over</h2>
          <h1>{winMessage.toUpperCase()} has won!</h1>
          <button onClick={playAgain}>Reset</button>
        </>
      ) : (
        <h1>Next chance for: {isCross ? "Cross" : "Circle"}</h1>
      )}
      <div className="grid">
        {tikArray.map((item, index) => (
          <div onClick={() => changeItem(index)} className="box" key={index}>
            <Icon ic={item} />
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
