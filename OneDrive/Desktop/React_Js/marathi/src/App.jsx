import "./App.css";

import Contact from "./components/Contact.jsx";
const Home = ()=>{
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }

  function About(){
    return (
      <>
      <h2>About</h2></>
    )
  }
function App() {
  
  




  return (
    <div className="App">
      {/* <h1 className="App">Namaskar shivhar</h1>
      <input type="text" />
      <button type="button" onClick={()=>{alert("Hi js in react is running")}}>save</button> */}


      <Home />
      <About />
      <Contact/>

       
    </div>
   
  )
}

export default App
