import { useState } from 'react'
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route,Link , Outlet} from 'react-router-dom';
import './App.css'

function App() {
 
    return <div>
        
 <BrowserRouter>
 <Routes>
    <Route path='/' element={<Layout/>}>  
    <Route path='/neet/online-coaching-class-11' element={<Class11Program/>}/>
    <Route path='/neet/online-coaching-class-12' element={<Class12Program/>}/>
    
    </Route>
 </Routes>
 </BrowserRouter>

    </div>



}
function Class11Program(){
    return <div>
        Class11 Program For NEET
    </div>
}
function Class12Program(){
    return <div style={{color:"Black"}}>
        Class12 Program For NEET
    </div>
}
function Header(){
    return <div>
        Welcome to allen 
        <Link to="/">Home |</Link> 
 <Link to="/neet/online-coaching-class-11">Class 11 |</Link> 
 <Link to="/neet/online-coaching-class-12">Class 12</Link>
    </div>
}
function Layout(){
    return <div style={{backgroundColor:"red",}}>
        <Header/>
        <div style={{backgroundColor:"white" , height:"100vh",width:"100vw"}}>
        <Outlet/>
        </div>
        footer
    </div>
}





export default App
