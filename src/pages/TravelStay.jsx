// import Footer from "../components/Reusable/Footer"
// import InConstruction from "../components/Reusable/InConstruction"
import LeafletMap from "../components/TravelStay/LeafletMap";


const TravelStay = () => {
    // const isInConstruction = true;

    return (
        <a href={'#travelstay'} className="relative h-auto flex-row">
            {/* {isInConstruction === false &&
                <div className="h-screen">


                </div>}
            {isInConstruction === true &&
                <InConstruction />
            } */}
            <LeafletMap />
        </a>
    )
}

export default TravelStay
