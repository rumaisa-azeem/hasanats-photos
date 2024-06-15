import { Card } from "flowbite-react";
import {useState} from "react";
import {Link} from "react-scroll";
import {ImageList, ImageListItem} from "@mui/material";

export default function GallerySection({sectionTitle, images, id, className}) {

    const itemData = [
        {
            image: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            title: 'Bed',
        },
        {
            image: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
            title: 'Books',
        },
        {
            image: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
            title: 'Sink',
        },
        {
            image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
            title: 'Kitchen',
        },
        {
            image: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
            title: 'Blinds',
        },
        {
            image: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
            title: 'Chairs',
        },
        {
            image: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptop',
        },
        {
            image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
            title: 'Doors',
        },
        {
            image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
            title: 'Coffee',
        },
        {
            image: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
            title: 'Storage',
        },
        {
            image: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
            title: 'Candle',
        },
        {
            image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
            title: 'Coffee table',
        },
    ];

    return (
        <div className={"h-screen p-8 " + className} id={id}>
            <h2 className="font-bold text-4xl mt-14 mb-8">portfolio / <span className="text-neutral-500">{sectionTitle}</span></h2>
            <div className="h-5/6 overflow-y-scroll bg-neutral-100 p-4">
                <ImageList cols={4} gap={8} variant="masonry" >
                    {images.map((imageURL, index) =>
                        <ImageListItem key={index}>
                            <img
                                srcSet={`${imageURL}`}
                                src={`${imageURL}`}
                                alt={''}
                                loading="lazy"
                            />
                        </ImageListItem>
                    )}
                </ImageList>
            </div>
        </div>
    );
}




/*
{ sectionTitle &&
    (
        <section id="gallery" className="bg-neutral-800 h-min-screen p-8 text-white">
            <div className="mt-16 flex justify-between items-center relative">
                <h2 className="text-5xl font-extrabold">portfolio / <span className="text-neutral-400">{sectionTitle}</span></h2>
                <Link to="gallery-sections" smooth={'easeInOutQuad'} duration={600} className="text-4xl cursor-pointer hover:-translate-y-1 transition ease-in-out">
                    <KeyboardDoubleArrowUp className="text-white" fontSize="inherit" />
                </Link>
            </div>
            <div className="pt-8">
                <ImageList cols={3} gap={8} variant="masonry">
                    {gallerySections.map((item) =>
                        <ImageListItem key={item}>
                            <img
                                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.image}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    )}
                </ImageList>
            </div>
        </section>
    )
}
 */