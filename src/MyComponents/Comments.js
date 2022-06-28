import React from 'react';
import "./components.css";

export default function comments() {
    return (
        <>
            <div className="comments">
                <div className="form">
                    <h1>Comment down to suggest me a better design</h1>
                    <form action="" method="get">
                        <label htmlFor="name">Name :</label>
                        <input type="text" name="name" id="name" className='ipt_tag' placeholder='Type Your Name' required />
                        <label htmlFor="email">Email Id :</label>
                        <input type="email" name="email" id="email" className='ipt_tag' placeholder='For Example: XYZ957@example.com' required />
                        <label htmlFor="number">Mobile Number :</label>
                        <input type="tel" name="number" id="number" className='ipt_tag' placeholder='Mobile Number' />
                        <label htmlFor='message'>Suggestions:</label>
                        <textarea placeholder='SUGGESTIONS FOR ME' id='message' name='message' rows={10} cols={10}></textarea>
                        <div className="btn">
                            <button type="submit" className='active'>Submit</button>
                            <button type="reset" className='deactive'>Reset</button>
                        </div>
                    </form>
                </div>
                <div className="contacts">
                    
                </div>
            </div>
        </>
    )
}