import { useState, useRef ,} from 'react'
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route,Link , Outlet} from 'react-router-dom';
import './App.css'
//a clock with a start and stop
function App() {
 const [currentCount,setCurrentCount] = useState(1)
 const timer = useRef();


function startClock(){
  let value =   setInterval(function(){
        setCurrentCount(c => c + 1);
    }, 1000);
    timer.current = value;
}
function StopClock(){
   clearInterval(timer.current);
}

 return <div>
    {currentCount}
    <br />
    <button onClick={startClock}>Start</button>
    <button onClick={StopClock}>Stop</button>

 </div>
}





export default App
