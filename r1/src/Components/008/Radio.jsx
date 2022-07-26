import { useState } from "react";

function Radio() {

    const [radio, setRadio] = useState('A');

    const handleInput = e => {
        setRadio(e.target.value)
    }

    return (
        <>
        <fieldset className="radio">
            <legend> Radio: <b>{radio}</b></legend>
               <label htmlFor="_a">A</label> <input id="_a" type="radio" name="b" value="A" onChange={handleInput} checked={radio === 'A'}></input>
               <label htmlFor="_b">B</label> <input id="_b" type="radio" name="b" value="B" onChange={handleInput} checked={radio === 'B'}></input>
               <label htmlFor="_c">C</label> <input id="_c" type="radio" name="b" value="C" onChange={handleInput} checked={radio === 'C'}></input>
        </fieldset>
        </>
    )
}

export default Radio;