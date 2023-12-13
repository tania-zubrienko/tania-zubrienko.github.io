import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import HomePage from './pages/HomePage/HomePage'

function App() {

  return (
    <div className="App ml-3 mr-2">
      <Navigation />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/projects' element={<h1>Projects</h1>} />
        <Route path='/contact' element={<h1>Contact</h1>} />
      </Routes>

    </div>
  )
}

export default App