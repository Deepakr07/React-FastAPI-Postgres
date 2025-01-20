import NavLogo from "../../../assets/NavLogo.png"
import "./nav.css"
export default function Nav(){
  return(
    <nav>
      <img src= { NavLogo } alt="NavLogo" className="nav-logo"/>
      <p className="nav-text"><span className="nav-first"> Culti </span> Verse</p>
    </nav>
  )
} 