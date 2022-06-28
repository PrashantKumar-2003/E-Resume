import React from 'react';
import './components.css';
import resume from './media/Resume Prashant_Kumar.pdf';
import About from "/web project/Resume_website/personal/src/MyComponents/media/About.jpg";
export default function Content() {
    return (
        <>
            <section className='Detailed_Content'>
                <div className='DE_container'>
                    <div className="para_img">
                        <h1 className='Headings'>About</h1>
                        <p>I am a computer engineering alumnus and the two top level skills I have in this field
                            are web development and penetration testing. In both the Skills i had spent 2 years of 
                            time of my life till now through which today i can say that i can be a good web developer.
                            I also have a creative mind as you can see in the section of the home banner in which
                            I combined some basic knowledge of both skills and made an <b>EXECUTE</b> button on desktop and by
                            clicking on that button, an animation start which looks very cool.
                        </p>
                        <img src={About} alt="about" />
                    </div>
                </div>
                <div className="resume_download"> 
                <p>This Personal Website only made to show you my designing sense and some of my basic details.
                    So to get in more deeply dowload my Resume by clicking on given button:
                    <div className="btn">
                        <button className='active'><a href={resume} download={resume.pdf}>Resume</a></button>
                    </div>
                    </p>
                <p>Now lets talk about the ingredients used in the making of this personal website.
                    I used Html, CSS, JavaScript, JSX and React. In the making of this personal 
                    website my extremely focused was on React to start in React.
                    It was my first project in React through which it is also prooved that i am a fast learner</p> 
                </div>
            </section>
        </>
    )
}
