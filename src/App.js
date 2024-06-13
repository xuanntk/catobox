import './App.css';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Content3 from './component/Home/Content3';
import "./asset/css/header.css"
import Content1 from './component/Home/Content1';
function App() {
  return (
    <div className="App">
      <Header/>
      <Content1/>
      <Content3/>
      <Footer/>
   {/* <Product_Content1/> */}
    </div>
  );
}

export default App;
