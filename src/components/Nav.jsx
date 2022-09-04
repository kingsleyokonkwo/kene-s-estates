import "./Nav.css"
import "../index.css"
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"

export default function Nav({myTheme}) {
    const [show, setShow] = useState(true)
    const [scrollPos, setScrollPos] = useState(0)
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
    
    const handleScroll = () => {
        setScrollPos(document.body.getBoundingClientRect().top)
        setShow(document.body.getBoundingClientRect().top > scrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    
    return(
        <nav className={show ? 'active' : 'hidden'} data-theme={myTheme}>   
            <h1>Kene's Estate</h1>
            <ul className={click ? "nav--links active" : "nav--links"}>
                <li>Home</li>
                <li>Rent</li>
                <li>Land</li>
                <li>Agent</li>
                <li>Contact Us</li>
            </ul>

            <button className="nav--btn">Get Started</button>

            {<div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={25} />
                ) : (
                    <FaBars size={25} />
                )}
            </div> }
        </nav>
    )
}