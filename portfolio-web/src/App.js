import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import HomeContent from "./components/HomeContent"
import AboutContent from "./components/AboutContent"

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        {/* Genral Routes*/}
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<AboutContent />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
