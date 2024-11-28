import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home';
import Browse from './pages/Browse';
import Watch from './pages/Watch';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;

