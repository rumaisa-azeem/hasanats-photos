import { Card } from "flowbite-react";
import {useState} from "react";
import {Link} from "react-scroll";

export default function GallerySections({items}) {
    let [hoveredIndex, setHoveredIndex] = useState(null);
    let [showHoverEffect, setShowHoverEffect] = useState(false);

    function handleMouseEnter(index) {
        setHoveredIndex(index);
        setShowHoverEffect(true);
    }

    function handleMouseLeave() {
        setHoveredIndex(null);
        setShowHoverEffect(false);
    }

    function handleClick() {
        console.log("clicked")
    }

    return (
        <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {items.map((item, index) =>
                <Link to="gallery-section" smooth={'easeInOutQuad'} duration={600}>
                    <Card
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClick}
                        key={index}
                        imgSrc={item.image}
                        className={"w-full hover:translate-y-2 transition duration-300 cursor-pointer ease-in-out" + (showHoverEffect && index!==hoveredIndex ? "filter grayscale" : "")}
                        >
                        <h2 className="text-xl lg:text-2xl font-bold">{item.title}</h2>
                    </Card>
                </Link>
            )}
        </div>

    );
}