import { useState } from "react";


function Login() {
     const [name,setName] = useState("");
     const [password,setPassword] = useState("");
    

    function Onlogin(){
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
    alert("No user registered");
    return;}

    else{
        alert("Login Successfully")
    }
  }


  return (
    <div>
        <h1>Login Page</h1>
       <input type="text" placeholder="name" required  onChange={function(e){
        const value = e.target.value
        setName(e.target.value)
       }} />
       <br />

       <input type="password" placeholder="Password" required  onChange={function(e){
        const value = e.target.value
        setPassword(e.target.value)
       }} />

       <br />

       <button onClick={Onlogin}>LogIn</button>

    </div>
  )
}

export default Login