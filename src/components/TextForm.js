import React, { useState } from "react";
//The useState() is a Hook that allows you to have state variables in functional components

export default function TextForm(props) {
  //handing click event to convert the text into upper case using following function
  const handleUpClick = () => {
    let newText = text.toUpperCase(); //using toUpperCase() we are converting our text into upper case and storing the text in newText variable
    setText(newText); //here we are passing the newText value to setText state
    props.showAlert("Converted to upper case","success");
  };

  //converting text into lower case
  const handleLowClick = () => {
    // console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase(); //using toUpperCase() we are converting our text into upper case and storing the text in newText variable
    setText(newText); //here we are passing the newText value to setText state
    props.showAlert("Converted to lower case","success");
  };
  //clearing text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared","success");
  };
  //converting text to capitalization - Hi I Am Apeksha
  const handleCapitalizeClick = () => {
    let newText = text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showAlert("Converted to Capitalize form","success");
  };
  //converting text to sentence check - Hi i am apeksha
  const handleSentenceClick = () => {
    let newText =
      text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
    setText(newText);
    props.showAlert("Converted to Sentence form","success");
  };

  const CamelCaseConverter = () => {
    //Split the word by spaces or special characters
    let newText = text.split(/[\s_-]+/);

    // Capitalize the first letter of each word except the first one
    let camelCaseWords = newText.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    let camelCaseWord = camelCaseWords.join("");
    // this.useState({camelCaseWord});
    setText(camelCaseWord);
    props.showAlert("Converted to camel case","success");
  };

  //converting text to snake case
  const snakeCaseConverter = () => {
    let newText = text;
    // Replace spaces with underscores
    let snakeCaseWord = newText.replace(/\s+/g, "_");

    // Convert to lowercase and insert underscores before uppercase letters
    let finalSnakeCaseWord = snakeCaseWord.replace(/([a-z])([A-Z])/g, "$1_$2");
    // Convert the result to lowercase
    setText(finalSnakeCaseWord.toLowerCase());
    props.showAlert("Converted to snake case","success");
  };

  //converting text to pascal
  const pascalCaseConverter = () => {
    let newText = text;
    // Split the word by spaces and capitalize each part
    const capitalizedParts = newText
      .split(" ")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1));

    // Join the capitalized parts together
    const pascalCaseWord = capitalizedParts.join("");

    setText(pascalCaseWord);
    props.showAlert("Converted to pascal case","success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select(); //selecting all text
    navigator.clipboard.writeText(text.value); //by using navigator we have copied the whole text taking value
    props.showAlert("Selected text has been copied","success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been cleared","success");
  };

  //using below function we are changeibg the event of button here the button will handle
  const handleOnChange = (event) => {
    // console.log("Onchanged");
    setText(event.target.value); //using this we are able to change setText value after event happenning on text area
  };

  const [text, setText] = useState(""); //sysntxt - const [state, setState] = useState(initialstate) ,The first element is the initial state and the second one is a function that is used for updating the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleSentenceClick}>
          Sentence Case
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleCapitalizeClick}
        >
          Capitalize Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Upper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Lower Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <div>
          <button className="btn btn-primary mx-1" onClick={CamelCaseConverter}>
            Camel Case Converter
          </button>
          <button className="btn btn-primary mx-1" onClick={snakeCaseConverter}>
            Snake Case Converter
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={pascalCaseConverter}
          >
            Pascal Case Converter
          </button>
          <button className="btn btn-primary my-3" onClick={handleExtraSpace}>
            Remove Extra Space
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {/* text.trim() is used to remove any leading or trailing whitespace from the text variable.  */}
        {text.trim().length > 0 ? `${text.split(" ").length} Words, ${text.length} characters` : "0 Words, 0 characters"}
        {/* {text.split("").length} Words,{text.length} characters */}
        </p>
        <p>this text time taken to read is {0.08 * text.split(" ").length} </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter somthing in the above text box to preview it here"}
        </p>
      </div>
    </>
  );
}
