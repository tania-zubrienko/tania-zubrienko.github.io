import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/projects' element={<h1>Projects</h1>} />
        <Route path='/contact' element={<h1>Contact</h1>} />
      </Routes>
    </div>
  )
}

export default App