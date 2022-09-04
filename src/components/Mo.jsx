import "./Mo.css"
import "../index.css"
import location from "../images/location.png"
import phone from "../images/phone.png"
import key from "../images/key.png"
import house2 from "../images/House2.jpg"
import check from "../images/check.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"


export default function Mo({myTheme}) {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="m-operandi" data-theme={myTheme}>
            <h4 data-aos="fade-down" className="title">How it works.</h4>
            <p data-aos="fade-right" className="sub-title">This is how we operate in Kene Estates</p>
            <div className="boxes">
                <div data-aos="fade-up" className="box">
                    <img src={location} alt="location symbol" />
                    <h5>Find Home</h5>
                    <p>Our properties are located at prime areas where by there won't be problem with transportation.</p>
                </div>

                <div data-aos="flip-left" className="box">
                    <img src={phone} alt="a phone" />
                    <h5>Make Payment</h5>
                    <p>Our estates comes with good network, portable water, 24hrs light and round the clock security.</p>
                </div>

                <div data-aos="fade-up" className="box">
                    <img src={key} alt="a key" />
                    <h5>Make it Official</h5>
                    <p>We have been in business for over 32 years,for client outside the country you can trust  us to deliver well.</p>
                </div>
            </div>

            <div className="advantage">
                <div data-aos="fade-up" className="advantage--left">
                    <img src={house2} alt="a beautiful house" />
                </div>

                <div data-aos="flip-left" className="advantage--right">
                    <h4>Why you should choose us</h4>
                    <p>Creating quality urban lifestyles, building stronger communities.</p>
                    <ul className="lists">
                        <div className="lists--left">
                            <li><img src={check} alt="checker" />World class</li>
                            <li><img src={check} alt="checker" />Affordable</li>
                        </div>
                        <div className="lists--right">
                            <li><img src={check} alt="checker" />Trusted</li>
                            <li><img src={check} alt="checker" />Amenities</li>
                        </div>                 
                    </ul>
                </div>
            </div>
        </div>
    )
}