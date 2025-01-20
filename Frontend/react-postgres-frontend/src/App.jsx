import "./App.css"
import HeroText from "./Components/heroText/HeroText";
import NavBar from "./Components/navbar/NavBar";

export default function App() {
  return(
    <>
      <div className="hero">
        <NavBar />
        <HeroText />
      </div>
    </>
  )
}