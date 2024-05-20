import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Footer from "../sections/Footer";
import {useEffect, useState} from "react";

export default function Home() {
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