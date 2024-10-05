import {ArrowForward, KeyboardDoubleArrowDown} from "@mui/icons-material";
import { Link } from 'react-scroll';
import Carousel from '../elements/Carousel';

import heroPhoto from "../../assets/hero-photos/hero-photo.JPG";
import heroPhoto2 from "../../assets/hero-photos/hero-photo2.JPG";
import heroPhoto3 from "../../assets/hero-photos/hero-photo3.jpg";

export default function Hero(props) {

    const heroPhotos = [heroPhoto, heroPhoto2, heroPhoto3];

    return (
        <div className={props.className}>
            <section className="max-w-screen h-screen flex flex-col-reverse md:flex-row pb-6 md:pb-0">
                <div className="md:h-full flex flex-col justify-center align-middle p-6 md:gap-2">

                    <h1 className="font-extrabold text-left">
                        <span className="text-2xl md:text-6xl">photos by</span> <br/>
                        <span className="text-4xl md:text-8xl">hasanat ali.</span>
                    </h1>

                    <div className="text-left pb-2">
                        events / corporate / just for fun :)
                    </div>

                    <div className='flex justify-items-start items-center gap-2'>
                        <a href="mailto:abulhasanatali@outlook.com">
                            <button className="w-fit px-3 py-2 font-semibold border-2 border-black rounded bg-white text-black
                            hover:-translate-y-1 transition ease-in-out">
                                contact me
                            </button>
                        </a>
                        <a href="/portfolio">
                            <button className="w-fit px-3 py-2 bg-black text-white font-semibold border-2 rounded border-transparent
                            hover:-translate-y-1 flex gap-1 items-center transition ease-in-out">
                                see my portfolio <ArrowForward/>
                            </button>
                        </a>
                    </div>

                    <Link to="about" containerId="scrollable" smooth={'easeInOutQuad'} duration={600} className="text-left mt-4 w-fit hover:translate-y-1 transition ease-in-out text-4xl cursor-pointer hidden md:inline">
                        <KeyboardDoubleArrowDown fontSize="inherit"/>
                    </Link>

                </div>

                <div className="w-screen h-full relative md:w-1/2 flex-grow">
                    <div className={"absolute w-full h-full"}>
                        <Carousel photos={heroPhotos}/>
                    </div>
                    <div className={"bg-gradient-to-b from-white to-transparent h-1/4 w-full absolute md:invisible"}></div>
                </div>

            </section>
        </div>
    );
}
