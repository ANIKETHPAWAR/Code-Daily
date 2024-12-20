import { useState, } from 'react'
import { useFetch } from './hooks/useFetch'
import './App.css'


function App() {
  
const {finalData} = useFetch("https://official-joke-api.appspot.com/random_joke");
 return <div>
 {JSON.stringify(finalData)}
 </div>
}



export default App
