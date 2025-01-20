import "./heroText.css"
import heroImage from "../../../assets/heroImage2.png"
import MultipleSelectPlaceholder from "../dropdown/Dropdown"
export default function HeroText(){
    return(
        <div className="container">
            <div className="left">
                <p className="hero-text">View <span className="cultivator-text">Cultivator</span> <br />details</p>
                <MultipleSelectPlaceholder />
            </div>
            <div className="right">
                <img src={ heroImage } alt="" className="hero-image"/>
            </div>
        </div>
    )
}