import './Modal.css'
import {useState} from "react";
import ConfirmationMessage from "./ConfirmationMessage.jsx";
import emailjs from '@emailjs/browser';

export default function Modal({ handleCancelClick, handleMessageOkClick }) {
    const [confirmationVisible, setConfirmationVisible] = useState(false);
    const [sendError, setSendError] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const canSend = userName !== "" && userEmail !== "" && userMessage !== "";

    async function handleClickSend(e) {
        e.preventDefault();
        if (!canSend) return;
        setSendError(false);
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                { userName, userEmail, userMessage },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            setConfirmationVisible(true);
        } catch (error) {
            console.error('EmailJS error:', error);
            setSendError(true);
        }
    }

    return (
        <div className="modalOverlay" onClick={handleCancelClick}>
            <form onSubmit={handleClickSend}>
                <div className="modalBox" onClick={(e) => e.stopPropagation()}>
                    {confirmationVisible
                        ? <ConfirmationMessage handleMessageOkClick={handleMessageOkClick}/>
                        : (
                            <>
                                <h3 className="modalMessage">Let's discuss something</h3>
                                <label htmlFor="your-name-input">Name: </label>
                                <input type="text" size="35" id="your-name-input"
                                       onChange={(e) => setUserName(e.target.value)}/>
                                <label htmlFor="your-email-input">Email: </label>
                                <input type="email" size="35" id="your-email-input"
                                       onChange={(e) => setUserEmail(e.target.value)}/>
                                <label htmlFor="your-message-input">Message:</label>
                                <textarea rows="4" cols="35" id="your-message-input"
                                          onChange={(e) => setUserMessage(e.target.value)}/>
                                {sendError && (
                                    <p className="send-error">Something went wrong — please try again.</p>
                                )}
                                <div className="actionButtons">
                                    <button type="submit" disabled={!canSend}>Send</button>
                                    <button type="button" onClick={handleCancelClick}>Cancel</button>
                                </div>
                            </>
                        )
                    }
                </div>
            </form>
        </div>
    );
}