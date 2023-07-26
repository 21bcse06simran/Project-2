import React, { useEffect, useState } from 'react'
import "./Address.css"

function Address() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    //const [Address,setAddress]=useEffect('');
    const [arr, setArr] = useState([]);



    const saveDetail = () => {
        const data = {
          fname: fname,
          lname: lname,
          email: email,
          city: city,
          state: state,
          zip: zip
        };
      
        fetch("http://localhost:8081/address", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((detail) => {
            console.log(detail)
          alert("Saved successfully!!");
          // Assuming 'detail' is an array received from the server, update 'arr' state with it
          setArr(detail);
        });
      };
      
    useEffect(()=>
    {
        
    },[])

  return (
    <div>
      <form className="row g-3 needs-validation" id='form' novalidate>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" value={fname} onChange={(e)=>setFname(e.target.value)} required/>
    <div className="valid-feedback">
      perfect!!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" value={lname} onChange={(e)=>setLname(e.target.value)} required/>
    <div className="valid-feedback">
    perfect!!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustomUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
      <div className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" value={city} onChange={(e)=>setCity(e.target.value)} required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04" required>
      <option selected disabled value={state} onChange={(e)=>setState(e.target.value)}>Choose...</option>
      <option >Odisha</option>
      <option >Rajasthan</option>
      <option >UP</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" value={zip} onChange={(e)=>setZip(e.target.value)} required/>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  {/* <div className="col-md-4">
    <label htmlFor="validationCustom06" className="form-label">Address</label>
    <input type="text" className="form-control" id="validationCustom06" value="Address" onChange={(e)=>setAddress(e.target.value)}  required/>
    <div className="valid-feedback">
    perfect!!
    </div>
  </div> */}
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" htmlFor="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>

    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-dark" type="submit" onClick={saveDetail}>Continue</button>
  </div>
</form>
<div>
        {arr.map((item) => (
          <div key={item.id}>
            {/* Render the content of each item */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Address
