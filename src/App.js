import React from 'react';
import './styles/App.css';
import LandingPage from './components/LandingPage'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Cart from './components/Cart';
import Order from './components/Order';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
