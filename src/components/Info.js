import React from "react";
import avatar from "../images/avatar.png";
import { HiMail } from 'react-icons/hi';

function Info() {
    return (
        <div className="info-div">
            <img className="avatar" src={avatar} alt="avatar" />
            <div className="info-text">
                <h1 className="name">Phan Ba Duy</h1>
                <p className="position">Fullstack Developer</p>
                <p className="website">facebook.com/ozawabinladen97</p>
                <div className="btn-div">
                    <a href="mailto:baduy9780@gmail.com">
                        <button className="email-btn"><HiMail className="mail-icon" />Email</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Info;