import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MyNavBar from './components/MyNavBar';
import HomePage from './pages/HomePage';
import TrackerPage from './pages/TrackerPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage'; // Ensure you created this file!
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [drinks, setDrinks] = useState(() => {
    const savedDrinks = localStorage.getItem('caffeineLog');
    return savedDrinks ? JSON.parse(savedDrinks) : [];
  });

  // 2. STATE: User Profile (Persists in localStorage)
  // Default limit is 400mg (FDA standard) if no profile is set
  const [userData, setUserData] = useState(() => {
    const savedUser = localStorage.getItem('userProfile');
    return savedUser ? JSON.parse(savedUser) : { weight: '', height: '', limit: 400 };
  });

  // 3. EFFECT: Save Drinks when changed
  useEffect(() => {
    localStorage.setItem('caffeineLog', JSON.stringify(drinks));
  }, [drinks]);

  // 4. EFFECT: Save User Profile when changed
  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(userData));
  }, [userData]);

  // 5. HANDLER: Add a Drink
  function handleAddDrink(drink) {
    setDrinks(prevDrinks => [...prevDrinks, drink]);
  }

  // 6. HANDLER: Clear Log (Reset Button)
  function handleClearLog() {
    if (window.confirm("Are you sure you want to clear your entire log?")) {
      setDrinks([]);
      localStorage.removeItem('caffeineLog');
    }
  }

  // 7. HANDLER: Save Profile & Calculate Limit
  // Logic: 5.7mg per kg is safe max, but NEVER exceed 400mg
  const handleSaveProfile = (data) => {
    const w = parseFloat(data.weight);
    let recommendedLimit = 400; // Default fallback

    if (!isNaN(w) && w > 0) {
      recommendedLimit = Math.round(w * 5.7);
      if (recommendedLimit > 400) recommendedLimit = 400;
    }

    setUserData({
      weight: data.weight,
      height: data.height,
      limit: recommendedLimit
    });
  };

  return (
    <HashRouter>
      <div className="d-flex flex-column min-vh-100">
        <MyNavBar />
        
        <Container fluid className="mt-4 flex-grow-1">
          <Routes>
            {/* Pass the dynamic LIMIT to HomePage */}
            <Route 
              path="/" 
              element={<HomePage drinks={drinks} limit={userData.limit} />} 
            />
            
            <Route 
              path="/tracker" 
              element={<TrackerPage onAdd={handleAddDrink} onClear={handleClearLog} />} 
            />
            
            <Route path="/about" element={<AboutPage />} />
            
            <Route 
              path="/profile" 
              element={<ProfilePage userData={userData} onSave={handleSaveProfile} />} 
            />
          </Routes>
        </Container>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;