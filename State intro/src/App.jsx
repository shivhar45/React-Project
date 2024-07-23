import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0) // hook is used to update the count value we cant write eith normal js
  

  return (
    <>
      <div> 
       The count is {count} </div>
       <button onClick={() =>{setCount(count+1)}}>Update count</button>

       
    </>
  )
}

export default App
