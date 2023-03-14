import { useEffect, useState } from 'react';
import List from './components/List';
import Form from './components/Form';
import { Sub } from './types'
import './App.css';

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'http://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces'
  },
  {
    nick: 'sergio_serrano',
    subMonths: 7,
    avatar: 'http://i.pravatar.cc/150?u=sergio_serrano',
  }
]

function App() {

  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  },[])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App">
     <h1>TypeScript Course</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
