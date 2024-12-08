// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import WalletConnectPage from './WalletConnectPage';
import Header from './Header';
import MainPage from './MainPage';
import SecurityPage from './Security';
import PrivacyPolicy from './PrivacyPolicy';
import Documentation from './Documentation';
import TermsOfService from './TermsOfService';
import CookiePolicy from './CookiePolicy';
import StatusPage from './Status';

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
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/cookie" element={<CookiePolicy />} />
          <Route path="/status" element={<StatusPage />} />

          <Route path="/terms" element={<TermsOfService />} />

          <Route path="/connect" element={<Home />} />
          <Route path="/connect-wallet" element={<WalletConnectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;