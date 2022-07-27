import './bootstrap.css';
import './App.css';
import Create from './Components/Create';

function App() {
  return (
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
  );
}

export default App;
