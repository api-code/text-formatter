/*this code with show output on web browser*/
// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light"); //whearther dark mode is enable or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background ='#042743';
    } else {
      setMode("light");
      document.body.style.background ='white';
    }
  };
  return (
    //jsx is start from here
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter Text to analyze below..." mode={mode}></TextForm>
      </div>
      <div>{/* <About></About> */}</div>
    </>
    //jsx ends here
  );
}
export default App;
