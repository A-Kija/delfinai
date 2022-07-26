import { useState } from "react";

function Text() {

    const [text, setText] = useState('');

    const [title, setTitle] = useState('TEXT');

    const handleInput = e => {
        setText(e.target.value);
        if ('' === e.target.value) {
            setTitle('TEXT'); 
        } else {
            setTitle(e.target.value);
        }
    }

    return (
        <>
        <fieldset>
            <legend>{title}</legend>
            <input type="text" value={text} onChange={handleInput}></input>
        </fieldset>
        </>
    )
}

export default Text;