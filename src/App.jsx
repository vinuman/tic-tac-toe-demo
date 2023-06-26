import { useState } from "react";
import Icon from "./components/icon";

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
    }
  };

  //Change item

  const changeItem = (index) => {
    if (tikArray[index] != "") {
      console.log("already filled");
    } else if (tikArray[index] == "") {
      tikArray[index] = isCross == true ? "cross" : "circle";
    }
  };

  return (
    <>
      <div></div>
    </>
  );
}

export default App;
