import Footer from "../components/Reusable/Footer"
import PhotoAlbum from "../components/Story/PhotoAlbum"

const Story = () => {
    return (
        <section className="relative w-auto flex-row h-screen overflow-hidden">
            <div className="  p-4 ">

                <PhotoAlbum />
            </div>
            <Footer className="flex mt-10" />
        </section >
    )
}

export default Story
