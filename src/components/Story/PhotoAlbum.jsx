import ImageGallery from "react-image-gallery";

import firstPic from '/src/assets/img/photos/firstPic.jpg'
import albufera from '/src/assets/img/photos/albufera.jpg'
import cascade from '/src/assets/img/photos/cascade.jpeg'
import weddingAnniv from '/src/assets/img/photos/weddingAnniv.jpg'
import mainHero from '/src/assets/img/photos/mainHero.jpeg'




// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: mainHero,
    },
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
    }

];


const PhotoAlbum = () => {
    return (
        <div>
            <ImageGallery items={images} />
        </div>
    );

}

export default PhotoAlbum
