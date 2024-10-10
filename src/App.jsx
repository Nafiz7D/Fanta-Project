import { UpdateFollower } from "react-mouse-follower"
import Hero from "./components/Hero"
import Products from "./components/Products/Products"



const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 10,
          followSpeed: 1.5,
        }}
      >
        <Hero></Hero>
        <Products></Products>
      </UpdateFollower>
    </main>
  )
}

export default App
