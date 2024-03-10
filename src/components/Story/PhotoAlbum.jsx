import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: "/src/assets/img/photos/firstPic.jpg",
    },
    {
        original: "/src/assets/img/photos/albufera.jpg",
    },
    {
        original: "/src/assets/img/photos/cascade.jpeg",
    },
    {
        original: "/src/assets/img/photos/weddingAnniv.jpg",
    },
    {
        original: "/src/assets/img/photos/scotlandBridge.jpg",
    },
];


const PhotoAlbum = () => {
    return <ImageGallery items={images} />;

}

export default PhotoAlbum
