import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(15);
  const addValue = () => {
    setCount((prevCounter) => prevCounter + 1);
    setCount((prevCounter) => prevCounter + 1);
    if (count == 20) {
      setCount(0);
    }
  };
  const removeValue = () => {
    setCount(count - 1);
    if (count == 0) {
      setCount(0);
    }
  };
  return (
    <>
      <h1>Understanding useState Hooks</h1>
      <h2>Counter Project {count}</h2>
      <button onClick={addValue}>Add Value: {count}</button>
      <br />
      <button onClick={removeValue}>Remove Value: {count}</button>
    </>
  );
}

export default App;
