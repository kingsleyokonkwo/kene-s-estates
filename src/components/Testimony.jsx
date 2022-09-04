import "./Testimonial.css"

export default function Testimony(props) {
    return(
        <div className="testimony">
            <h5>{props.name}</h5>
            <p className="testimony--location">{props.location}</p>
            <p className="testimony--text">{props.testimony}</p>
        </div>
    )
}