import './bootstrap.css';
import './App.scss';
import Create from './Components/Create';
import AnimalsContext from './Components/AnimalsContext';

const animalsTypes = [
  {id: 1, type: 'Antis'},
  {id: 2, type: 'Avis'},
  {id: 3, type: 'Antilopas'},
  {id: 4, type: 'Bebras'},
  {id: 5, type: 'Briedis'},
  {id: 6, type: 'Barsukas'}
];

function App() {
  return (
    <AnimalsContext.Provider value={{
      animalsTypes
    }}>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Create/>
        </div>
        <div className="col-8">
          One of three columns
        </div>
      </div>
    </div>
    </AnimalsContext.Provider>
  );
}

export default App;
