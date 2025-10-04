import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParkeoYaLanding from './components/ParkeoYaLanding';
import TermsAndConditions from './components/TermsAndConditions';
import AboutProject from './components/AboutProject';
import './App.css';

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <div className="App">
          <Routes>
            <Route path="/" element={<ParkeoYaLanding />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/about-project" element={<AboutProject />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;