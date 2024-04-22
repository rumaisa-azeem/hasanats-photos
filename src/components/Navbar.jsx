import {Instagram} from "@mui/icons-material";

export default function Navbar(props) {
    return (
        <div className="fixed w-screen top-0 z-40 py-4 px-6 flex flex-row gap-4 items-center" style={{color: props.navTextColor}}>
            <div className="font-bold text-2xl">📸 hasanat ali photography</div>
            <div className="flex gap-4 items-center">
                <a href="https://instagram.com/hasanat.shutter" target="_blank"><Instagram/></a>
                <a>portfolio</a>
                <a>services</a>
                <a>contact</a>
            </div>
        </div>
    );
}