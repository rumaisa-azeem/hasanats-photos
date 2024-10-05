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
        const scrollableWindow = document.getElementById("scrollable");
        scrollableWindow.addEventListener('scroll', handleScroll);
        return () => {scrollableWindow.removeEventListener('scroll', handleScroll)};
    }, []);

    const handleScroll = () => {
        const scrollableWindow = document.getElementById("scrollable");
        const aboutSection = document.getElementById("about");
        console.log(aboutSection.offsetTop);
        if (scrollableWindow.scrollTop > 500) {
            setBgColor(scrollDownBgColor);
            setNavTextColor(scrollDownNavTextColor);
        }
        else {
            setBgColor(defaultBgColor);
            setNavTextColor(defaultNavTextColor);
        }
    };

    return (
        <div className="transition ease-in-out duration-700" style={{backgroundColor: bgColor}}>
            <Navbar navTextColor={navTextColor}/>
            <div id="scrollable" className="h-screen overflow-scroll md:snap-y">
                <Hero className="snap-start"/>
                <About className="snap-start"/>
                <Footer className="snap-center" />
            </div>
        </div>
    );
}