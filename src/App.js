import './App.css';
import './styles/main.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HomeCarousel from './Components/HomeCarousel';
import Footer from './Components/Footer';
import Productos from './Components/Productos';


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
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;