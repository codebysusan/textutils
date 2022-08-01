import React, { useState } from 'react'

export default function TextArea(props) {

    const [text, setText] = useState("");

    const upClickHandler = () => {
        setText(text.toUpperCase());
    }
    const lowClickHandler = () => {
        setText(text.toLowerCase());
    }
    const copyClickHandler = () => {
        navigator.clipboard.writeText(text);
    }
    const clearClickHandler = () => {
        setText("");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const wordCounter = () => {
        let totalChar = text.length;
        let totalWord = text.trim().split(/\s+/).length;
        if (totalChar === 0) {
            return 0;
        }
        else if (text.charAt(totalChar - 1) === (/\s+/)) {
            return totalWord - 1;
        }
        else {
            return totalWord;
        }
    }

    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === ".") {
            count++;
        }
    }

    if (text.length > text.lastIndexOf(".") + 2) {
        count++;
    }

    return (
        <>
            <div className={`container my-4 text-${props.mode === "light" ? "dark" : "light"}`}>
                <div className="mb-3">
                    <h2 className={`my-4 `} >Enter your text here: </h2>
                    <textarea className={`form-control bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "light" ? "dark" : "light"}`} placeholder='Enter your text here...' onChange={handleOnChange} value={text} id="textplace" rows="12">Hello</textarea>
                </div>
                <button className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"} me-4`} onClick={upClickHandler}>Uppercase</button>
                <button className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"} me-4`} onClick={lowClickHandler}>Lowercase</button>
                <button className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"} me-4`} onClick={copyClickHandler}>Copy Text</button>
                <button className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"} me-4 my-2`} onClick={clearClickHandler}>Clear Text</button>
                <button className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"} me-4 my-2`} onClick={handleExtraSpaces}>Remove Extraspaces </button>
                <div className={`float-end `}>
                    <span className={`me-4 `}> {count} sentences.</span>
                    <span className='my-3 me-4'>{0.008 * wordCounter()} minutes read.</span>
                    <span className='my-3 me-4' >{wordCounter()} words.</span>
                    <span>
                        {text.length} characters.
                    </span>
                </div>
            </div>
        </>
    )
}
