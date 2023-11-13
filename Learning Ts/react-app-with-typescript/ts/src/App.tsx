import './App.css';
import {useEffect, useState} from 'react'
import List from './components/List'
import Form from './components/Form'
import {Sub} from './types'

  interface AppState{
    subs:Array<Sub>
  }
  const INITIAL_STATE =[
    {
      nick: 'dapelu',
      subMonths: 3,
      avatar:'https://i.pravatar.cc/150?u=sergio_serrano'
    },
    {
      nick: 'cat_fit',
      subMonths: 5,
      avatar:'https://i.pravatar.cc/150?u=dapelu'
    }
  ]


function App() {
  useEffect(()=>{
    setSubs(INITIAL_STATE)

  },[])
  const [subs,setSubs] = useState <AppState['subs']>([])
  //const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubNumber']>(0)

  return (
    <div className="App">
   
<h1>Magali Subs</h1>
<List subs={subs}/>
<Form onNewSubs={setSubs}/>

    </div>
  );
}

export default App;
