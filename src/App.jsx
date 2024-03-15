import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home, Story, TravelStay, Details, Contact } from './pages'
import Navbar from './components/Reusable/Navbar'




const App = () => {
  return (
    <main className='bg-green h-screen '>
      <Router>
        <Navbar />
        <div className='content '>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/travelstay" element={<TravelStay />} />
            <Route path="/details" element={<Details />} />

            <Route path="/contact" element={<Contact />} />

          </Routes>


        </div>

      </Router>
    </main>


  )
}

export default App
