import './App.css';
import {useEffect, useState} from 'react'
import List from './components/List'

interface Sub{
  nick: string
  subMonths: number
  avatar :string
  decription?: string 
  }
  interface AppState{
    subs:Array<Sub>
  }
  const INITIAL_STATE =[
    {
      nick: 'dapelu',
      subMonths:3,
      avatar:'htts://i.pravatar.cc/150?u=sergio_serrano'
    }
  ]


function App() {
  useEffect(()=>{
    setSubs(INITIAL_STATE)

  },[])
  const [subs,setSubs] = useState <AppState['subs']>([])
  return (
    <div className="App">
   
<h1>Magali Subs</h1>
<List subs={subs}/>
    </div>
  );
}

export default App;
