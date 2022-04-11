import React,{useState,useEffect} from "react";
import "../Styles/subheader.css";
// import ProfileImage from '../Static/profile.png'
import SubMenu from "./SubMenu";
import "../Styles/submenu.css"
import { NavLink } from "react-router-dom";
import Config from '../config/Config';
function SubHeader() {
  // const [newCategory,setCategory] = useState([])
   
  
  return (
    <div
      className="subHeader-container"
      style={{}}
    >
      <nav className="categories-nav">
         {/* {newCategory.map((item, index) => ( */}
        <ul className="cat-list"  >
          {/* <li className="nav__menu-item"><NavLink className="sub-text" activeClassName="active-sub" to="/graphicsdesign">{item.cate_name}</NavLink><SubMenu/></li> */}
          <li className="nav__menu-item"><NavLink className="sub-text" activeClassName="active-sub" to="/digitalmarketing">Digital Marketing</NavLink><SubMenu/></li>
          <li className="nav__menu-item"><NavLink className="sub-text" activeClassName="active-sub" to="/writingtrans">Writing &amp; Translation</NavLink><SubMenu/></li>
          <li className="nav__menu-item"><NavLink className="sub-text" activeClassName="active-sub" to="/videoanim">Video &amp; Animation</NavLink><SubMenu/></li>
          <li className="nav__menu-item"><NavLink className="sub-text" activeClassName="active-sub" to="/musicaud">Music &amp; Audio</NavLink><SubMenu/></li>
          <li className="nav__menu-item"><NavLink className="sub-text" activeClassName="active-sub" to="/progtech">Programming &amp; Tech</NavLink><SubMenu/></li>
          <li className="nav__menu-item"><NavLink className="sub-text" activeClassName="active-sub" to="/data">Data</NavLink><SubMenu/></li>
          <li className="nav__menu-item"><NavLink className="sub-text" activeClassName="active-sub" to="/business">Business</NavLink><SubMenu/></li>
          <li className="nav__menu-item"><NavLink className="sub-text" activeClassName="active-sub" to="/lifestyle">Lifestyle</NavLink><SubMenu/></li>
        </ul>
        {/* ))} */}
      </nav>
    </div>
  );
}

export default SubHeader;
