import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
//"Boot up the React app by rendering the App component into the <div id='root'>
//main.jsx tells React:
//➜ “Take everything from the App component (your whole UI)
//➜ and show it inside that empty div on the page.”
