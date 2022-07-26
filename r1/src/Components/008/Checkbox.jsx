import { useEffect } from "react";
import { useState } from "react";

function Checkbox() {

    const [cb, setCb] = useState({A:false, B:true, C:true, W:true});

    const [checked, setChecked] = useState([])

    const handleInput = e => {
        setCb(c => ({...c, [e.target.value]: !c[e.target.value]}));
    }

    useEffect(() => {
        const box = [];
        for (const b in cb) {
            if (true === cb[b]) {
                box.push(b);
            }
        }
        setChecked(box);
    }, [cb]);

    return (
        <>
        <fieldset>
            <legend>Checked:
                {
                    checked.map(b => <b key={b}>{b}</b>)
                }
            </legend>
               A <input type="checkbox" value="A" checked={cb.A} onChange={handleInput}></input>
               B <input type="checkbox" value="B" checked={cb.B} onChange={handleInput}></input>
               C <input type="checkbox" value="C" checked={cb.C} onChange={handleInput}></input>
               W <input type="checkbox" value="W" checked={cb.W} onChange={handleInput}></input>
        </fieldset>
        </>
    )
}

export default Checkbox;