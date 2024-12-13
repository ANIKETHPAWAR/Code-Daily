import { useState } from 'react'
import { useEffect } from 'react';

import './App.css'

function App() {
let [count,setCount] = useState(1);

function increaseCount(){
 return setCount(cValue => cValue + 1 ) 
}
console.log("increases "+count)

useEffect(()=>{
    console.log("called ")
    setInterval(increaseCount,1000)},[])









    return <div>
        <div style={{display:"flex",paddingLeft:"30px"}}>
        <div style={{backgroundColor: "red", borderRadius:"20px",width:"40px",height:"30px",
        }}>
            {count}
        </div></div>
    <div>
        <img src={"https://imgs.search.brave.com/taLOpdNAWUzZo6-4jDLzjLF2bgOnXEzKlu9Xlr2MMww/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzUzLzgwLzAx/LzM2MF9GXzU1Mzgw/MDE5MV95cGtwWlJE/T0x6SnlkaU5oUWlO/NWd6M3phVHhtc2t1/bS5qcGc"} alt="" width={40}/>
    </div>
    </div>
}

export default App
