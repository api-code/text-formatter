/*this code with show output on web browser*/
// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/alert";

function App() {
  const [mode, setMode] = useState("light"); //whearther dark mode is enable or not
  const[alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    },10000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background ='#042743';
      showAlert("Dark Mode has been enabled", "Success");
    } 
    else {
      setMode("light");
      document.body.style.background ='white';
      showAlert("light Mode has been enabled", "Success");
    }
  };
  return (
    //jsx is start from here
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter Text to analyze ..." mode={mode}></TextForm>
      </div>
      <div>{/* <About></About> */}</div>
    </>
    //jsx ends here
  );
}
export default App;
