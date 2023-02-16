import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Fresh Food Finder
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main> 
        <Routes>
          <Route path="/product/:id" element={<ProductScreen/>} exact></Route>
          <Route path="/" element={<HomeScreen/>} exact></Route>
        </Routes>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  
  );
}

export default App;