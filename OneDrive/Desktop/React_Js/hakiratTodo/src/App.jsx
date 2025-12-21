
import { useState } from 'react'

let counter =4;

function App() {
  const [todos, setTodos] = useState( [
    {
      id: 1,
      title: "Go to gym",
      description: "Keep you Healthy and fit"
    },
    {
      id:2,
      title: "Go to StudyRoom",
      description: "That will amke u smart"
    },
    {
      id:3,
      title:"Drink Water",
      description: "Keeps u hydreated"
    }
  ]
  )
 
  function addTodo(){
    setTodos([...todos,{
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }])
  //   const newTodos = [];
  //   for(let i =0;i< todos.length;i++){
  //     newTodos.push(todos[i]);
  //   }
  //   newTodos.push({
  //     id:4,
  //     title: Math.random(),
  //     description: Math.random()

  // })
  //   setTodos(newTodos)
  }
  return (
    <>
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo)=>
    
      (
       <Todo key={todo.id} title={todo.title} description = {todo.description}/>
      ))}
      
    </div>
      
    </>
  )
}


function Todo({title,description}){
  return( 
  <div>
    <h1>{title}</h1>
    
    <h5>{description}</h5>
  </div>
  )
}
export default App
