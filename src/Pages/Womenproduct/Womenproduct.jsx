import React from 'react'

function Womenproduct() {
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

export default Womenproduct
