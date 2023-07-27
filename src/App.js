import './App.css';
import Address from './Components/Address/Address';

//import AddressDetail from './Pages/AddresDetail/AddressDetail';
//import{BrowserRouter,Routes,Route} from "react-router-dom"
//import Homepage from "./Pages/Homepage"
// import AddressDetail from './Pages/AddresDetail/AddressDetail';
// import Addtocart from './Pages/Addtocart/Addtocart';
// import Menproduct from './Pages/Menproduct/Menproduct';
//import PaymentDetail from './Pages/PaymentDetail/PaymentDetail';
//import Womenproduct from './Pages/Womenproduct'




function App() {
  return (
    <>
    <div>
      {/* <BrowserRouter>
      <Routes> */}
        
        {/* <Route path='/AddressDetail' element={<AddressDetail/>}/>
        <Route path='/Addtocart' element={<Addtocart/>}/>
        <Route path='/Menproduct' element={<Menproduct/>}/> */}
        {/* <Route path='/PaymentDetail' element={<PaymentDetail/>}/> */}
        {/* <Route path='/Womenproduct' element={<Womenproduct/>}/>
        <Route path='/' element={<Homepage/>}/> */}
      {/* </Routes>
      </BrowserRouter> */}
      <Address/>
    
    
    

    </div>
    </>
  );
}

export default App;
