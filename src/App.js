import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from './components/Footer';
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail"

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/ChomCHOB-Front-end-Quiz' element={<Home />} exact />
          <Route path="/ChomCHOB-Front-end-Quiz/products/:productId" element={<ProductDetail />} />
          <Route path="/ChomCHOB-Front-end-Quiz/cart" element={<Cart />} />
          <Route path="/ChomCHOB-Front-end-Quiz/cart/:productId" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}


export default App;
