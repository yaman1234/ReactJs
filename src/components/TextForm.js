import React, { useState } from 'react'

export default function TextForm(props) {


    // video tutorial 7
    const handleUpClick = () => {
        console.log("Uppcase was clicked");
        setText("you have clicked the handleUpClick" + text)
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = () => {
        console.log("handleLowerClick was clicked");
        setText("you have clicked the handleLowerClick" + text)
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        console.log("handleClearClick was clicked");
        setText("");
    }

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }


    const [text, setText] = useState('default text');
    // text ="update text";     // wrong way to update state
    // setText('new Text');     // correct way to update state

    return (
        <>
        <div className='container my-2'>
            <h1 className="text-start">{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>

            <button type="button" onClick={handleUpClick} className="btn btn-primary mx-2">Convert to Uppercase</button>
            <button type="button" onClick={handleLowerClick} className="btn btn-primary mx-2">Convert to lowercase</button>
            <button type="button" onClick={handleClearClick} className="btn btn-primary mx-2">Clear</button>
        </div>

        <div className="container my-3 border ">
        <h1 className="text-start">Your Text summary</h1>
        <p className="text-start">{text.split(" ").length -1} words , {text.length} characters</p>
        <p className="text-start">{0.008*(text.split(" ").length - 1)} minutes read</p>

        
        <h2 className="text-start">Preview</h2>
        <p className="text-start">{text}</p>
        </div>

        </>
    )
}
