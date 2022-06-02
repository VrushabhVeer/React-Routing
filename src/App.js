import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Login from './components/Login';
import Products from './components/Products';
import Product from './components/Product';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Products' element={<Products />}></Route>
        <Route path='/products/:id/:name' element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
