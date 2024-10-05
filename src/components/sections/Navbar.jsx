import {Instagram, LinkedIn } from "@mui/icons-material";
import { useState } from 'react';

const navLinks = [
    {
        name: 'portfolio',
        link: '/portfolio'
    },
    // {
    //     name: 'services',
    //     link: '/services'
    // },
    {
        name: 'contact',
        link: 'mailto:abulhasanatali@outlook.com',
        title: 'email abulhasanatali@outlook.com'
    }
];

const navIcons = [
    {
        icon: <Instagram/>,
        link: 'https://instagram.com/hasanat.shutter'
    },
    {
        icon: <LinkedIn/>,
        link: 'https://linkedin.com/in/hasanat-ali'
    }
];

export default function Navbar(props) {

    const flashCameraText = '📸 hasanat ali photography';
    const noFlashCameraText = '📷 hasanat ali photography';
    const [brandText, setBrandText] = useState(flashCameraText);

    const flashCamera = async () => {
        const wait100 = () => new Promise(resolve => setTimeout(resolve, 100));
        for (let i = 0; i < 3; i++) {
            setBrandText(noFlashCameraText);
            await wait100();
            setBrandText(flashCameraText);
            await wait100();
        }
    };

    return (
        <div className={"fixed w-screen top-0 z-40 py-4 px-6 flex flex-row gap-4 items-center " + props.className} style={{color: props.navTextColor}}>
            <a className="font-bold md:text-2xl" href="/" onMouseEnter={flashCamera}>{brandText}</a>
            <div className="flex gap-1 items-center">
                {navIcons.map(item =>
                    <a href={item.link} target="_blank" className="hover:translate-y-1 transition ease-in-out" rel="noreferrer">
                        {item.icon}
                    </a>)}
            </div>
            {navLinks.map(item =>
                <a href={item.link} title={item.title} className="hover:translate-y-1 transition ease-in-out">{item.name}</a>)}
        </div>
    );
}