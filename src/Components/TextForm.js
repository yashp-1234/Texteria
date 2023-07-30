import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUPClick = ()=> {
        //console.log("Upper case was clicked" + " " +text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLowClick = ()=> {
        //console.log("Upper case was clicked" + " " +text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared the text", "success");
    }
    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }
    const[text,setText] = useState("");

  return (
    <>
    <div className={`text-${props.mode==='dark'?'white':'black'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#212f3c':'white', color: props.mode==='dark'?'white':'black'}} value = {text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUPClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
        <button className="btn btn-primary" onClick={handleClear}>Clear Text</button>
    </div>
    <div className={`container my-2 text-${props.mode==='dark'?'white':'black'}`}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read the written text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here..."}</p>
    </div>
    </>
  )
}
