import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let obj = {
    username: "tej",
    age: 18,
  };

  return (
    <>
      <h1 className="bg-green-300 text-black p-4 mb-4">Tailwind and Props</h1>
      <Cards username="tej" btnText="cick me" />
      <Cards username="manish" btnText="visit me" />
      <Cards />
    </>
  );
}

export default App;
