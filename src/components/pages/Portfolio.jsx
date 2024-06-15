import {useEffect, useState} from "react";
import {Link} from "react-scroll";
import {Card} from "flowbite-react";
import {createFlickr} from "flickr-sdk";

import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import GallerySection from "../elements/GallerySection";

import events from "../../assets/gallery/events.jpeg";
import corporate from "../../assets/gallery/corporate.jpeg";
import portrait from "../../assets/gallery/portrait.jpg";
import travel from "../../assets/gallery/travels.png";
import city from "../../assets/gallery/city.png";

const API_KEY = "b3a101b280639e227cc8dca08c847c83";
const FLICKR_USER_ID = "200797313@N08";

const gallerySectionsInit = new Map([
    ["events",
        {
            image : events,
            flickrID : "72177720317935958",
            photoURLs : null
        }
    ],
    ["corporate",
        {
            image : corporate,
            flickrID : "72177720317926965",
            photoURLs: null
        }
    ],
    ["portraits",
        {
            image : portrait,
            flickrID : "72177720317935241",
            photoURLs: null
        }
    ],
    ["travel",
        {
            image : travel,
            flickrID : "72177720317935311",
            photoURLs: null
        }
    ],
    ["city",
        {
            image : city,
            flickrID : "72177720317927132",
            photoURLs: null
        }
    ],
]);

export default function Portfolio() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [showHoverEffect, setShowHoverEffect] = useState(false);
    const [photosLoaded, setPhotosLoaded] = useState(false);
    const [gallerySections, setGallerySections] = useState(gallerySectionsInit);

    useEffect( () => {
        if (!photosLoaded) {
            const {flickr} = createFlickr(API_KEY);
            const fetchData = async (section, title) => {
                const requestParams = {
                    photoset_id: section.flickrID,
                    user_id: FLICKR_USER_ID
                };
                try {
                    const result = await flickr("flickr.photosets.getPhotos", requestParams);
                    const resultPhotos = result["photoset"]["photo"];
                    const newSection = section;
                    newSection.photoURLs = resultPhotos.map(photo => `https://live.staticflickr.com/${photo["server"]}/${photo["id"]}_${photo["secret"]}.jpg`);
                    const newMap = new Map(gallerySections);
                    newMap[title] = newSection;
                    console.log("new section: ", newSection);
                    console.log("new map: ", newMap);
                    setGallerySections(newMap);
                }
                catch (err) {
                    console.log(err);
                    section.photoURLs = "error";
                }
            }
            gallerySections.forEach( (section, title) => fetchData(section, title));
            console.log("gallery sections at end of for loop: ", gallerySections);
            setPhotosLoaded(true);
        }
    }, [photosLoaded, gallerySections])

    function handleMouseEnter(index) {
        setHoveredIndex(index);
        setShowHoverEffect(true);
    }

    function handleMouseLeave() {
        setHoveredIndex(null);
        setShowHoverEffect(false);
    }

    function getGallerySection(section, index) {
        let sectionTitle = section.at(0);
        let sectionData = section.at(1);

        if (sectionData.photoURLs instanceof Array) {
            return (<GallerySection sectionTitle={sectionTitle} key={index} id={"gallery-section-"+index} className="snap-start" images={sectionData.photoURLs} />);
        }
        else return(<p
            key={index}
            id={"gallery-section-"+index}
            className="px-8 py-1 snap-start">
            {sectionData.photoURLs === "error" ? "Error loading section" : "Loading section"}: {sectionTitle}
                <span className="text-neutral-400"> (try reloading this page)</span>
        </p>)
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
                                {[...gallerySections.keys()].map((sectionTitle, index) =>
                                    <Link to={"gallery-section-" + index} containerId="scroll-sections" smooth={'easeInOutQuad'} duration={600}>
                                        <Card
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}
                                            key={index}
                                            imgSrc={gallerySections.get(sectionTitle).image}
                                            className={"w-full hover:translate-y-2 transition duration-300 cursor-pointer ease-in-out" + (showHoverEffect && index!==hoveredIndex ? "filter grayscale" : "")}
                                        >
                                            <h2 className="text-xl lg:text-2xl font-bold">{sectionTitle}</h2>
                                        </Card>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {
                    [...gallerySections.entries()].map(
                        (section, index) => getGallerySection(section, index)
                    )
                }
                <Footer className="bg-neutral-800 snap-center"/>
            </div>
        </div>
    )
}