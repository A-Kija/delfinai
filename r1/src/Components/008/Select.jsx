import { useState } from "react";

function Select() {

    const [select, setSelect] = useState(1000000);
    const [selected, setSelected] = useState(1000000);

    const handleInput = e => {
        setSelect(e.target.value);
    }

    return (
        <>
        <fieldset>
            <legend>Selected: {selected}</legend>
            <select value={select} onChange={handleInput}>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="5">Five</option>
                <option value="1000000">One Milion of money</option>
            </select>
            <div><button onClick={() => setSelected(select)}>Button</button></div>
            
        </fieldset>
        </>
    )
}

export default Select;