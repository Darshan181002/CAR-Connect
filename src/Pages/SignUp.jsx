import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import '../dist/styles.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';

// Initialize auth and app ID (assuming these are already set up)
const auth = getAuth(app);

const SignUp = () => {
  // Modal infos
  const [name, setName] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Navigation after signup
  const navigate = useNavigate();

  // Function to create user with validation
  const createUser = async () => {
    // Required fields check
    if (!name || !licenseNumber || !email || !password) {
      alert("Please fill out all fields");
      return;
    }

    // Driving license number validation (using regular expression)
    const regex = /^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))([1-9][0-9]{3})[0-9]{7}$/;
    if (!regex.test(licenseNumber)) {
      alert("Invalid Driving License Number format.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign up successful!");
      navigate('/SignIn'); // Redirect to login page
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Registration error:', errorCode, errorMessage);

      if (errorCode === 'auth/email-already-in-use') {
        alert('Email is already registered. Please use a different email.');
      } else {
        console.error('Registration error:', errorCode, errorMessage);
        // You can choose to display a more generic error message here
      }
    }
  };

  return (
    <div className="container-signin">
      <div>
        {/* Personal info */}
        <div className="booking-modal__person-info">
          <h4>PERSONAL INFORMATION</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  Name <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder="Full Name (As Per Driving License)"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Driving License <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder="Your License Number"
                  onChange={(e) => setLicenseNumber(e.target.value)}
                  value={licenseNumber}
                />
                <p className="error-modal">This field is required.</p>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  PassWord <b>*</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <p className="error-modal">This field is required.</p>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox" />
              <p>Please send me latest news and updates</p>
            </span>

            <button onClick={createUser} className="signin">
              SignUp
            </button>

           <Link className="user" to="/SignIn">
              <h4>Already a user? SignIn</h4>
            </Link>

        </form> 
        
      </div>
       <Footer />
    </div>
    
    </div>
  
  );
}
export default SignUp;
