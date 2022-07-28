import './bootstrap.css';
import './App.scss';
import Create from './Components/Create';
import AnimalsContext from './Components/AnimalsContext';
import { useEffect, useState } from 'react';
import { create, read } from './Functions/localstorage';
import List from './Components/List';

const keyLock = 'myFantasticZoo';
const animalsTypes = [
  { id: 1, type: 'Antis' },
  { id: 2, type: 'Avis' },
  { id: 3, type: 'Antilopas' },
  { id: 4, type: 'Bebras' },
  { id: 5, type: 'Briedis' },
  { id: 6, type: 'Barsukas' }
];

function App() {


  const [createData, setCreateData] = useState(null);
  const [animals, setAnimals] = useState(null);

  useEffect(() => {
    setAnimals(read(keyLock));
  }, [])

  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(keyLock, createData);
  }, [createData]);



  return (
    <AnimalsContext.Provider value={{
      animalsTypes,
      setCreateData,
      animals
    }}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create />
          </div>
          <div className="col-8">
            <List/>
          </div>
        </div>
      </div>
    </AnimalsContext.Provider>
  );
}

export default App;
