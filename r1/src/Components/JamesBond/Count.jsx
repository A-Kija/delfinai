import { useEffect } from "react";
import { useState } from "react"

function Count({start}) {

    const [count, setCount] = useState(null);

    useEffect(() => {
        setCount(start);
    }, [start]);

    return (
        <>
        <h2>{count}</h2>
        <button onClick={() => setCount(c => c + 5)}>+5</button>
        </>
    )


}

export default Count;