import 'normalize.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import RotateDevice from './components/RotateDevice.jsx'
import Home from './pages/Home/Home'

function App() {


  return (
    <main>
      <RotateDevice />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </main>
  )
}

export default App
