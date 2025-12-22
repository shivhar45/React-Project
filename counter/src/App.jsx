// import { title } from 'process';
import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([{
    title : "Go to gym",
    description : "Go to gym from 7-9",
    completed: false
  },{
    title: "Study DSA",
    description :"Study DSA for 9-10",
    completed: true
  }]);

  function addTodo(){
    setTodos([...todos, {
      title : "new todo",
      description : "desc of new todo "
    }])
  }

  return (
    // <div>
    //   <CustomButton count = {count} setCount = {setCount}></CustomButton>
    // </div>

    <div>
      <button onClick={addTodo}> Add a random todo</button>
          {todos.map((todo) =>{
            return (<Todo title = {todo.title}    description = {todo.description}/>);
          })}
    </div>
  )
}


// component
// function CustomButton(props){

//   function onClickHandler(){
//     props.setCount(props.count +1 );

//   }
//   return < button onClick={onClickHandler}>Counter {props.count}</button>
// }

function Todo(props){
  return (   
     <div style={{ border: "1px solid gray", margin: "8px", padding: "8px" }}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
export default App
