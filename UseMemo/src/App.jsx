import React,{memo} from 'react'
import { useState } from 'react'


function App() {
const [title,setTitle] = useState("My name is harkirat")
function updateTitle(){
  setTitle("my name is " + Math.random())
}  

  return (
    <>
      <button onClick={updateTitle}>Update the title</button>
         {/* title= {title} */}
         <Header title={title}></Header>
        <Header title="harkirat2"></Header>
        <Header title="harkirat3"></Header>
        <Header title="harkirat4"></Header>
        <Header title="harkirat5"></Header>
        <Header title="harkirat6"></Header>
    </>
  )
}



const Header = memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App
