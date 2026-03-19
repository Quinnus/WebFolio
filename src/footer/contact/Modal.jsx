import './Modal.css'
import {useState} from "react";
import ConfirmationMessage from "./ConfirmationMessage.jsx";

export default function Modal(props) {

    const [confirmationVisible, setConfirmationVisible] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");


    const setSendEnabled = userName !== "" && userEmail !== "" && userMessage !== "";


    return (
        <div className="modalOverlay" onClick={props.handleCancelClick}>
            <form form onSubmit={(e) => {
                e.preventDefault();
                setConfirmationVisible(true);
            }}>
                <div className="modalBox" onClick={(e) => e.stopPropagation()}>
                    {confirmationVisible ? (<ConfirmationMessage handleMessageOkClick={props.handleMessageOkClick}/>)
                        :
                        (
                            <>
                                <h3 className="modalMessage">Let's discuss something</h3>
                                <label htmlFor="your-name-input">Name: </label>
                                <input type="text" size="35" id="your-name-input"
                                       onChange={(e) => setUserName(e.target.value)}></input>
                                <label htmlFor="your-email-input">email: </label>
                                <input type="email" size="35" id="your-email-input"
                                       onChange={(e) => setUserEmail(e.target.value)}
                                ></input>
                                <label htmlFor="your-budget-input">Budget: </label>
                                <select id="your-budget-input">
                                    <option value="">--Choose a value (optional)--</option>
                                    <option value="low">upto $/€/£1,000</option>
                                    <option value="med">upto $/€/£3,000</option>
                                    <option value="high">upto $/€/£5,000</option>
                                    <option value="veryhigh">over $/€/£5,000</option>
                                </select>
                                <label htmlFor="your-message-input">Message:</label>
                                <textarea rows="4" cols="35" id="your-message-input"
                                          onChange={(e) => setUserMessage(e.target.value)}/>
                                <div className="actionButtons">
                                    <button type="submit" disabled={!setSendEnabled}>Send
                                    </button>
                                    <button type="button" onClick={props.handleCancelClick}>Cancel</button>
                                </div>
                            </>)
                    }
                </div>
            </form>
        </div>
    )
}