import { FormattedMessage } from "react-intl"
import Footer from "../components/Reusable/Footer"
import InConstruction from "../components/Reusable/InConstruction"

const Contact = () => {

    const isInConstruction = true;

    return (
        <section className=" relative flex-row">
            {isInConstruction === false &&
                <div className="h-screen">


                </div>}
            {isInConstruction === true &&
                <InConstruction />
            }
            <div className="flex justify-center  pb-28 pt-28 bg-green/60">
                <div className="flex h-auto  justify-center flex-row text-vlorange md:text-xl sm:text-xl text-xl font-semibold  pb-20">
                    <div className="flex justify-center ">
                        <a href="https://github.com/Cocheant/ana-antoine-react" target="_blank" >
                            GitHub Source
                        </a>
                    </div>
                    <div className="flex justify-center pl-6">
                        <a href="https://github.com/Cocheant/ana-antoine-react/issues" target="_blank" className="flex">
                            <FormattedMessage
                                id="global.reportIssue"
                                defaultMessage="Report issue"
                            />
                        </a>
                    </div>



                </div>
            </div>
            <Footer className="flex " />
        </section>
    )
}

export default Contact
