import './Socialbar.css'
import {FaEnvelope, FaGithub, FaLinkedin, FaSquareWhatsapp} from "react-icons/fa6";
import {FaCircleUp} from "react-icons/fa6";


export default function Socialbar() {


    return (
        <nav id="social-links">
            <div className="social-icons">


                <div className="contact-item">
                    <FaGithub className="social-icon"/><span
                    className="contact-tt">Github</span>
                </div>
                <div className="contact-item">
                    <FaLinkedin className="social-icon"/><span
                    className="contact-tt">LinkedIn</span>

                </div>
                <div className="contact-item">
                    <FaSquareWhatsapp className="social-icon"/><span
                    className="contact-tt">WhatsApp</span>
                </div>

                <div className="contact-item">
                    <FaEnvelope className="social-icon"/><span className="contact-tt">Send a message</span>
                </div>
            </div>


        </nav>
    )
}