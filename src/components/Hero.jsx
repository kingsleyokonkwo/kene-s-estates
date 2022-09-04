import "./Hero.css"
import "../index.css"
import play from "../images/play.png"
import house1 from "../images/House1.jpg"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { FaSistrix, FaAngleDown } from "react-icons/fa"

export default function Hero({myTheme}) {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return(
        <div className="hero" data-theme={myTheme}>
            <div className="hero-content">
                <div className="hero--left">
                    <h4>Helping you find the property of your dreams.</h4>
                    <p>Creating quality urban lifestyles,building stronger communities</p>
                    <span>
                        <button>Learn more</button>
                        <img src={play} alt="play button" />
                    </span>
                </div>

                <div className="hero--right">
                    <img src={house1} alt="beautiful house" />
                </div>
            </div>
            
            <div data-aos="fade-up" className="hero--buttom">
                <div className="content">
                    <h5>Location <FaAngleDown /> </h5>
                    <p>Lekki</p>
                </div>

                <div className="content">
                    <h5>Property Type <FaAngleDown /></h5>
                    <p>Duplex</p>
                </div>

                <div className="content">
                    <h5>Max Price <FaAngleDown /></h5>
                    <p>$10,000</p>
                </div>

                <button className="search"> <FaSistrix /> Search</button>
                <FaSistrix className="search--mobile"/>
            </div>
        </div>
    )
}