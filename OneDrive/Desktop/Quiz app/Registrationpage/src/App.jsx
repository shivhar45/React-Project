import { useState } from 'react'
import './App.css'
import Login from './components/Login';

function App() {
  const [page, setPage] = useState("register");
 const [name,setName] = useState("");
 const [password,setPassword] = useState("");
 const [email, setEmail]= useState("");

 function Onsignin(){
     if(name === ""|| password === "" || email === ""){
      alert("Invalid credentails");
     }else{
      alert("Successfully signin")
     }
     const users = [name, password,email];
     
    // ✅ Correct localStorage usage
    localStorage.setItem("user", JSON.stringify(users))

    // ✅ Clear inputs after submit
    setName("")
    setPassword("")
    setEmail("")

    setPage("login");

     
    }

  return (
    <>
    {page === "register"  && (
      <div>
   <h1> Registraion Form</h1>
        <input type="text" id='name' style={{padding:5,height:10}} placeholder='name' required value= {name} onChange={
          function(e){
            const value = e.target.value
            setName(e.target.value);
          }
        } />
        <br />

        <input type="text" id='email' style={{padding:5,height:10}} placeholder='email' required onChange={
          function(e){
            const value = e.target.value
            setEmail(e.target.value);
          }
        } />
        <br />

        <input type="password" id='Password' style={{padding:5,height:10}}  placeholder="Password" required  onChange={
          function(e){
            const value = e.target.value
            setPassword(e.target.value);
          }
        } />
<br />
        <button style={{padding:5,height:40}}onClick={Onsignin}>Submit</button>

      </div>
    )}
      {page === "login" && <Login/>}
    </>
  )
}

export default App
