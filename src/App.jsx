import { useState } from 'react'
import { useEffect } from 'react';

import './App.css'

function App() {
  return  <div>
<Card>
    
    <img src="https://mcdn.wallpapersafari.com/medium/52/15/yhTOi2.jpg" alt="" />
</Card> 
<Card> 
  <img src="https://mcdn.wallpapersafari.com/medium/15/27/erAWjz.jpg" alt="" />
     </Card>
<Card>
    <img src="https://mcdn.wallpapersafari.com/medium/15/63/EzIXko.jpg" alt="" />
</Card>

</div>


   
}
function Card({children}){
    return <div style={{
        background:"white", height:"300px",width:"300px", color:"black",padding:"10px",margin:"15px"
    }}>{children}</div>
}
export default App
