import React from "react";
import './Auth.Style.css';
import {useState} from "react";
import { firebaseAuth } from "../../backend/firebaseHandler";
import { createUserWithEmailAndPassword } from "firebase/auth";


const AuthPage=()=> {
    const[userInput, setUserInput]=useState({
        emailId:"",
        password:""
    })

    const handlechange =(event) =>{
      const {name ,value} = event.target;
      setUserInput({
        ...userInput,
        [name]:value
      })
    }
  
    const handleClick= async() => {
      try{
        await createUserWithEmailAndPassword (firebaseAuth,userInput.emailId,userInput.password)
        alert("Account created!")
        
      }catch(err){
        alert(err);
        
      }
    }
  
    return (
      <div className="page-container">
        <div className="input-container">
          <input name="emailId" onChange={handlechange} className="input" placeholder="Email ID" />
          <input name="password" onChange={handlechange} className="input" placeholder="Password" type='password' />
          <button onClick={handleClick} className="button">Create Account</button>
        </div>
      </div>
    );
  }
  export default AuthPage;