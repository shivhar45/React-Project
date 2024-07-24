import React, { useEffect } from 'react'

const Navbar = ({color}) => {
    
// case 1 : Run on every render
useEffect(() => {
  
    alert("Hey I will run on every render")
   })  
   
 // case 2: Run only on first render
 
 useEffect(() => {
   alert("Hey welcome to my page. This is the first render")
 },[])
 
 // case 3: Run only when certain values change
 
 useEffect(() => {
   alert("Hey I am running because color was changed")
 }, [color])

 // Example of cleanup function this will run only when the navbar function will not present in the return function meand navbar function is commented

 useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx")

    return () => {
        alert("component was unmounted")
 }
 },[])
  return (
    <div>
        I am navbar of {color} color hehe...
    </div>
  )
}

export default Navbar