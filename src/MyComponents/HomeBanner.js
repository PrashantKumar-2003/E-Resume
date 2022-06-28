import React from 'react';
import './components.css';
import Owner from '/web project/Resume_website/personal/src/MyComponents/media/Owner4.png';

export default function HomeBanner() {
//   window.onscroll = ()=>{
//     window.scrollTo(0,0);
//   };
    const execute = () => {
        let code1 = document.getElementById("request");
        code1.style.animationPlayState = "running";
        let Fstart = document.getElementById("Fstart");
        Fstart.style.animationPlayState = "running";
        let Sstart = document.getElementById("Sstart");
        Sstart.style.animationPlayState = "running";
        let Tstart = document.getElementById("Tstart");
        Tstart.style.animationPlayState = "running";
        let Frstart = document.getElementById("Frstart");
        Frstart.style.animationPlayState = "running";
        let Fvstart = document.getElementById("Fvstart");
        Fvstart.style.animationPlayState = "running";
        let Sxstart = document.getElementById("Sxstart");
        Sxstart.style.animationPlayState = "running";
        let Svstart = document.getElementById("Svstart");
        Svstart.style.animationPlayState = "running";
        let Estart = document.getElementById("Estart");
        Estart.style.animationPlayState = "running";
        let Nstart = document.getElementById("Nstart");
        Nstart.style.animationPlayState = "running";
        let Tnstart = document.getElementById("Tnstart");
        Tnstart.style.animationPlayState = "running";
        setTimeout(() => {
            document.getElementById("code").style.textAlign = "left";
        }, 2000);
        setTimeout(() => {
            window.scrollTo(0, 970);
        }, 13000);
        window.onscroll = ()=>{
            window.scrollTo();
          };
    }
    return (
        <>
            <section className="homebanner" id='homebanner'>
                <div className='bothContent'>
                    <div className="bannerText">
                        <h1>Prashant <br/> Kumar</h1>
                        <p>
                            &emsp;&emsp;&emsp;"Meet the Computer Engineering alumnus<br />
                            &emsp;who committed with his Personal computer"
                        </p>
                    </div>
                    <div className="execute">
                        <div className='pos_cont'><i className="left_anime fas fa-chevron-right fa-3x"></i><button onClick={execute}>Lets Execute</button><i className="right_anime fas fa-chevron-left fa-3x"></i></div>
                        <div className="code" id='code'>
                            <span id='request'>Please click above button</span>
                            <span className="executing" id='executing'>
                                <p id='Fstart'>Prashant@kali: whoami</p>
                                <p id='Sstart'>Prashant@kali: Prashant Kumar</p>
                                <p id='Tstart'>Prashant@kali: sudo su</p>
                                <p id='Frstart'>Password:</p>
                                <p id='Fvstart'>root@kali:~ cd user</p>
                                <p id='Sxstart'>root@kali:~ ls</p>
                                <p id='Svstart'>root@kali:~ cat robot.txt</p>
                                <p id='Estart'>root@kali:~ xyz@gmail.com,P@ss</p>
                                <p id='Nstart'>root@kali:~ Congrats! you aquire the flag</p>
                                <p id='Tnstart'>Welcome to the Info_Gathering mode</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='biometric'>
                    <img src={Owner} alt="Owner_Photo" height={530} width={500} />
                </div>
            </section>
        </>
    )
}