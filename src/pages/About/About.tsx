import React from "react";
import './About.scss'
import Img from '../../assets/Desktop.webp'
import Arow from '../../assets/Untitled-2.png'
import Behance from "../../assets/behance.svg"

function About(){

    return(
        <div className="About" id='About' >
             <div className="behance">
                <img src={Behance}></img>
                <div className="card">
                    <p>Full Time Job</p>
                </div>
                <div className="card">
                    <p>Project Views</p>
                    <p id='number'>9,785</p>
                </div>
                <div className="card">
                    <p>Appreciations</p>
                    <p id='number'>847</p>
                </div>
                <div className="card">
                    <p>Followers</p>
                    <p id='number'>500</p>
                </div>
            </div>
            <div className="content" data-aos="fade-up">
                <h2 data-aos="fade-up">Hello !</h2>
                <p data-aos="fade-up">I'm <span id='name'>Mohamed Toson</span></p>
                <p data-aos="fade-up">Graphic Designer Specialized in Advertising and Branding</p>

                <div className="buttons">
                    <button data-aos="fade-up"><a href='#Contact'>Contact Me</a></button>
                    <button data-aos="fade-up"><a target='_blank' href='https://www.behance.net/momotoson'>Behance</a></button>
                </div>
            </div>
            <div className="Img">
                <img className="Mohamed" alt="Mohamed Toson" src={Img}></img>
                <img className="Arow" alt="Mohamed Toson Arow" src={Arow}></img>
            </div>
          
        </div>
    )
}

export default About;