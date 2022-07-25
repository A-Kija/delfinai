import { useEffect } from "react";

function Kv({c, i}) {




    useEffect(()=> {
        console.log('As gyvas', i);
        return () => {
            console.log('Numiro', i)
        }
    }, []);

    return(
        <div className="kv" style={{
            backgroundColor: c + '66',
            borderColor: c
        }}></div>
    )
}

export default Kv;