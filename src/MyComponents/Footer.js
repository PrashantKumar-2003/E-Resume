import React from 'react';
import './components.css';
import linkedin from '/web project/Resume_website/personal/src/MyComponents/media/linkedin.png';
import instagram from '/web project/Resume_website/personal/src/MyComponents/media/instagram.png';
import github from '/web project/Resume_website/personal/src/MyComponents/media/github.png';
import facebook from '/web project/Resume_website/personal/src/MyComponents/media/facebook.png';
import email from '/web project/Resume_website/personal/src/MyComponents/media/gmail.png';
export default function Footer() {
    return (
        <>
            <div className="footer">
                <p>Trying to contacting me</p>
                <div className="footer_con">
                    <a href="https://www.linkedin.com/in/prashant-kumar-aa4756203/" target={"_blank"}><img src={linkedin} alt="linkedin logo"/></a>
                    <a href="https://github.com/PrashantKumar-2003" target={"_blank"}><img src={github} alt="github logo"/></a>
                    <a href="https://www.instagram.com/prashant_tejan/" target={"_blank"}><img src={instagram} alt="instagram logo"/></a>
                    <a href="https://www.facebook.com/prashant.tejan.42/" target={"_blank"}><img src={facebook} alt="facebook logo"/></a>
                    <a href="mailto:prashantejan4251@gmail.com" target={"_blank"}><img src={email} alt="email logo"/></a>
                </div>
                <div className="img_att"><a href="https://www.vecteezy.com/free-vector/flat-design" target={"_blank"}>Flat Design Vectors by Vecteezy</a></div>
            </div>
        </>
    )
}
