import React from "react";
import Chai from "./chai";
import ReactDOM from "react-dom/client";

//at the end the below code gets converted into object

const anothername = "myname";
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click on me to visit google",
  anothername
);

ReactDOM.createRoot(document.getElementById("root")).render(<Chai />);
