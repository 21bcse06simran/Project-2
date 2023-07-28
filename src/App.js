// Import the required components and styles
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import './App.css';
import Address from './Components/Address/Address';
import AddressDetail from './Pages/AddresDetail/AddressDetail';
import Homepage from './Pages/Homepage/Homepage';
import Productpage from './Pages/Productpage/Productpage';
import Login from './Pages/Login/Login';
import Cart from './Components/Cart/Cart';
import OrderPlaced from './Pages/Success/Success';
import Product from './Pages/Product/Product';
// import Addtocart from './Pages/Addtocart';
// import Menproduct from './Pages/Menproduct';
// import PaymentDetail from './Pages/PaymentDetail';
// import Womenproduct from './Pages/Womenproduct';
// import Homepage from './Pages/Homepage';

// Function to render the App
function App() {
  return (
      <div>
        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/productdetails/:id' element={<Productpage/>}/>
            <Route path='login/:id' element={<Login/>}/>
            <Route path='cart/:email' element={<Cart/>}/>
            <Route path='success/:id' element={<OrderPlaced/>}/>
            <Route path='product/' element={<Product/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
