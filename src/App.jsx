import { useState, } from 'react'
import { usePrev } from './hooks/usePrev';
import './App.css'


function App() {
  const [count,setCount ] = useState(0);
  const prevCount = usePrev(count);

  return(
    <>
    <p>current count {count}</p>
    <p>previous value was {prevCount}</p>
    <button onClick={() => setCount(count + 1)}>Increase</button>


    </>
  )
}


export default App
