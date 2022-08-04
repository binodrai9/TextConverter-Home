import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText) 
    props.showAlert("Converted to uppercase!","success");
  }
  const handleloClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase!","success");
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Text has been cleared!","success");
}
const handleCopy =()=>{
  var text = document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied text!","success");
}
const handleExtraSpaces =()=>{
  let newText = text.split(/[  ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra space has been removed!","success");
}
 
  const handleOnChange = (event)=>{
    setText(event.target.value)
    
  }
  const [text, setText] = useState('Enter Text Here');

  return (
    <>
  <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    
        <h2>{props.heading}</h2>
        <div className="mb-3">
       
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-1' onClick={handleloClick}>Convert to lowercase</button>
    <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear</button>
    <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
    <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
   </div>
   <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes to read</p> 
    <h3>Preview</h3>
    <p>{text}</p>
   </div>
    </>
  );
 
}

