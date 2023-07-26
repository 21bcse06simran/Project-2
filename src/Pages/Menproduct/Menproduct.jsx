
import React,{useState,useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Card from '../../Components/Card/Card';
import Signup from '../../Components/Signup/Signup';
import Connect from '../../Components/Connect/Connect';
import "./Menproduct.css"

function Menproduct() {
    const [arr, setArr] = useState([]);

    const getDate = () => {
      fetch("http://localhost:8081/product", {
        method: "GET",
      })
      .then((res) => res.json())
      .then((data) => {
        setArr(data);
      });
    };
  
    useEffect(() => {
      getDate();
    }, []); 
  
    return (
      <div>
          
        <Navbar />
        <h1 id='cart'>MAN CORNER</h1>
        <div className='Card'>
          {arr.map((el) => {
            return (
              <div key={el.id}> {/* Added key prop for optimization */}
                <Card
                  img1={el.img1}
                  product={el.product}
                  mrp={el.mrp}
                  color={el.color}
                  // price={el.price}
                  // rating={el.rating}
                />
              </div>
            );
          })}
        </div>
  
        <Signup />
        <Connect />
      </div>
    )
}

export default Menproduct
