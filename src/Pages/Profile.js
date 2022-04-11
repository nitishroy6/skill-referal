import React, { useState,useEffect } from "react";
import Header from "../Components/Header";
import SubHeader from "../Components/SubHeader";
import "../Styles/profile.css";
import { BiCurrentLocation, BiUser, BiPlusCircle } from "react-icons/bi";
import { AiFillPlusCircle, AiOutlineShareAlt } from "react-icons/ai";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BsThreeDots } from "react-icons/bs";
import Footer from '../Components/Footer'
import "react-tabs/style/react-tabs.css";
function Profile() {
  const [isActiveSave, setIsActiveSave] = useState(0);
  useEffect(()=> {
    categoryList();
    },[]);
 const categoryList = async () => {
  let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJudW1iZXJfZXhpc3QiOjEsInN0YXR1cyI6MjAwLCJhYmMiOiI3NjU0MzA0OTQ4IiwibWVzc2FnZSI6IkxvZ2dlZGluIFN1Y2Nlc3NmdWxseSIsInZhbGlkaXR5Ijp0cnVlLCJudW1iZXIiOm51bGx9.pp1Thx6rDVYr-YnkOeOtyDLFvrBDfrApzBF3OtekaIE"; 
  // const response = await fetch ('http://127.0.0.1/git/emanagement/api/admin/languages',{
  const response = await fetch ('https://www.troislogic.com/freelancer/api/Admin//itwebsite_services',{
  // const response = await fetch ('http://localhost/apifreelancer/categories.php',{

  method:'GET',
  //  mode: 'no-cors',
  headers:{
    // 'Accept' : 'application/json',
    // 'Content-Type' : 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'Authorization': token
},

   });
  console.log("data",response)
   let retrieved = await response.json();
   console.log("cate",retrieved);
 
//   // const categoryList = retrieved.info;
//   // setCategory(categoryList);
 }
  return (
    <div>
      <Header />
      <SubHeader />
      <div className="profile-container">
        <div className="prof-sub-cont">
          <div className="row-one">
            <div className="intro-box">
              <div className="prof-pic"></div>
              <h3>USERNAME</h3>
              <div className="from-since">
                <div className="from">
                  <div>
                    <BiCurrentLocation color="black" /> From
                  </div>{" "}
                  <div className="country">&nbsp;India</div>
                </div>
                <div className="since">
                  <div>
                    <BiUser color="black" /> Member Since{" "}
                  </div>{" "}
                  <div className="year">&nbsp;2021</div>
                </div>
              </div>
            </div>
            <div className="description-box">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginRight: "10%",
                  marginLeft: "10%",
                }}
              >
                <h4>Description</h4>
                <h5>Edit Description</h5>
              </div>
              <div>
                <p>
                  I've been working on web pages since I was 15. I like to build
                  web applications. Recently, I've worked on "wordpress" and
                  been working on Django projects. I've built a few domestic
                  news portals for my clients. Moreover, I've been teaching my
                  Mother how to blog and she's now posting on her own. Whether
                  wordpress made or custom made, it takes a maximum of 5 days
                  for me to build a website from scratch.
                </p>
              </div>
              <div className="lang">
                <div className="lang-head">
                  <h4>Languages</h4>
                  <h5>Add New</h5>
                </div>
                <div style={{ fontSize: 14, textAlign: "left" }}>
                  English -{" "}
                  <span style={{ color: "grey" }}>Conversational</span>
                </div>
              </div>
              <div className="skills">
                <div className="lang-head">
                  <h4>Skills</h4>
                  <h5>Add New</h5>
                </div>
                <div className="skill-body">
                  <div className="skill-name">
                    Web Development
                  </div>
                  <div className="skill-name">
                    Html5
                  </div>
                  <div className="skill-name">
                    CSS3
                  </div>
                  <div className="skill-name">
                    JavaScript
                  </div>
                  <div className="skill-name">
                    React JS
                  </div>
                  <div className="skill-name">
                    Python 3
                  </div>
                  <div className="skill-name">
                    Git/Github
                  </div>
                </div>
              </div>
              <div className="education">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginRight: "10%",
                  marginLeft: "10%",
                }}
              >
                <h4>Education</h4>
                <h5>Add New</h5>
              </div>
              <div>
                <p>
                  Add your Education
                </p>
              </div>
              </div>
              <div className="cert">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginRight: "10%",
                  marginLeft: "10%",
                }}
              >
                <h4>Certification</h4>
                <h5>Add New</h5>
              </div>
              <div>
                <p>
                  Add your Certification
                </p>
              </div>
              </div>
            </div>
          </div>
          <div className="row-two">
            <div className="tab-nav">
              {/* {isActiveSave ? (
                <>
                  <div className="nav-content active-gig clicked" onClick={setIsActiveSave(1)}>Active Gigs</div>
                  <div className="nav-content saved-drafts">Saved Drafts</div>
                </>
              ) : (
                <>
                  <div className="nav-content active-gig">Active Gigs</div>
                  <div className="nav-content saved-drafts clicked" >Saved Drafts</div>
                </>
              )}
              {
                console.log("Active hai", isActiveSave)
              } */}
              <Tabs>
                <TabList>
                  <Tab>Active Gigs</Tab>
                  <Tab>Drafts</Tab>
                </TabList>

                <TabPanel>
                  <div className="add-box">
                    <AiFillPlusCircle size={100} color="#1dbf73" />
                    Create a New Gig
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="drafts-box">
                    <div className="draft">
                      <div className="gig-image"></div>
                      <div className="title-n-opt">
                        <div className="draft-title">
                          I will make a wordpress website for you
                        </div>
                        <div className="opt-n-price">
                          <div>
                            <BsThreeDots size={25} />
                          </div>
                          <div style={{ color: "#1dbf73" }}>Starting at $5</div>
                        </div>
                      </div>
                    </div>
                    <div className="draft">
                      <div className="gig-image"></div>
                      <div className="title-n-opt">
                        <div className="draft-title">
                          I will make a wordpress website for you
                        </div>
                        <div className="opt-n-price">
                          <div>
                            <BsThreeDots size={25} />
                          </div>
                          <div style={{ color: "#1dbf73" }}>Starting at $5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
