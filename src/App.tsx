import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {

useEffect(() => {
  AOS.init({ duration: 1000 });
  AOS.refresh();
}, []);


  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />}/>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
