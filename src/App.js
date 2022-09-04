import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mo from "./components/Mo";
import Nav from "./components/Nav";
import Properties from "./components/Properties";
import Testimonial from "./components/Testimonial";
import { FaSun, FaMoon } from "react-icons/fa"
import useLocalStorage from "use-local-storage";
import "./App.css"
import "./index.css"
function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }
  return (
    <div className="app">
      <div className="theme--toggle" onClick={toggleTheme}>
        {theme === "light" ? <FaMoon size={25} style={{color: "#fce570"}}/> : <FaSun size={25} style={{color: "#fce570"}}/>}
      </div>
      <Nav myTheme={theme}/>
      <Hero myTheme={theme}/>
      <Mo myTheme={theme}/>
      <Properties myTheme={theme}/>
      <Testimonial myTheme={theme}/>
      <Footer myTheme={theme}/>
    </div>
  );
}

export default App;
