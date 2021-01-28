import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
// import HookCounter from "./components/hooksCounter";
// import Hook1 from "./components/hook1";
// import HoolFour from "./components/hook2";
// import HookMouse from "./components/hookMouse";
// import MOuseContainer from "./components/mouseContainer";
// import HookTimer from "./components/hookTimer";
// import DataFetching from "./components/dataFetching";
// import ReduserCounter from "./components/reduserCounter";
import Apple from "./mltLyrCoponent/Apple";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hook1 /> */}
    {/* <HoolFour /> */}
    {/* <HookCounter /> */}
    {/* <HookMouse /> */}
    {/* <MOuseContainer /> */}
    {/* <HookTimer /> */}
    {/* <DataFetching /> */}
    {/* <ReduserCounter /> */}
    <Apple />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
