import "./Testimonial.css"
import Testimony from "./Testimony"
import TestimonyData from "./TestimonyData"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Testimonial({myTheme}) {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])
    return(
        <div className="testimonial"data-theme={myTheme}>
            <h4 data-aos="fade-down" className="title">Testimonials.</h4>
            <p data-aos="fade-up" className="sub--title">This is what our clients are saying</p>
            <button data-aos="flip-right" className="btn">View more</button>
            <div data-aos="flip-down" className="testimony--container">
                {TestimonyData.map((val, ind) => {
                    return(
                        <Testimony 
                            key={ind}
                            name={val.name}
                            location={val.location}
                            testimony={val.testimony}
                        />
                    )
                })}
            </div>
        </div>
    )
}