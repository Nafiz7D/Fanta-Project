import { UpdateFollower } from "react-mouse-follower"
import Hero from "./components/Hero"
import Products from "./components/Products/Products"
import Banner from "./components/Banner/Banner"
import BannerText from "./components/Banner/BannerText"
import Blogs from "./components/Blogs/Blogs"
import FAQ from "./components/FAQ/FAQ"
import Footer from "./components/Footer/Footer"



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
        <Banner></Banner>
        <BannerText></BannerText>
        <Blogs></Blogs>
        <FAQ></FAQ>
        <Footer></Footer>
      </UpdateFollower>
    </main>
  )
}

export default App
