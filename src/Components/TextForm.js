import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase!", "Success")
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase!", "Success")
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text is Cleared!", "Success")
  };

  const handleCopy = () => {
    let textElement = document.getElementById("myBox");
    textElement.select();
    navigator.clipboard.writeText(textElement.value);
    props.showAlert("Copied to Clipboard!", "Success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("All the Extra Spaces Are Removed!", "Success")
  };

  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("All the First Letters Are Capitalized!", "Success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);

  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
          }}
          rows="8"
        ></textarea>
        <button className="btn btn-secondary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-secondary mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-secondary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-secondary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-secondary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-secondary mx-1 my-2" onClick={handleCapitalize}>Capitalize Text</button>
      </div>
      <div className="container mt-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter(word => word.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter(word => word.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here"}</p>
      </div>
    </>
  );
}