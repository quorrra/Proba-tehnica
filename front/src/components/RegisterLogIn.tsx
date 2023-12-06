//import React from 'react';
import './RegisterLogIn.css'
import React, { useState } from 'react';

const RegisterLogIn=()=>{
 //   const[action, setAction]= useState("Create account");

 const [action,setAction]=useState("Register");



  return(
    <div className='navbar'>
       <ul>
        <li>Login</li>
        <li>Register</li>
        </ul>
    
    <div className='container'>
       <div className='header'>
        <div className='text'>{action}</div>
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
       <div className='submit-container'>
         <div className={action==='Login'? 'submit gray': 'submit' }>Create account</div>
         <div className= {action==='Create account'?'submit gray': 'submit'}>Login</div>
       </div>
       
    </div>
    </div>
  )
}


export default RegisterLogIn