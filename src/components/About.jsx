import aboutPhoto from '../media/about-photo.jpeg';
import { ArrowForward } from "@mui/icons-material";

const aboutText = "" +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut " +
    "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
    "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate " +
    "velit esse cillum dolore eu fugiat nulla pariatur.";

export default function About() {
    return (
        <section id="about" className="h-screen flex flex-col justify-center text-white">
            <div className="container mx-auto flex gap-16">
                <div className="w-full flex justify-end">
                    <img src={aboutPhoto} className="rounded-full" height="400px" width="400px"/>
                </div>
                <div className="flex flex-col gap-4 justify-center text-left">
                    <h1 className="font-extrabold text-3xl">hi, i'm hasanat.</h1>
                    <p>{aboutText}</p>
                    <a href="https://instagram.com/hasanat.shutter" target="_blank"
                       className="w-fit px-3 py-2 font-semibold border-2 border-white rounded flex items-middle gap-2">
                        let's connect on instagram <ArrowForward/>
                    </a>
                </div>
            </div>
        </section>
    );
}