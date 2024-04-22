import {Instagram, LinkedIn } from "@mui/icons-material";

export default function Navbar(props) {

    const navLinks = [
        {
            'name': 'portfolio',
            'link': ''
        },
        {
            'name': 'services',
            'link': ''
        },
        {
            'name': 'contact',
            'link': ''
        }
    ];

    const navIcons = [
        {
            'icon': <Instagram/>,
            'link': 'https://instagram.com/hasanat.shutter'
        },
        {
            'icon': <LinkedIn/>,
            'link': 'https://linkedin.com/in/hasanat-ali'
        }
    ];


    return (
        <div className="fixed w-screen top-0 z-40 py-4 px-6 flex flex-row gap-4 items-center" style={{color: props.navTextColor}}>
            <div className="font-bold text-2xl">📸 hasanat ali photography</div>
            <div className="flex gap-1 items-center">
                {navIcons.map(item => <a href={item.link} target="_blank" className="hover:translate-y-1 transition ease-in-out">{item.icon}</a>)}
            </div>
            {navLinks.map(item => <a href={item.link} className="hover:translate-y-1 transition ease-in-out">{item.name}</a>)}
        </div>
    );
}