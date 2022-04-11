import React from "react";
import "../Styles/header.css";
import ProfileImage from '../Static/profile.png'
import { NavLink } from "react-router-dom";
function Header() {
  function Logout(){
    localStorage.clear();
     let t = localStorage.getItem('token')
    if(t==null){ 
    window.location.href="/";
    }
  }
  return (
    <div className="hdrcont">
      <section className="head">
        <header>
          <div className="logo">
            <h1 className="logoname">
              <NavLink className="logoname" to="/dashboard">King Freelancer</NavLink>
            </h1>
            <form style={{display: "flex", flexDirection: 'row', alignItems: "center"}}>
                <input className="searchboxinput" placeholder="Search gigs" />
                <button className="search-btn" style={{borderTopRightRadius: 2, borderBottomRightRadius: 2}}>Search</button>
            </form>
          </div>
          <div className="menu">
            <div className="menuitem home">
              <NavLink activeClassName="active" className="txtmenu home" to="/dashboard">
                Home
              </NavLink>
            </div>
            <div className="menuitem abt">
              <NavLink activeClassName="active" className="txtmenu abt" to="./about">
                About
              </NavLink>
            </div>
            <div className="menuitem srv">
              <NavLink activeClassName="active" className="txtmenu srv" to="/messages">
                Messages
              </NavLink>
            </div>
            <div className="menuitem srv">
              <NavLink activeClassName="active" className="txtmenu srv" to="/manage">
                Manage Orders
              </NavLink>
            </div>
            <div className="menuitem prd">
              <NavLink activeClassName="active" className="txtmenu prd" to="/profile">
                <img src={ProfileImage} height="30" width="30" />
              </NavLink>
            </div>
            <button className="menuitem srv lgout"  onClick={() => Logout()}>
              {/* <NavLink activeClassName="active" className="txtmenu srv" > */}
                Logout
            </button>
          </div>
          <span class="toggle"></span>
        </header>
      </section>
    </div>
  );
}

export default Header;