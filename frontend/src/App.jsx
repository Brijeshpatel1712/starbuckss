import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Menu from './pages/Menu';
import Featured from './pages/Featured';
import Previous from './pages/Previous';
import Join from './pages/Join';
import Favorites from './pages/Favorites';
import Breakfast from './pages/Breakfast';
import WholeBean from './pages/WholeBean';
import Rewards from './pages/Rewards';
import GiftCards from './pages/GiftCards';
import HotCoffee from './pages/HotCoffee';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/menu/previous" element={<Previous />} />
          <Route path="/account/create" element={<Join />} />
          <Route path="/menu/favorites" element={<Favorites />} />
          <Route path="/menu/breakfast" element={<Breakfast />} />
          <Route path="/menu/whole-bean" element={<WholeBean />} />
          <Route path="/menu/hot-coffee" element={<HotCoffee />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/gift" element={<GiftCards />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

