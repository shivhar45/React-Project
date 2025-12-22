
import React from 'react'
import { useState } from 'react'

function Rerendaring() {
const [title,setTitle] = useState("my name is harkirat")
    function Headerwithnobuttons(){
        

        setTitle("my name is "+ Math.random())
    }

  return( 
    <div>

        <button onClick={Headerwithnobuttons}>Update title</button>
        <h1>{title}</h1>


    </div>
  )
}

export default Rerendaring