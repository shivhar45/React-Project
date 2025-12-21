
import { useEffect, useState } from "react"
import CreateTodo from "./components/CerateTodo.jsx"
import Todos from "./components/Todos.jsx"
function App() {

  const [todos,setTodos] = useState([]);

  useEffect(() => {
  const loadTodos = async () => {
    try {
      const res = await fetch("http://localhost:3000/todos");
      const data = await res.json();
      setTodos(data.todos);
    } catch (err) {
      console.error("Failed to fetch todos:", err);
    }
  };

  loadTodos();
}, []);

  return (
    <>
    <div>
      <CreateTodo />
      <Todos todos={todos}/>
    </div>
      
    </>
  )
}

export default App
