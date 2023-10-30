import React from 'react';
import './App.css';
import {useState} from 'react'

function App() {
  const [subs,setSubs] = useState([
    {
      nick:'dapelu',
     subMonths:2,
     avatar:'https://i.pravatar.cc/150?u=dapelu',
     decription:'Dapelu hace de moderador a veces',

    },
    {
      nick:'Magali',
      subMonths:6,
      avatar:'https://i.pravatar.cc/150?u=dapelu'
    }
  ])
  return (
    <div className="App">
    <h1> magali subs</h1>
    <ul>
      {
        subs.map(sub =>{
          <li> key={sub.nick}
          
           </li>
        } )
      }
    </ul>
    </div>
  );
}

export default App;
