// import { useState } from 'react'

import { useEffect } from "react";
import { useState } from "react"



function App() {
  // const [count, setCount] = useState(0)

  const [todos,setTodos] =useState([]);

  useEffect(()=>{
 fetch("https://sum-server.100xdevs.com/todos")
 .then(async (res) =>{
     const json = await res.json();
     setTodos(json.todos);
 })
  },[])
  return (
    <>
      {/* <CardWrapper innerComponent={<TextComponent/>}/>
      <CardWrapper innerComponent={<TextComponent/>}/> */}
       
       <h1>Todos</h1>
      {todos.map((todo) => (
        <CardWrapper key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </CardWrapper>
      ))}

      <CardWrapper>
        <TextComponent/>
      </CardWrapper>
      <CardWrapper>
        <div>
          hello there
        </div>
      </CardWrapper>
    </>
  )
}

function TextComponent(){
  return <div>
    hi there from textcomponent
  </div>
}

function CardWrapper({children}){
  return(
  <div style={{border:"2px solid black", padding: "10px"}}>
  {children}
  </div>
  )
}
export default App
