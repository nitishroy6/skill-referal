import React from "react";
import "../Styles/subheader.css";
import "../Styles/gigdetails.css"
// import ProfileImage from '../Static/profile.png'
import { NavLink } from "react-router-dom";
import {BsList, BsFillBookmarkHeartFill, BsShareFill} from 'react-icons/bs';
function GigDetailHeader() {
  return (
    <div
      className="subHeader-container feat-cont"
      style={{}}
    >
      <nav className="features-nav">
        <ul className="feat-list feat-menu">
          <li><NavLink className="sub-text" to="/">Overview</NavLink></li>
          <li><NavLink className="sub-text" to="/">Description</NavLink></li>
          <li><NavLink className="sub-text" to="/">About the seller</NavLink></li>
          <li><NavLink className="sub-text" to="">Reviews</NavLink></li>
        </ul>
        <ul className="feat-list feat-btns">
            <li><BsList size={20} color='black' /></li>
            <li><BsFillBookmarkHeartFill size={20} color='black' /></li>
            <li><BsShareFill size={20} color='#1dbf73' /></li>
        </ul>
      </nav>
    </div>
  );
}

export default GigDetailHeader;
