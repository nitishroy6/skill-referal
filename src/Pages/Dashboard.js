import React from "react";
import Header from "../Components/Header";
import Slideshow from "../Components/Slideshow";
import SubHeader from "../Components/SubHeader";
import Gigs from "../Components/Gigs";
import "../Styles/dashboard.css";
import Footer from "../Components/Footer";
import { useState ,useEffect } from "react/cjs/react.development";
import firebase from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import Config from '../config/Config';

function Dashboard(props) {
 
  // const auth = getAuth();
  // signOut(auth)
  //   .then(() => {
  //     setIsLoggedIn(false)
  //   })
  //   .catch((error) => {
  //     alert("ERROR LOGGING OUT")
  //   });
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // firebase.auth().onAuthStateChanged(function (user) {
  //   if (user) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // });
//   useEffect(()=> {
//     categoryList();
//     },[]);
//  const categoryList = async () => {
//   let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJudW1iZXJfZXhpc3QiOjEsInN0YXR1cyI6MjAwLCJhYmMiOiI3NjU0MzA0OTQ4IiwibWVzc2FnZSI6IkxvZ2dlZGluIFN1Y2Nlc3NmdWxseSIsInZhbGlkaXR5Ijp0cnVlLCJudW1iZXIiOm51bGx9.pp1Thx6rDVYr-YnkOeOtyDLFvrBDfrApzBF3OtekaIE"; 
//   const response = await fetch (Config.apiLink+'/itwebsite_services',{

//   method:'GET',
//   // mode: 'no-cors',
//   headers:{
//     'Accept' : 'application/json',
//     'Content-Type' : 'application/json',
//     // 'Access-Control-Allow-Origin': '*',
//     // 'Authorization': token
// },

//    });
//   console.log("data",response)
//    let retrieved = await response.json();
//    console.log("cate",retrieved);
 
// //   // const categoryList = retrieved.info;
// //   // setCategory(categoryList);
//  }
  return (
    <div>
      <Header />
      <SubHeader />
      {/* {isLoggedIn ? <div>I am Logged in</div> : <div>Not Logged In</div>}
      <h1>Status: {props.loggedInStatus}</h1> */}
      <div className="desc-n-slide">
        <div className="fr-padding">
          <div
            className="post-request-container"
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#fafafa",
              justifyContent: "center",
              alignItems: "center",
              // marginRight: 30,
              padding: 20,
              width: 250,
              fontSize: "90%",
            }}
          >
            <h3>Hi Nishant,</h3>
            <p>Get offers from sellers for your project</p>
            <div className="postAReq">Post a Request</div>
          </div>
          <Slideshow />
        </div>
      </div>
      <div className="continue-browsing-container">
        <div
          className="continue-browsing-heading"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="cont-brows" style={{}}>
            Continue Browsing
          </div>
          <div className="see-all">See All</div>
        </div>
        <Gigs />
      </div>
      <div>
        <div
          className="continue-browsing-heading"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="cont-brows" style={{}}>
            Most Popular Gigs
          </div>
          <div className="see-all">See All</div>
        </div>
        <Gigs />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
