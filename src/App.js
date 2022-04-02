import './App.css';
import './styles/main.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Comp03Json/Header';
import HomeCarousel from './Comp03Json/HomeCarousel';
import Footer from './Comp03Json/Footer';
import Productos from './Comp03Json/Productos';
import Productodetalle from './Comp03Json/ProductoDetalle';


function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <main role="main" className="container">
            <Routes>
              <Route path="/" element={<HomeCarousel />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="/Productodetalle/:idproducto" element={<Productodetalle />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;