import './App.css';
import {useState} from 'react'

interface Sub{
  nick: string
  subMonths: number
  avatar :string
  decription?: string 
  }


function App() {
  const [subs,setSubs] = useState<Array<Sub>>([
   
  ])
  return (
    <div className="App">
   
<h1>HOLA</h1>
    </div>
  );
}

export default App;
