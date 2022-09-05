import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import List from './Components/List';
import axios from 'axios';




function App() {

  const [animals, setAnimals] = useState(null);

  useEffect(() => {
    axios.get('http://animals.zoo/react/list')
    .then(res => setAnimals(res.data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <Create />
        </div>
        <div className="col-7">
          <List list={animals} />
        </div>
      </div>
    </div>
  );
}

export default App;
