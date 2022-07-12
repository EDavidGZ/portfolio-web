import './App.css';
import Header from './componentes/Header/Header';
import Nav from './componentes/Nav/Nav';
import About from './componentes/About/About'
import Portfolio from './componentes/Portfolio/Portfolio';
import Contact from './componentes/Contact/Contact'
import Footer from './componentes/Footer/Footer'


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
