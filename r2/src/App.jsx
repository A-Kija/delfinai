import './bootstrap.css';
import './App.scss';
import Create from './Components/Create';
import AnimalsContext from './Components/AnimalsContext';
import { useEffect, useState } from 'react';
import { create, destroy, read } from './Functions/localstorage';
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

  const [lastUpdate, setLastUpdate] = useState(Date.now())

  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [animals, setAnimals] = useState(null);

  useEffect(() => {
    setAnimals(read(keyLock));
  }, [lastUpdate]);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(keyLock, createData);
    setLastUpdate(Date.now());
  }, [createData]);

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    destroy(keyLock, deleteData);
    setLastUpdate(Date.now());
  }, [deleteData]);



  return (
    <AnimalsContext.Provider value={{
      animalsTypes,
      setCreateData,
      animals,
      setDeleteData
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
