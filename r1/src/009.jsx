import { useRef } from 'react';
import { useState } from 'react';
import './App.css';
import M1 from './Components/009/M1';
// import PirmasisKontekstas, {KitasKontekstas, DarVienasKontekstas} from './Contexts/PirmasisKontekstas';
import PirmasisKontekstas, { DarVienasKontekstas } from './Contexts/PirmasisKontekstas';
function App() {

    const [count, setCount] = useState(0);

    const blaSuper = useRef(5);

    const good = useRef();

    // let bla = 5;

    const doCount = () => {

        // const my = document.querySelector('button'); 

        const my = good.current;

        console.log(my);

        setCount(c => c + 1);

        // bla++;
        // console.log(bla);

        blaSuper.current++;
        console.log(blaSuper.current);

    }

    return (
        <DarVienasKontekstas.Provider value={{ dar: 10000 }}>
            <PirmasisKontekstas.Provider value={{
                pirmas: 'Valio',
                spalva: 'pink'
            }}>
                <div className="App">
                    <header className="App-header">
                        <h1>useContext & useRef {count}</h1>
                        <M1 kas="Penki"></M1>
                        <button ref={good} onClick={doCount}>+1</button>

                    </header>
                </div>
            </PirmasisKontekstas.Provider>
        </DarVienasKontekstas.Provider>
    );
}

export default App;