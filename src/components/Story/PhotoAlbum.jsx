import ImageGallery from "react-image-gallery";

import firstPic from '/src/assets/img/photos/firstPic.jpg'
import albufera from '/src/assets/img/photos/albufera.jpg'
import cascade from '/src/assets/img/photos/cascade.jpeg'
import weddingAnniv from '/src/assets/img/photos/weddingAnniv.jpg'
import scotlandBridge from '/src/assets/img/photos/scotlandBridge.jpg'




// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: firstPic,
    },
    {
        original: albufera,
    },
    {
        original: cascade,
    },
    {
        original: weddingAnniv,
    },
    {
        original: scotlandBridge,
    },
];


const PhotoAlbum = () => {
    return <ImageGallery items={images} />;

}

export default PhotoAlbum
