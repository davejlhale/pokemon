import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Contact from './pages/contact';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/NotFound';
import MainNav from './components/MainNav';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <BrowserRouter>

      <MainNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Pokemon" element={<Pokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
