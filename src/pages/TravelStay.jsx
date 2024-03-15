import Footer from "../components/Reusable/Footer"
import InConstruction from "../components/Reusable/InConstruction"


const TravelStay = () => {
    const isInConstruction = true;

    return (
        <section className=" relative flex-row">
            {isInConstruction === false &&
                <div className="h-screen">


                </div>}
            {isInConstruction === true &&
                <InConstruction />
            }
            <Footer className="flex " />
        </section>
    )
}

export default TravelStay
