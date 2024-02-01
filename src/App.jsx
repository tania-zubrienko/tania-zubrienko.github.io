import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import Footer from './components/Footer/Footer'
import ContactForm from './components/ContactForm/ContactForm'
import SingleProject from './pages/SingleProject/SingleProject'
import AboutPage from './pages/AboutPage'


function App() {

  return (
    <div className="App  mr-2 max-w-screen-lg">
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/projects/:id' element={<SingleProject />} />


      </Routes>
      <Footer />
    </div>
  )
}

export default App