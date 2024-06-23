import "./App.css";
import { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const addHandler = () => {
    let storedNums = [...numbers];
    storedNums.push(storedNums[storedNums.length - 1] + 1);
    setNumbers(storedNums);
  };

  const [inputText, setInputText] = useState(" ");
  const changeHandler = (event) => {
    setInputText(event.target.value);
  };

  return (
    <>
      <h1>hello world</h1>
      <div>
        {numbers.map((number, index) => {
          return <p key={index}>{number}</p>;
        })}
        <button onClick={addHandler}>push</button>
      </div>

      <div>
        <input type="text" onChange={changeHandler}></input>
        <p>{inputText}</p>
      </div>
    </>
  );
}

export default App;
