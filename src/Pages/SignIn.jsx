import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import '../dist/styles.css';
import {createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword} from "firebase/auth"
import {app} from '../firebase'

// instance for auth //
const auth = getAuth(app);

const SignIn = () => {
    // modal infos

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    // creating a page jumper for home sign up // 

    const nav = useNavigate();


    // function to signin for user //

    const signinUser = () => { 
      // adding required field // 

      if(!email || !password){
        alert("please fill the required field !") 
 
      }
      createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) =>{
        alert("sign in Success !") 
        nav('/')();
   
       
      })
      .catch((error) => {
        // Handle errors during sign-in
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Sign-in error:', errorCode, errorMessage);
  
        if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
          // User not found or wrong password. Provide appropriate feedback to the user.
          alert('Invalid email or password. Please check your credentials.');
        } else {
          // Handle other sign-in errors
          console.error('Sign-in error:', errorCode, errorMessage);
          alert('Error during sign-in. Please try again.');
        }
      });
    }

    return (
    <div className="container-signin">
      <div>
        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>PERSONAL INFORMATION</h4>
          <form className="info-form">  

            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>
  
              <span>
                <label>
                  PassWord <b>*</b>
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  type="password"
                  placeholder="Enter Password"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>
  
            </div>
  
            {/* <button className="signin" onClick={signinUser}>
                SignIn
              </button> */}

              <Link className="signin" onClick={signinUser} to="/">
                  Sign In
              </Link>

              <Link className="user" to="/SignUp">
                <h4>Not A User? SignUp Now</h4>
            </Link>

          </form> 
          
        </div>
        <Footer />
      </div>
      
    </div>
    
    );
  };

export default SignIn;
