import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/gigs.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gigImage from "../Static/nature1.jpg";
import ProfileImage from "../Static/nkj3.jpg";
import { AiFillStar, AiOutlineMenu, AiTwotoneHeart } from "react-icons/ai";
// function Gigs() {
//   return (
// <div>
//   <div className="browse-gigs">
//       <img src={gigImage} className="gigImage" />

//   </div>
// </div>
//   );
// }

function Gigs() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    accessibility: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="slider-pkg">
      <div>
        <NavLink to="/gigdetail">
          <div className="browse-gigs">
            <img src={gigImage} className="gigImage" />
            <div className="gig-username">
              <img className="gig-dp" src={ProfileImage} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3>NKJ</h3>
                <div style={{ fontSize: 12, color: "grey" }}>
                  Level 2 seller
                </div>
              </div>
            </div>
            <div className="gig-title">
              I will design and develop a modern responsive website for you
            </div>
            <div className="gig-db-rating">
              <AiFillStar color="#ffbe5b" /> 4.0
            </div>
            <div className="gig-bottom">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "25%",
                }}
              >
                <AiOutlineMenu color="grey" size={25} />
                <AiTwotoneHeart color="grey" size={25} />
              </div>
              <div className="gig-price">
                <div>Starting at</div>
                <div>₹1,200</div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
      <div>
        <div className="browse-gigs">
          <img src={gigImage} className="gigImage" />
          <div className="gig-username">
            <img className="gig-dp" src={ProfileImage} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3>NKJ</h3>
              <div style={{ fontSize: 12, color: "grey" }}>Level 2 seller</div>
            </div>
          </div>
          <div className="gig-title">
            I will design and develop a modern responsive website for you
          </div>
          <div className="gig-db-rating">
            <AiFillStar color="#ffbe5b" /> 4.0
          </div>
          <div className="gig-bottom">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "25%",
              }}
            >
              <AiOutlineMenu color="grey" size={25} />
              <AiTwotoneHeart color="grey" size={25} />
            </div>
            <div className="gig-price">
              <div>Starting at</div>
              <div>₹1,200</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="browse-gigs">
          <img src={gigImage} className="gigImage" />
          <div className="gig-username">
            <img className="gig-dp" src={ProfileImage} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3>NKJ</h3>
              <div style={{ fontSize: 12, color: "grey" }}>Level 2 seller</div>
            </div>
          </div>
          <div className="gig-title">
            I will design and develop a modern responsive website for you
          </div>
          <div className="gig-db-rating">
            <AiFillStar color="#ffbe5b" /> 4.0
          </div>
          <div className="gig-bottom">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "25%",
              }}
            >
              <AiOutlineMenu color="grey" size={25} />
              <AiTwotoneHeart color="grey" size={25} />
            </div>
            <div className="gig-price">
              <div>Starting at</div>
              <div>₹1,200</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="browse-gigs">
          <img src={gigImage} className="gigImage" />
          <div className="gig-username">
            <img className="gig-dp" src={ProfileImage} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3>NKJ</h3>
              <div style={{ fontSize: 12, color: "grey" }}>Level 2 seller</div>
            </div>
          </div>
          <div className="gig-title">
            I will design and develop a modern responsive website for you
          </div>
          <div className="gig-db-rating">
            <AiFillStar color="#ffbe5b" /> 4.0
          </div>
          <div className="gig-bottom">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "25%",
              }}
            >
              <AiOutlineMenu color="grey" size={25} />
              <AiTwotoneHeart color="grey" size={25} />
            </div>
            <div className="gig-price">
              <div>Starting at</div>
              <div>₹1,200</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="browse-gigs">
          <img src={gigImage} className="gigImage" />
          <div className="gig-username">
            <img className="gig-dp" src={ProfileImage} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3>NKJ</h3>
              <div style={{ fontSize: 12, color: "grey" }}>Level 2 seller</div>
            </div>
          </div>
          <div className="gig-title">
            I will design and develop a modern responsive website for you
          </div>
          <div className="gig-db-rating">
            <AiFillStar color="#ffbe5b" /> 4.0
          </div>
          <div className="gig-bottom">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "25%",
              }}
            >
              <AiOutlineMenu color="grey" size={25} />
              <AiTwotoneHeart color="grey" size={25} />
            </div>
            <div className="gig-price">
              <div>Starting at</div>
              <div>₹1,200</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="browse-gigs">
          <img src={gigImage} className="gigImage" />
          <div className="gig-username">
            <img className="gig-dp" src={ProfileImage} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3>NKJ</h3>
              <div style={{ fontSize: 12, color: "grey" }}>Level 2 seller</div>
            </div>
          </div>
          <div className="gig-title">
            I will design and develop a modern responsive website for you
          </div>
          <div className="gig-db-rating">
            <AiFillStar color="#ffbe5b" /> 4.0
          </div>
          <div className="gig-bottom">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "25%",
              }}
            >
              <AiOutlineMenu color="grey" size={25} />
              <AiTwotoneHeart color="grey" size={25} />
            </div>
            <div className="gig-price">
              <div>Starting at</div>
              <div>₹1,200</div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default Gigs;
