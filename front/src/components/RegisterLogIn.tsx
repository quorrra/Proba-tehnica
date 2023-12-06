//import React from 'react';
import './RegisterLogIn.css'

const RegisterLogIn=()=>{
  return(
    <div className='container'>
       <div className='header'>
        <div className='text'>Register</div>
         <div className='underline'></div>
       </div>
       <div className='inputs'>

        <div className='input'>
          <input type='email' placeholder='Email'/>
        </div>
        
        <div className='input'>
          <input type='password' placeholder='Password'/>
        </div>
       </div>
       
    </div>
  )
}


export default RegisterLogIn