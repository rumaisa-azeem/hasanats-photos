import aboutPhoto from '../../assets/about-photo.jpeg';
import { ArrowForward } from "@mui/icons-material";

const aboutText = "A London/Manchester based photographer. I have experience in event, portrait, headshot, corporate marketing, and landscape photography.";

export default function About(props) {
    return (
        <section id="about" className={"h-screen flex flex-col justify-center text-white " + props.className}>
            <div className="container mx-auto flex gap-8 px-6 md:gap-12 flex-col md:flex-row">
                    <img src={aboutPhoto} className="rounded-full" height="400px" width="400px"/>
                <div className="flex flex-col gap-4 justify-center text-center md:text-left px-4 md:px-0">
                    <h1 className="font-extrabold text-3xl">hi, i'm hasanat.</h1>
                    <p>{aboutText}</p>
                    <a href="https://instagram.com/hasanat.shutter" target="_blank"
                       className="w-fit px-3 py-2 font-semibold border-2 border-white rounded flex items-middle gap-2 self-center md:self-start">
                        let's connect on instagram <ArrowForward/>
                    </a>
                </div>
            </div>
        </section>
    );
}