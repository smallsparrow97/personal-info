import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer-wrap">
            <FaTwitterSquare className="footer--btn" />
            <a href="https://www.facebook.com/zuidev" rel="noreferrer" target='_blank'>
                <FaFacebookSquare className="footer--btn" />
            </a>
            <FaInstagramSquare className="footer--btn" />
            <FaLinkedin className="footer--btn" />
            <a href="https://github.com/zuidev" rel="noreferrer" target='_blank'>
                <FaGithubSquare className="footer--btn" />
            </a>
        </div>
    )
}