import React from 'react'
import "./Signup.css"

function Signup() {
  return (
    <div>
        
  <form className='Sform'>
    <h3 id='sh'>Sign up to naver miss update</h3>
  <div class="mb-3">
    
    <input type="email" class="form-control" id="exampleInputEAmail1" aria-describedby="emailHelp" placeholder='Enter your Email'/>
    
   <div>
   <div id="emailHelp" class="form-text"><h6 id='sh2'>by clicking sign up</h6></div>
   <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1"><h5 className='sh3'>Man</h5></label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2"><h5 className='sh3'>Woman</h5></label>
</div>
   </div>
  </div>
  
  
  
  <button type="button" class="btn btn-outline-light">Sign in</button>
</form>
      
    </div>
  )
}

export default Signup
