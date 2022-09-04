import "./Footer.css"
import "../index.css"

export default function Footer({myTheme}) {
    return(
        <div className="footer" data-theme={myTheme}>
            <div className="footer--content">
                <div>
                    <h3 className="kene">Kene's Estate</h3>
                    <p className="solution">Solution for easy and flexible house hunting.You can trust us anywhere through this platform.</p>
                </div>
                <div>
                    <h3>Property</h3>
                    <ul>
                        <li>Learning Modules</li>
                        <li>Watch Demo</li>
                        <li>Pattnership</li>
                        <li>Event</li>
                    </ul>
                </div>
                <div>
                    <h3>About</h3>
                    <ul>
                        <li>Our Company</li>
                        <li>Career</li>
                        <li>Investor Relation</li>
                        <li>Social Impact</li>
                    </ul>
                </div>
                <div>
                    <h3>Resources</h3>
                    <ul>
                        <li>Contact</li>
                        <li>Give Feedback</li>
                        <li>System Status</li>
                        <li>Private Policy</li>
                    </ul> 
                </div>
            </div>
        </div>
    )
}