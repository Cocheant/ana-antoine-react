import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home, Story, TravelStay, Details, Contact } from './pages'
import Navbar from './components/Reusable/Navbar'
import Footer from './components/Reusable/Footer'
import LeafletMap from './components/TravelStay/LeafletMap'




const App = () => {
  return (
    <main className='bg-green h-screen '>
      <Router>
        <Navbar />
        <div className='content '>

          <section className="relative h-auto flex-row">


            <Home />
            <Story />
            <TravelStay />
            <Details />
            <Contact />
            <LeafletMap />

            {/* /* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/travelstay" element={<TravelStay />} />
            <Route path="/details" element={<Details />} />

            <Route path="/contact" element={<Contact />} />

          </Routes>*/ }

            <Footer className="flex " />
          </section>
        </div>

      </Router>
    </main>


  )
}

export default App
