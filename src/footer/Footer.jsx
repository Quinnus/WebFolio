import './Footer.css'
import {FaEnvelope, FaGithub, FaLinkedin, FaSquareWhatsapp} from "react-icons/fa6";
import {useState} from "react";
import Modal from "./contact/Modal.jsx";

export default function Footer() {
    const [modalIsVisible, setModalIsVisible] = useState(false)


    function handleSendMessageClick() {

        setModalIsVisible(!modalIsVisible);
    }

    function handleCancelClick() {
        setModalIsVisible(false);
    }

    function handleMessageOkClick() {
        setModalIsVisible(false);
    }

    function handleGithubClick() {

    }

    function handleLinkedinClick() {

    }

    function handleWhatsappClick() {

    }


    return (
        <footer id="social-links">
            <div className="social-icons">
                <div className="contact-item">
                    <button className="icon-button" onClick={handleGithubClick}>
                        <FaGithub className="social-icon"/>
                        <span className="contact-tt">Github</span>
                    </button>
                </div>

                <div className="contact-item">
                    <button className="icon-button" onClick={handleLinkedinClick}>
                        <FaLinkedin className="social-icon"/>
                        <span className="contact-tt">LinkedIn</span>
                    </button>
                </div>
                <div className="contact-item">
                    <button className="icon-button" onClick={handleWhatsappClick}>
                        <FaSquareWhatsapp className="social-icon"/>
                        <span className="contact-tt">WhatsApp</span>
                    </button>
                </div>

                <div className="contact-item">
                    <button className="icon-button" onClick={handleSendMessageClick}><FaEnvelope
                        className="social-icon"/><span className="contact-tt">Message</span>
                    </button>
                </div>
            </div>
            {modalIsVisible && <Modal
                handleCancelClick={handleCancelClick}
                handleMessageOkClick={handleMessageOkClick}

            />}

        </footer>
    )
}

