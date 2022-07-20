import './App.css';
import Kn from './Components/005/Kn';
import Kosmosas from './Components/005/Kosmosas';

const yel = 'yellow';

const ms = {color: yel, backgroundColor: 'skyblue'};

const mas = ['Pilkis', 'Murkis', 'Gagarinas'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Labas</h1>

        {
          mas.map((n, i) => <Kn key={i} name={n}></Kn>)
        }

        <Kosmosas spalva={yel} krastas="70px" manoStilius={ms}></Kosmosas>
      </header>
    </div>
  );
}

export default App;
