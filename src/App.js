import './App.css';
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
    <Nav />
    <Header />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
   </div>
   
  );
}

export default App;
