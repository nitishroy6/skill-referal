import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../Styles/slideshow.css";
import free1 from "../Static/free.jpg";
import free2 from "../Static/free2.jpg";
import free3 from "../Static/free3.jpg";

const slideImages = [
  {
    url: free1,
    caption: "New to King Freelancer?",
  },
  {
    url: free2,
    caption: "Your first Project awaits",
  },
  {
    url: free3,
    caption: "Create your E-Commerce Website",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <span className="slide-title"
              >
                {slideImage.caption}
              </span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
