import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {


    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data));
    }, []);


    return (
        <div className="App">
            <header className="App-header">
                <h1>API</h1>
                <ul>
                    {
                        users.map(u => <li key={u.id}>{u.name} <span style={{color:'crimson'}}>{u.address.city}</span></li>)
                    }
                </ul>
            </header>
        </div>
    );
}

export default App;