import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar></Navbar>
      <Hero></Hero>
    </main>
  )
}

export default App