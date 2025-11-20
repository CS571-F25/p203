import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MyNavBar from './components/MyNavBar';
import HomePage from './pages/HomePage';
import TrackerPage from './pages/TrackerPage';
import AboutPage from './pages/AboutPage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // 1. Initialize state from localStorage (if it exists)
  const [drinks, setDrinks] = useState(() => {
    const savedDrinks = localStorage.getItem('caffeineLog');
    return savedDrinks ? JSON.parse(savedDrinks) : [];
  });

  // 2. Save to localStorage whenever 'drinks' changes
  useEffect(() => {
    localStorage.setItem('caffeineLog', JSON.stringify(drinks));
  }, [drinks]);

  // 3. Helper function to add a drink safely
  function handleAddDrink(drink) {
    setDrinks(prevDrinks => [...prevDrinks, drink]);
  }

  return (
  <HashRouter>
    <MyNavBar />
        <Container fluid className="mt-4"> 
      <Routes>
        <Route path="/" element={<HomePage drinks={drinks} />} />
        <Route path="/tracker" element={<TrackerPage onAdd={handleAddDrink} />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Container>
    
  </HashRouter>
);
}

export default App; 