import './bootstrap.css';
import './App.scss';
import Create from './Components/Create';
import AnimalsContext from './Components/AnimalsContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { create } from './Functions/localstorage';

const keyLock = 'myFantasticZoo';
const animalsTypes = [
  {id: 1, type: 'Antis'},
  {id: 2, type: 'Avis'},
  {id: 3, type: 'Antilopas'},
  {id: 4, type: 'Bebras'},
  {id: 5, type: 'Briedis'},
  {id: 6, type: 'Barsukas'}
];

function App() {


  const [createData, setCreateData] = useState(null);


  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(keyLock, createData);
  },[createData]);



  return (
    <AnimalsContext.Provider value={{
      animalsTypes,
      setCreateData
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
