import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './routes/Home';
import Works from './routes/Works';
import Ideas from './routes/Ideas';
import About from './routes/About';

import ScrollToTop from './utils/ScrollToTop';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
