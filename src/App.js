import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Messages from "./Pages/Messages";
import ManageOrders from "./Pages/ManageOrders";
import Profile from "./Pages/Profile";
import GigDetails from "./Pages/GigDetails";
import { useState } from "react/cjs/react.development";
import GraphicsDesign from "./Pages/GraphicsDesign";
import DigitalMarketing from "./Pages/DIgitalMarketing";
import WritingTranslation from "./Pages/WritingTranslation";
import VideoAnimation from "./Pages/VideoAnimation";
import MusicAudio from "./Pages/MusicAudio";
import ProgrammingTech from "./Pages/ProgrammingTech";
import Data from "./Pages/Data";
import Business from "./Pages/Business";
import Lifestyle from "./Pages/LIfestyle";
import { AiTwotoneSkin } from "react-icons/ai";
 let token ;
function App() {
   const [loggedInStatus, setLoggedInStatus] = useState("");
  const [user, setUser] = useState({});
  useEffect(() => {
    console.log("useeffect")
    tokenCheck();
  })
  function tokenCheck() {
    console.log("tokencheck")
    let tk = localStorage.getItem('token');
    if(tk=== null){
      window.location.href="/";
    }
    // token = tk;
    // setLoggedInStatus(tk);
    // console.log('token is: ', tk);
    // if(tk === null){
    //   window.location.href="/";
    // }
  }

  return (
    <div className="App">
        <Switch>
        <Route exact path="/" component={Login} />
        </Switch>
        {/* {token ? */}
        <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/about" component={About} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/manage" component={ManageOrders} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/gigdetail" component={GigDetails} />
        <Route exact path="/graphicsdesign" component={GraphicsDesign} />
        <Route exact path="/digitalmarketing" component={DigitalMarketing} />
        <Route exact path="/writingtrans" component={WritingTranslation} />
        <Route exact path="/videoanim" component={VideoAnimation} />
        <Route exact path="/musicaud" component={MusicAudio} />
        <Route exact path="/progtech" component={ProgrammingTech} />
        <Route exact path="/data" component={Data} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/lifestyle" component={Lifestyle} />
      </Switch>
     
    </div>
  );
}

export default App;
