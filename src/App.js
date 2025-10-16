import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './routes/Home';
import Works from './routes/Works';
import Ideas from './routes/Ideas';
import About from './routes/About';
import Resume from './routes/Resume';

import ScrollToTop from './utils/ScrollToTop';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* 임시 메인 */}
        <Route path='/' element={<Resume />} />
        {/* 원래 메인 */}
        <Route path='/home' element={<Home />} />
        <Route path='/works' element={<Works />} />
        <Route path='/ideas' element={<Ideas />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
