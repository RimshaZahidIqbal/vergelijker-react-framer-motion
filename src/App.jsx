// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/sections/Navbar';
import Homepage from './pages/Homepage';
import BlogListingpage from './pages/BlogListingpage';
import BlogDetailpage from './pages/BlogDetailpage';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/results" element={<Results />} /> */}
            <Route path="/bloglisting" element={<BlogListingpage />} />
            <Route path="/blogdetail" element={<BlogDetailpage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;