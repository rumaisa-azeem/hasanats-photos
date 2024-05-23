import {useState} from "react";
import {Link} from "react-scroll";
import {Card} from "flowbite-react";

import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import GallerySection from "../elements/GallerySection";

import events from "../../assets/gallery/events.jpeg";
import corporate from "../../assets/gallery/corporate.jpeg";
import portrait from "../../assets/gallery/portrait.jpg";
import travel from "../../assets/gallery/travels.png";
import city from "../../assets/gallery/city.png";

const gallerySections = [
    {
        title : "events",
        image : events
    },
    {
        title : "corporate",
        image : corporate
    },
    {
        title : "portraits",
        image : portrait
    },
    {
        title : "travel",
        image : travel
    },
    {
        title : "city",
        image : city
    },
]

export default function Portfolio() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [showHoverEffect, setShowHoverEffect] = useState(false);

    function handleMouseEnter(index) {
        setHoveredIndex(index);
        setShowHoverEffect(true);
    }

    function handleMouseLeave() {
        setHoveredIndex(null);
        setShowHoverEffect(false);
    }

    return (
        <div>
            <Navbar className="bg-neutral-800 shadow shadow-black" navTextColor="white"/>
            <div id="scroll-sections" className="h-screen overflow-y-scroll snap-y">
                <div id="gallery-sections" className="snap-start">
                    <div className="w-full min-h-screen mt-20 p-6 lg:flex lg:flex-col lg:justify-center xl:mt-0">
                        <div className="mb-12">
                            <h1 className="text-6xl font-extrabold mb-4">portfolio</h1>
                            <p className="text-lg">here's some of my work...</p>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-full grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                                {gallerySections.map((section, index) =>
                                    <Link to={"gallery-section-" + index} containerId="scroll-sections" smooth={'easeInOutQuad'} duration={600}>
                                        <Card
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}
                                            key={index}
                                            imgSrc={section.image}
                                            className={"w-full hover:translate-y-2 transition duration-300 cursor-pointer ease-in-out" + (showHoverEffect && index!==hoveredIndex ? "filter grayscale" : "")}
                                        >
                                            <h2 className="text-xl lg:text-2xl font-bold">{section.title}</h2>
                                        </Card>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {gallerySections.map((section, index) =>
                    <GallerySection sectionTitle={section.title} key={index} id={"gallery-section-"+index} className="snap-start" images={gallerySections} />
                )}
                <Footer className="bg-neutral-800 snap-center"/>
            </div>
        </div>
    )
}