import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Login.css";
import googleLogo from "../Static/google_logo.jpg";
import Dashboard from "./Dashboard";
import VideoBG from "../Components/VideoBG";
import firebase from "../firebase";

function Login() {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState();
  const [islogin, setIsLogin] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const [error, setError] = useState(false);

  const handleChange = (text) => {
    setNumber(text);
  };
  // function logIn() {
  //   if (number.length < 10) {
  //     setError(true);
  //   } else {
  //     setError(false);
  //     window.location.href = "/dashboard";
  //   }
  // }
  useEffect(() => {
    console.log("login useeffect")
    tokenCheck();
  },[])
   function tokenCheck() {
    let tk = localStorage.getItem('token');
    if(tk){
      alert("helo das")
      console.log("login dashboard")
      window.location.href="/dashboard";
    }
  }
  function reCaptcha() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log("Response", response);
          localStorage.setItem('token', response);
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  }

  const onSubmitOtp = async (e) => {
    e.preventDefault();
    let otpInput = otp;
    console.log(otpInput);
    let optConfirm = window.confirmationResult;
    // console.log(codee);
    await optConfirm
      .confirm(otpInput)
      .then(function (result) {
        // alert("Successfullllll");
      window.location.href = "/dashboard";
      })
      .catch(function (error) {
        console.log(error);
        alert("Incorrect OTP");
      });
    
  };

  function onSignInSubmit(event) {
    event.preventDefault();
    console.log("Annna");
    reCaptcha();
    const phoneNumber = "+91" + number;
    const appVerifier = window.recaptchaVerifier;
    console.log("Annna  1");

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        // ...
        setIsLogin(true);
        setShowLogin(false);
      })
      .catch((error) => {
        console.log("Annna  3");
        alert(error);
        setShowLogin(true);
        setIsLogin(false);
      });
  }

  function onResendOTP(event) {
    event.preventDefault();
    console.log("Annna");
    const phoneNumber = "+91" + number;
    const appVerifier = window.recaptchaVerifier;
    console.log("Annna  1");

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        
      })
      .catch((error) => {
        console.log("Annna  3");

        alert(error);
        
      });
  }
  // console.log("Numbers: ", number);
  // console.log("LOCATION: ", window.location.href)
  return (
    <div className="boxContainer">
      <VideoBG />
      <div className="loginBox">
        <div>
          <div className="signInWithGoogle">
            <img src={googleLogo} height="30" width="30" /> &nbsp;
            <a href="https://www.google.com">
              <h3
                style={{
                  fontWeight: 500,
                  fontSize: 24,
                  color: "grey",
                  margin: 0,
                  padding: 10,
                  width: 300,
                }}
              >
                Sign in with Google
              </h3>
            </a>
          </div>
          {showLogin ? (
            <div>
              <form className="formBox" type="submit">
                <div style={{ paddingBottom: "20px" }}>
                  <input
                    id="ph"
                    style={{
                      height: 50,
                      width: 350,
                      padding: 10,
                      borderRadius: 10,
                      fontSize: 16,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    placeholder="Enter Phone Number"
                    type="text"
                    maxLength="10"
                    value={number}
                    onInput={(e) => handleChange(e.target.value)}
                  />
                  {/* {setNumber(document.getElementById('ph').textContent)} */}
                </div>
              </form>
              <button
                className="login-btn"
                style={{
                  height: 50,
                  width: 100,
                  fontSize: 22,
                  fontWeight: 300,
                  border: 0,
                  color: "white",
                  borderRadius: 25,
                  cursor: "pointer",
                  width: 200,
                }}
                onClick={(e) => onSignInSubmit(e)}
              >
                Login
              </button>
            </div>
          ) : null}
          {error ? (
            <div style={{ color: "red", fontSize: 12 }}>
              Please enter valid phone number
            </div>
          ) : null}
        </div>

        {islogin === true ? (
          <div>
            <form className="formBox" type="submit">
              <div style={{ paddingBottom: 10 }}>
                <input
                  id="ph"
                  style={{
                    height: 50,
                    width: 350,
                    padding: 10,
                    borderRadius: 10,
                    fontSize: 16,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  placeholder="Enter OTP"
                  type="text"
                  maxLength="10"
                  value={otp}
                  onInput={(e) => setOtp(e.target.value)}
                />
                {/* {setNumber(document.getElementById('ph').textContent)} */}
              </div>
              <div
                style={{ paddingBottom: 10, fontSize: 14, cursor: "pointer" }}
              >
                <u onClick={(e) => onResendOTP(e)}>Resend OTP</u>
              </div>
            </form>

            <button
              className="login-btn"
              style={{
                height: 50,
                width: 100,
                fontSize: 22,
                fontWeight: 300,
                border: 0,
                color: "white",
                borderRadius: 25,
                cursor: "pointer",
                width: 200,
              }}
              onClick={(e) => onSubmitOtp(e)}
            >
              Verify
            </button>
          </div>
        ) : null}

        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
}

export default Login;
