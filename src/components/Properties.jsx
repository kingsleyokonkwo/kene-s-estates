import "./Properties.css"
import Property from "./Property"
import PropertyData from "./PropertyData"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Properties({myTheme}) {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return (
        <div className="properties" data-theme={myTheme}>
            <h4 data-aos="flip-left" className="title">Our featured properties</h4>
            <p data-aos="flip-right" className="sub--title">Our biggest product to be featured and are almost sold out</p>
            <button data-aos="flip-right" className="btn">View more</button>
            <div data-aos="fade-up" className="property-container">
                {PropertyData.map((val, ind) => {
                    return(
                        <Property 
                            key={ind}
                            image={val.image}
                            name={val.name}
                            Location={val.Location}
                            type={val.type}
                            price={val.price}
                        />
                    )
                })}
            </div>
        </div>
    )
}