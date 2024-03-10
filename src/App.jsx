import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home, Story, TravelStay, Contact } from './pages'
import Navbar from './components/Navbar'



const App = () => {
  return (
    <main className='bg-green'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/travelstay" element={<TravelStay />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
    </main>


  )
}

export default App
