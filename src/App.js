
import './App.css';
import Navbar from './Components/navbar';
import Homescreen from './Screen/homescreen/homescreen';
import { Routes, Route } from 'react-router-dom';
import Product from './Screen/Product/product';
import Footer from './Components/Footer/footer';
import Cart from './Screen/Cart/cart';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Homescreen/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
