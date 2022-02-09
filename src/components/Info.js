import React from "react";
import avatar from "../images/avatar.png";

function Info() {
    return (
        <div className="info-div">
            <img className="avatar" src={avatar} alt="avatar" />
            <div className="info-text">
                <h1 className="name">Phan Ba Duy</h1>
                <p className="position">Fullstack Developer</p>
                <p className="website">facebook.com/ozawabinladen</p>
                <div className="btn-div">
                    <button className="email-btn">Email</button>
                </div>
            </div>
        </div>
    )
}

export default Info;