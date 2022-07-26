import { useState } from "react";

const options = [
    {value: 1, text: 'One'},
    {value: 2, text: 'Two'},
    {value: 5, text: 'Five'},
    {value: 1000000, text: 'One Milion of money'}
]

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
                {
                    options.map(o => <option key={o.value} value={o.value}>{o.text}</option>)
                }
            </select>
            <div>
                <button onClick={() => setSelected(options.find(o => select == o.value).text)}>Button</button>
            </div>
            
        </fieldset>
        </>
    )
}

export default Select;