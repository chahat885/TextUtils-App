import React from 'react'
import PropTypes from 'prop-types'
import react, { useState } from 'react';




export default function TextForm(props) {
  const [text, settext] = useState('');

  const handleupclick = () => {
    console.log("uppercase was clicked" + text);

    if (text.trim().length === 0) {
      props.showalert("Textbox is empty!", "warning");
      return;
    }
    else {
      const newtext = text.toUpperCase();
      settext(newtext);
      props.showalert("Converted to uppercase", "success");
    }
  }

  const handleloclick = () => {
    console.log("lowercase was clicked" + text);
    if (text.trim().length === 0) {
      props.showalert("Textbox is empty!", "warning");
      return;
    }

    else {
      const newtext = text.toLowerCase();
      settext(newtext);
      props.showalert("Converted to lowercase", "success");
    }
  }


  const handleclear = () => {
    console.log("lowercase was clicked" + text);

    if (text.trim().length === 0) {
      props.showalert("Textbox is empty!", "warning");
      return;
    }
    else {
      const newtext = ' ';
      settext(newtext);
      props.showalert("Text Clear", "success");
    }
  }

  const handleonchange = (event) => {
    console.log("on change click");
    settext(event.target.value);
  }

  const handlecopy = (event) => {
    if (text.trim().length === 0) {
      props.showalert("Textbox is empty!", "warning");
      return;
    }
    else {
      var newtext = document.getElementById("mybox");
      newtext.select();
      navigator.clipboard.writeText(newtext.value);
      document.getSelection().removeAllRanges();
      props.showalert("Text Copied", "success");
    }
  }

  const handlespace = (event) => {
    if (text.trim().length === 0) {
      props.showalert("Textbox is empty!", "warning");
      return;
    }
    else {
      let newtext = text.split(/[ ]+/);
      settext(newtext.join(" "));
      props.showalert("Remove Extra-Spaces", "Success");

    }
  }


  return (
    <>
      <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>{props.heading}</h1>


        <div className='mb-3'>
          <textarea className="form-control my-3" id="mybox" value={text} rows="8" onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(26, 18, 131)' : 'white', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
        </div>

        <button className="btn btn-primary" disabled={text.length===0}onClick={handleupclick}>Convert to upperCase</button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0}onClick={handleloclick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx- 1 my-1"disabled={text.length===0} onClick={handleclear}>Clear text</button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0}onClick={handlecopy}>Copy text</button>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handlespace}>Remove ExtraSpace</button>
      </div>


      <div className="container my-3 " style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} length</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} time to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview !"}</p>
      </div>



    </>
  )
}
