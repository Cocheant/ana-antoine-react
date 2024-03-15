import { FormattedMessage } from "react-intl"
import Footer from "../components/Footer"
import scotlandBridge from '/src/assets/img/photos/scotlandBridgeCentered.jpg'
import scotlandLake from '/src/assets/img/photos/scotlandLake.jpg'


{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center"></div> */ }

const Home = () => {

    return (
        <section className="relative h-auto flex-row">



            <div className="bg-hero bg-no-repeat  bg-center bg-fixed bg-cover h-screen"
                style={{ backgroundImage: `url(${scotlandBridge})` }}>

                <div className="sm:text-3xl md:text-4xl text-2xl flex justify-center text-vlorange  pt-28">  <FormattedMessage
                    id="home.hero.gettingmarried"
                    defaultMessage="We are getting married!"
                /> </div>
                <div className="md:text-8xl sm:text-7xl text-5xl flex justify-center text-vlorange pb-96"> <FormattedMessage
                    id="global.names"
                    defaultMessage="Ana & Antoine"
                />
                </div>
                <div className="flex justify-center pt-28">

                </div>
            </div>
            <div className="flex justify-center  pb-28 pt-28 bg-green/60">
                <div className="flex justify-center text-vlorange md:text-4xl sm:text-4xl text-3xl font-semibold  pt-20 pb-20">
                    <FormattedMessage
                        id="global.date"
                        defaultMessage="Date to be determined"
                    />

                </div>
            </div>
            <div className="bg-hero bg-no-repeat  bg-center bg-fixed bg-cover"
                style={{ backgroundImage: `url(${scotlandLake})` }}>

                <div className="md:text-8xl sm:text-7xl text-5xl flex justify-center text-vlorange pt-44 pb-80">
                    <FormattedMessage
                        id="home.secondText"
                        defaultMessage=" "
                    />
                </div>
                <div className="flex justify-center pt-28 ">

                </div>
            </div>

            <Footer className="flex mt-10" />
        </section >
    )
}

export default Home
