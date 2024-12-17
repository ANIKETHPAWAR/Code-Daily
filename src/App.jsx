import { useState, useRef ,} from 'react'
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route,Link , Outlet} from 'react-router-dom';
import './App.css'
function App() {
 return <div>
 <LightBulb/>
 </div>
}
function LightBulb() {
   const [bulbOn,setBulbOn] = useState(true);

   return <div>
   <BulbState bulbOn = {bulbOn}/>
   <ToggleBulbState bulbOn = {bulbOn} 
   setBulbOn={setBulbOn}/>
   </div>
}

function BulbState({bulbOn}){
   
 return <div> 
 {bulbOn ? "BulbOn" : "Bulb off"}
</div>
}

function ToggleBulbState({setBulbOn,bulbOn}){
function toggle(){
   setBulbOn(!bulbOn);
}


return <div> 
<button onClick={toggle}>Bulb</button>
</div>
} 


export default App
