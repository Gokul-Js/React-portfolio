import {useRef, useState, useContext }from 'react'
import "./contact.css"
import Call from "../../img/call.png"
import Mail from "../../img/mail.png"
import Loc from "../../img/loc.png"
import emailjs from '@emailjs/browser'
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef()
    const[done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs
          .sendForm(
            "service_von5wcd", 
            "template_mjcp4la", 
            formRef.current, 
            "1OKoQLSwzHvJM7Onl"
          )
          .then(
            (result) => {
              console.log(result.text);
              setDone(true)
            }, 
            (error) => {
             console.log(error.text);
            });
    }
  return (
    <div className="c">
         <div className="c-bg"></div>
         <div className="c-wrapper">
             <div className="c-left">
                <h1 className="c-title">Let's discuss your Project</h1>
                <div className="c-info">
                   <div className="c-info-item">
                     <img 
                       src={Call}  
                       alt=""
                       className="c-icon"
                    />
                    +91 9682118231
                   </div>
                   <div className="c-info-item">
                     <img 
                       src={Mail}  
                       alt=""
                       className="c-icon"
                    />
                    riteshbenjwal7@gmail.com
                   </div>
                   <div className="c-info-item">
                     <img 
                       src={Loc}  
                       alt=""
                       className="c-icon"
                    />
                    Chandigarh, India
                   </div>
                </div>
             </div>
             <div className="c-right">
                <p className="c-desc">
                <b>What's your story?</b> Get in touch. Always available for
                   freelancing if the right project comes along. me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                    <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="Message"/>
                    <button>Submit</button>
                    {done && "ThankYou..."}
                </form>
             </div>
         </div>
    </div>
  )
}

export default Contact