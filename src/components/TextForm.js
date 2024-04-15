import React, { useState } from 'react'

export default function TextForm(props) {


    // video tutorial 7
    const handleUpClick = () => {
        console.log("Uppcase was clicked");
        setText("you have clicked the handleUpClick" + text)
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }


    const [text, setText] = useState('default text');
    // text ="update text";     // wrong way to update state
    // setText('new Text');     // correct way to update state

    return (
        <div>
            <h1 className="text-start">{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>

            <button type="button text-start" onClick={handleUpClick} className="btn btn-primary">Convert to Uppercase</button>
        </div>
    )
}
