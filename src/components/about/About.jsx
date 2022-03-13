import React from 'react'
import "./about.css"
import Web from "../../img/webd.jpg"
import Award from "../../img/crio.png"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div> 
            <div className="a-card">
              <img
                src={Web}
                alt=""
                className="a-img"
              />
            </div> 
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>  
            <p className="a-sub">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
            </p>
            <p className="a-desc">
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                   <h4 className="a-award-title">Crio.Do-Web Development</h4>
                   <p className="a-award-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About