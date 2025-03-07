export default function Footer(props) {
    return (
        <footer className={"border-t-2 border-t-neutral-700 text-neutral-400 p-10 " + props.className}>
            <p className="text-center">Copyright © 2024 Abul Hasanat Ali, all rights reserved. Designed and coded by <a href={"https://rumaisacodes.com"} target={"_blank"} className={"underline"}>Rumaisa Azeem.</a></p>
        </footer>
    );
}