import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {
  
  return (
    <>
    <Navbar/>
   
   <div className="cards">
    <Card title ="card1" description="card 2"
    />
    <Card title ="card2" description="card 3"
    />
    <Card title ="card3" description="card 4"
    />
    <Card title ="card4" description="card 5"
    />
    
   </div>
   <Footer/>
    </>
  )
}

export default App
