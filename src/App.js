import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './componentes/Header/Header';
import Nav from './componentes/Nav/Nav';
import About from './componentes/About/About'
import Portfolio from './componentes/Portfolio/Portfolio';
import Contact from './componentes/Contact/Contact'
import Footer from './componentes/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


function App() {
  return (
   <div>
     <BrowserRouter>
    <Nav />
    <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
     </BrowserRouter>
    {/* <About />
    <Portfolio />
    <Contact />
    <Footer /> */}
   </div>
   
  );
}

export default App;
