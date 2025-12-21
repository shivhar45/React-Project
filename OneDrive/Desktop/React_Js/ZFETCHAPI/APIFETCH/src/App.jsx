import React,{useState,useEffect} from "react";



function App() {
  const [joke, SetJoke] = useState(null);

  useEffect(()=>{
   fetch("https://official-joke-api.appspot.com/random_joke")
   .then((res) => res.json())
   .then((data) => SetJoke(data));
  },[])

  return (
    <>
    <h1>Random Jokes</h1>
    {joke && (
      <p>
        {joke.setup} <br />
        <strong>{joke.punchline}</strong>
      </p>
    )}
      
    </>
  )
}

export default App
