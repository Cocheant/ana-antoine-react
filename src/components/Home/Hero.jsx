import { FormattedMessage } from "react-intl"
import PhotoBanner from "../PhotoBanner"
import heroimage from '/src/assets/img/photos/mainHero.jpg'

const Hero = () => {
    return (
        <section className="w-full h-1/3 relative ">

            <p className="text-xl text-orange-300 ml-20">  <FormattedMessage
                id="home.hero.gettingmarried"
                defaultMessage="We are getting married!"
            /> </p>
            <p className="text-7xl text-orange-300 ml-20"> <FormattedMessage
                id="global.names"
                defaultMessage="Ana & Antoine"
            /> </p>

            <PhotoBanner src={heroimage} />


        </section>
    )
}

export default Hero
