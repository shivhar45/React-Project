import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card' style={{overflow:'hidden'}}>
        <img src="https://imgs.search.brave.com/Fq2PjTyqIVykupRflwpGGzWkf7uXSrAn9knLlX0a2TY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9s/YXB0b3AtdGFibGVf/NTM4NzYtMTc2NzU1/LmpwZz9zaXplPTYy/NiZleHQ9anBn" alt="image" width={233}/*as a js*/ style={{border: "2px solid black"}}  />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card