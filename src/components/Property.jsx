import "./Properties.css"

export default function property(props) {
    return (
        <div className="property">
            <img className="property-image" src={props.image} alt="a beautiful house" />
            <div className="property--content">
                <div className="property--content_left">
                    <h4 className="top">{props.name}</h4>
                    <p>{props.Location}</p>
                </div>
                <div className="property--content_right">
                    <p className="top">{props.type}</p>
                    <p className="price">{props.price}</p>
                </div>
            </div>
        </div>
    )
}