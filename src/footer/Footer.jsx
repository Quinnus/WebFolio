import './Footer.css'
import {FaEnvelope, FaGithub, FaLinkedin, FaArrowUp} from "react-icons/fa6";
import {useState} from "react";
import Modal from "./contact/Modal.jsx";


export default function Footer() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const closeModal = () => setModalIsVisible(false);

    return (
        <footer id="social-links">
            <div className="social-icons">
                <div className="contact-item">
                    <a className="icon-button" href="https://github.com/Quinnus" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon"/>
                        <span className="contact-tt">Github</span>
                    </a>
                </div>
                <div className="contact-item">
                    <a className="icon-button" href="https://www.linkedin.com/in/john-quinn-dubie/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon"/>
                        <span className="contact-tt">LinkedIn</span>
                    </a>
                </div>
                <div className="contact-item">
                    <button className="icon-button" onClick={() => setModalIsVisible(v => !v)}>
                        <FaEnvelope className="social-icon"/>
                        <span className="contact-tt">Message</span>
                    </button>
                </div>
                <div className="contact-item">
                    <button className="icon-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <FaArrowUp className="social-icon"/>
                        <span className="contact-tt">Top</span>
                    </button>
                </div>
            </div>

            {modalIsVisible && (
                <Modal handleCancelClick={closeModal} handleMessageOkClick={closeModal} />
            )}
        </footer>
    );
}