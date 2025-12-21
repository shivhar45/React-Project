import { useState } from 'react'


import Header from "./components/Header"
import Rerendaring from './components/Rerendaring';
function App() {
const [title,setTitle] = useState("harkirat");

  function updateTitle(){
  function title(){
   var a = Math.random();
   return a;
  }
  setTitle("my name is " + title())
    

}
  // const [count, setCount] = useState(0)
  

  return (
    <>
    <div>
     
      <Header title ="ramesh"></Header>
      <Header title= "Suresh"></Header>
      <Header title={title}></Header>

      <button onClick={updateTitle}>Click me to change the value</button>
      <Rerendaring/>
    </div>
      
    </>
  )
}



export default App

/**
 * Here rendering function helps to stops re-rendering
 cause now only state variable contains will re-render only
 */