import {ArrowForward, KeyboardDoubleArrowDown} from "@mui/icons-material";
import { Link } from 'react-scroll';
import Carousel from '../elements/Carousel';

import heroPhoto from "../../assets/hero-photos/hero-photo.JPG";
import heroPhoto2 from "../../assets/hero-photos/hero-photo2.JPG";
import heroPhoto3 from "../../assets/hero-photos/hero-photo3.jpg";

export default function Hero() {

    const heroPhotos = [heroPhoto, heroPhoto2, heroPhoto3];

    return (
        <div>
            <section className="grid max-w-screen h-screen grid-cols-12">
                <div className="h-full flex flex-col justify-center align-middle col-span-5 p-6 gap-2">

                    <h1 className="font-extrabold text-left">
                        <span className="text-6xl">photos by</span> <br/>
                        <span className="text-8xl">hasanat ali.</span>
                    </h1>

                    <div className="text-left pb-2">
                        events / corporate / just for fun :)
                    </div>

                    <div className='flex justify-items-start items-center gap-2'>
                        <button className="w-fit px-3 py-2 font-semibold border-2 border-black rounded bg-white text-black
                            hover:-translate-y-1 transition ease-in-out">
                            contact me
                        </button>
                        <a href="/portfolio">
                            <button className="w-fit px-3 py-2 bg-black text-white font-semibold border-2 rounded border-transparent
                            hover:-translate-y-1 flex gap-1 items-center transition ease-in-out">
                                see my portfolio <ArrowForward/>
                            </button>
                        </a>
                    </div>

                    <Link to="about" smooth={'easeInOutQuad'} duration={600} className="text-left mt-4 w-fit hover:translate-y-1 transition ease-in-out text-4xl cursor-pointer">
                        <KeyboardDoubleArrowDown fontSize="inherit"/>
                    </Link>

                </div>

                <div className="col-span-7">
                    <Carousel photos={heroPhotos}/>
                </div>

            </section>
        </div>
    );
}
