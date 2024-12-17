import { useState, useRef ,useContext, createContext,} from 'react'

import './App.css'
const BulbContext = createContext();
function App() {
   const [bulbOn,setBulbOn] = useState(true);

 return <div>
   <BulbContext.Provider value={{
      bulbOn: bulbOn,
      setBulbOn: setBulbOn
   }}>
 <LightBulb/>
 </BulbContext.Provider>

 </div>
}
function LightBulb() {
   
   return <div>
   <BulbState />
   <ToggleBulbState />
   </div>
}

function BulbState(){
  const {bulbOn} = useContext(BulbContext) ;
 return <div> 
 {bulbOn ? "BulbOn" : "Bulb off"}
</div>
}

function ToggleBulbState(){
   const {bulbOn,setBulbOn} = useContext(BulbContext) ;
function toggle(){
   setBulbOn(!bulbOn)
}


return <div> 
<button onClick={toggle}>Bulb</button>
</div>
} 


export default App
