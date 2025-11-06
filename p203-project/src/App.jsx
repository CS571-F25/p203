import { useState, HashRouter } from 'react'
import './App.css'

function App() {
  return <HashRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<AboutMe />} />
    </Routes>
  </HashRouter>
}

export default App
