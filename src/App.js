import './App.css';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Content3 from './component/Home/Content3';
import "./asset/css/header.css"
import Content1 from './component/Home/Content1';
import Home from './component/Home/Home';
import Product from './component/product/Product';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
      {/* <Product_Content1/> */}
    </div>
  );
}

export default App;
