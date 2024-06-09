import './App.css';
import Header from './sections/Header';
import Footer from './sections/Footer';
import "./asset/css/header.css"
import Content1 from './component/Home/Content1';
function App() {
  return (
    <div className="App">
      <Header/>
      <Content1/>
      <Footer/>
    </div>
  );
}

export default App;
