
import './App.css'
import Card from './components/Card'
function App() {
  // const [count, setCount] = useState(0)

  let myObj = {
    username: "hitesh",
    age: 21
  }

  return (
    <>
     <h1 className="bg-green-300 text-center text-2xl font-bold p-4">Tailwind test</h1>
  <div className="flex gap-4 justify-center mt-4">
    <Card channel="chaiaurcode" someObj={myObj} />
    <Card />
  </div>

    </>
  )
}

export default App
