import {useState, useRef} from "react";
import {Link} from "react-scroll";
import {Card} from "flowbite-react";
import {KeyboardDoubleArrowUp} from "@mui/icons-material";
import {ImageList, ImageListItem} from "@mui/material";

import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

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
    let [hoveredIndex, setHoveredIndex] = useState(null);
    let [showHoverEffect, setShowHoverEffect] = useState(false);
    let [sectionTitle, setSectionTitle] = useState(null);

    function handleMouseEnter(index) {
        setHoveredIndex(index);
        setShowHoverEffect(true);
    }

    function handleMouseLeave() {
        setHoveredIndex(null);
        setShowHoverEffect(false);
    }

    function handleClick(sectionTitle) {
        setSectionTitle(sectionTitle);
    }

    return (
        <div>
            <Navbar className="bg-neutral-800 shadow shadow-black" navTextColor="white"/>
            <section id="gallery-sections">
                <div className="w-full min-h-screen mt-20 p-6 lg:flex lg:flex-col lg:justify-center xl:mt-0">
                    <h1 className="text-6xl font-extrabold mb-12">portfolio</h1>
                    <div className="flex justify-center">
                        <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            {gallerySections.map((section, index) =>
                                <Link to="gallery" smooth={'easeInOutQuad'} duration={600}>
                                    <Card
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={() => handleClick(section.title)}
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
            </section>
            { sectionTitle &&
                (
                    <section id="gallery" className="bg-neutral-800 h-min-screen p-8 text-white">
                        <div className="mt-16 flex justify-between items-center relative">
                            <h2 className="text-5xl font-extrabold">portfolio / <span className="text-neutral-400">{sectionTitle}</span></h2>
                            <Link to="gallery-sections" smooth={'easeInOutQuad'} duration={600} className="text-4xl cursor-pointer hover:-translate-y-1 transition ease-in-out">
                                <KeyboardDoubleArrowUp className="text-white" fontSize="inherit" />
                            </Link>
                        </div>
                        <div className="pt-8">
                            <ImageList cols={3} gap={8} variant="masonry">
                                {gallerySections.map((item) =>
                                    <ImageListItem key={item}>
                                        <img
                                            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${item.image}?w=248&fit=crop&auto=format`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                )}
                            </ImageList>
                        </div>
                    </section>
                )
            }
            <Footer className="bg-neutral-800"/>
        </div>
    )
}