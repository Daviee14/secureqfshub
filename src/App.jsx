// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import WalletConnectPage from './WalletConnectPage';
import Header from './Header';
import MainPage from './MainPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-">
          <Header />
        </nav>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/connect" element={<Home />} />
          <Route path="/connect-wallet" element={<WalletConnectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;