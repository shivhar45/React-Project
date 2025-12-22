import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")


  return (
    <div
      className="w-full h-dvh duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white border border-black rounded-3xl px-3 py-2">
          <button
          onClick={()=> setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            RED
          </button>
          <button
           onClick={()=> setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            GREEN
          </button>
          <button
           onClick={()=> setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            BLUE
          </button>
          <button
           onClick={()=> setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          <button
           onClick={()=> setColor("brown")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
