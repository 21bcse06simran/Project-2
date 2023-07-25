import './App.css';
import Card from './Components/Card/Card';
import Information from './Components/Information/Information';
import Navbar from './Components/Navbar/Navbar';
import Connect from './Components/Connect/Connect';

function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Card/>
      <Information/>
      <Connect/>

    </div>
    </>
  );
}

export default App;
