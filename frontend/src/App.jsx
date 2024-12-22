import React from 'react'
import Home from './components/home'
import VideoFolder from './components/videoFolder.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/videos' element={<VideoFolder/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
