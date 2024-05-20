import { Carousel as FlowbiteCarousel } from 'flowbite-react';

export default function Carousel({photos}) {

    const theme = {
        "root": {
            "base": "relative h-full w-full",
            "leftControl": "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
            "rightControl": "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"
        },
        "scrollContainer": {
            "base": "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
            "snap": "snap-x"
        },
        "item": {
            "base": "absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 w-full",
            "wrapper": {
                "off": "w-full flex-shrink-0 transform cursor-default snap-center",
                "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
            }
        },
        "control": {
            "base": "hidden h-8 w-8 inline-flex items-center justify-center rounded-full bg-white/30 hover:inline-flex group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
            "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
        },
    }

    const showControls = () => {
        getControl('left').classList.remove('hidden');
        getControl('right').classList.remove('hidden');
    };

    const hideControls = () => {
        getControl('left').classList.add('hidden');
        getControl('right').classList.add('hidden');
    };

    return (
        <FlowbiteCarousel theme={theme} slide={true} slideInterval={5000} pauseOnHover={true} draggable={false} onMouseEnter={showControls} onMouseLeave={hideControls}>
            {photos.map((photo) =>
                <div className="h-full w-full" style={{backgroundImage:`url(${photo})`, backgroundSize:"cover", backgroundPosition:"center"}}/>
            )}
        </FlowbiteCarousel>
    );
}

function getControl(side) {
    return document.querySelector(`[data-testid="carousel-${side}-control"]`).children.item(0);
}