import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import List from './Components/List';
import axios from 'axios';


function App() {

  const [animals, setAnimals] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    axios.get('http://animals.zoo/react/list')
    .then(res => setAnimals(res.data));
  }, [lastUpdate]);


  useEffect(() => {
    if (null === createData) {
      return;
    }
    axios.post('http://animals.zoo/react/list', createData)
    .then(res => {
      setLastUpdate(Date.now());
    })
  }, [createData]);

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    axios.delete('http://animals.zoo/react/list/' + deleteData.id)
    .then(res => {
      setLastUpdate(Date.now());
    })
  }, [deleteData]);



  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <Create setCreateData={setCreateData} />
        </div>
        <div className="col-7">
          <List list={animals} setDeleteData={setDeleteData}/>
        </div>
      </div>
    </div>
  );
}

export default App;
