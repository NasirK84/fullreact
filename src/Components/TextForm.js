import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();       
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowClick = ()=>{
        //console.log("Lowercase was clicked" + text); 
        let newText = text.toLowerCase();       
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{
        let newText = '';       
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = ()=>{
        let newText = document.getElementById("myBox");
        newText.select();      
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);        
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    
  return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="6" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Spaces</button>
    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.length>0 ? text.trim().split(" ").length : 0} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter something to preview it here"}</p>
    </div>
    </>
  )
}
