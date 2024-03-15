import ReactPhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import firstPic from '/src/assets/img/photos/firstPic.jpg'
import albufera from '/src/assets/img/photos/albufera.jpg'
import spainHoliday from '/src/assets/img/photos/spainHoliday.jpg'
import cascade from '/src/assets/img/photos/cascade.jpeg'
import weddingAnniv from '/src/assets/img/photos/weddingAnniv.jpg'
import trainHP from '/src/assets/img/photos/trainHP.jpg'

import monetBridge from '/src/assets/img/photos/monetBridge.jpg'


import mainHero from '/src/assets/img/photos/mainHero.jpeg'
import { useState } from "react";




const images = [

    {
        src: firstPic,
        width: 1920,
        height: 1080
    },
    {
        src: albufera,
        width: 3264,
        height: 1840
    },
    {
        src: spainHoliday,
        width: 1600,
        height: 900
    },
    {
        src: cascade,
        width: 960,
        height: 1280
    },
    {
        src: weddingAnniv,
        width: 2896,
        height: 5152
    },
    {
        src: trainHP,
        width: 2405,
        height: 1359
    },
    {
        src: monetBridge,
        width: 4032,
        height: 2268
    },
    {
        src: mainHero,
        width: 2916,
        height: 1200
    }

];


const PhotoAlbum = () => {
    const [index, setIndex] = useState(-1);
    return (
        <div  >
            <ReactPhotoAlbum layout="columns" photos={images} onClick={({ index }) => setIndex(index)} />
            <Lightbox
                slides={images}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Zoom]}
            />
        </div>
    );

}

export default PhotoAlbum
