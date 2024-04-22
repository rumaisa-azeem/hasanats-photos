import './App.css';
import {useEffect, useState} from "react";
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {

    const defaultBgColor = 'white';
    const scrollDownBgColor = '#18181b';
    const [bgColor, setBgColor] = useState(defaultBgColor);

    const defaultNavTextColor = 'black';
    const scrollDownNavTextColor = 'white';
    const [navTextColor, setNavTextColor] = useState(defaultNavTextColor);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {window.removeEventListener('scroll', handleScroll)};
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 500) {
            setBgColor(scrollDownBgColor);
            setNavTextColor(scrollDownNavTextColor);
        }
        else {
            setBgColor(defaultBgColor);
            setNavTextColor(defaultNavTextColor);
        }
    };

  return (
    <div className="App transition ease-in-out duration-700" style={{backgroundColor: bgColor}}>
        <Navbar navTextColor={navTextColor}/>
        <Hero/>
        <About/>
        <Footer/>
    </div>
  );
}

export default App;
