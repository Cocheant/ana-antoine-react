import Footer from "../components/Footer"
import PhotoAlbum from "../components/Story/PhotoAlbum"

const Story = () => {
    return (
        <section className=" h-auto flex-row">

            <PhotoAlbum />
            <Footer className="flex mt-10" />
        </section>
    )
}

export default Story
