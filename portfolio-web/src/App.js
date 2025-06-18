import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import HomeContent from "./components/HomeContent"
import AboutContent from "./components/AboutContent"
import ContactContent from "./components/ContactContent"
import ProjectContent from "./components/ProjectContent"

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        {/* General Routes*/}
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<AboutContent />} />
        <Route path="/contact" element={<ContactContent />} />
        <Route path="/project" element={<ProjectContent />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App