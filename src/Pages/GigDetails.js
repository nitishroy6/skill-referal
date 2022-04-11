import React from "react";
import Header from "../Components/Header";
import SubHeader from "../Components/SubHeader";
import GigDetailHeader from "../Components/GigDetailHeader";
import "../Styles/gigdetails.css";
import GigPic from "../Static/webdev.jpg";
import SellerDp from "../Static/ronaldo.jpg";
import ReactStars from "react-rating-stars-component";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { BsDot } from "react-icons/bs";
import Footer from "../Components/Footer";
function GigDetails() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const options = ["Most Relevant", "Most Recent"];
  const defaultOption = options[0];
  return (
    <div>
      <Header />
      <SubHeader />
      <GigDetailHeader />
      <div className="gigd">
        <div className="gigd-sub">
          <ul className="gigd-cat">
            <li>Programming &amp; Tech </li>
            <li>Web Programming </li>
            <li>Custom Website</li>
          </ul>
        </div>
        <div>
          <div className="gig-pic">
            <img src={GigPic} alt="Gig-Pic" />
          </div>
          <div className="gig-det">
            <h2>About this Gig</h2>
            <h3>Please Contact me before ordering!</h3>
            <h3 className="wcm">Why choose me?</h3>
            <ul>
              <li>I'm an experienced developer</li>
              <li>100% mobile responsive</li>
              <li>SEO friendly</li>
              <li>Elegant design</li>
              <li>Clean code </li>
              <li>Provide well-commented source file</li>
              <li>Always use copyright-free images</li>
            </ul>
            <h3>Technologies:</h3>
            <h3 className="tech-stack">
              HTML5 | CSS3 | JS | JQUERY | BOOTSTRAP | CSS Libraries &amp;
              JQUERY Plugins
            </h3>
            <h3 className="need">What do I need from you?</h3>
            <ol>
              <li>Describe your idea or Description of your Website.</li>
              <li>Logo and Color scheme.</li>
              <li>Inspirational Website or Example website (If Have).</li>
            </ol>
            <div className="desc-end">
            <p>
              Please always feel free to knock me anytime. I am always here to
              help you. I'll provide clean and clear optimizes source code with
              W3C Validation.
            </p>
            <p>Hire me and your satisfaction is GUARANTEED.</p>
            </div>
            <div className="gig-skill">
              <div className="skill-sub-cont">
                <div>
                  <h3>Programming Language</h3>
                  <h4>HTML &amp; CSS</h4>
                </div>
                <div>
                  <h3>Expertise</h3>
                  <h4>PSD to HTML, Performance, Design</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="seller-det">
            <h2>About The Seller</h2>
            <div className="seller-brief">
              <div className="seller-dp">
                <img src={SellerDp}></img>
              </div>
              <div className="sub-brief">
                <div className="sub-sub-brief">
                  <div>
                    <h3>Nitish Kumar</h3>
                  </div>
                  <div className="on-off-status">
                    <ul>
                      <li>Online</li>
                    </ul>
                  </div>
                </div>
                <div className="seller-desc">
                  Passionate Experienced UI UX designer and web developer
                </div>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div className="contact-me">Contact Me</div>
              </div>
            </div>
            <div className="seller-det-box">
              <div className="seller-from-since">
                <div>
                  <h3>From</h3>
                  <h4>India</h4>
                </div>
                <div>
                  <h3>Member Since</h3>
                  <h4>Sept 2021</h4>
                </div>
              </div>
              <div>
                <p>
                  Are you looking for a Passionate and experienced designer or
                  developer? You are at the right place!
                </p>
                <p>
                  Hey, it's me Nitish, I am a certified Software Engineer and a
                  Web developer. I have more than 4+ years of experience in
                  HTML, CSS, Javascript, WordPress and PHP frameworks. and I'm
                  also doing UI UX Designs.
                </p>
              </div>
            </div>
          </div>
          <div className="review-div">
            <div className="review-avg-stars">
              <div className="review-stars">
                <div>
                  <h3>140 Reviews</h3>
                </div>
                <div>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
              <div className="sort-by-dropdown">
                <h3>Sort By </h3>
                <Dropdown
                  options={options}
                  value={defaultOption}
                  placeholder="Select an option"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GigDetails;
