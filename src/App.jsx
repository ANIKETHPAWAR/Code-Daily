import { useState,useEffect } from 'react'
import { usePrev } from './hooks/usePrev';

import './App.css'
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};




function App() {
  const [inputVal,setInputVal] =useState("");
  const debouncedValue = useDebounce(inputVal,200)
function change(e){
    setInputVal(e.target.value)
}
useEffect(()=>{
console.log("done")
},[debouncedValue])

  return(
    <input type="text" onChange={change} />
  )
}


export default App
