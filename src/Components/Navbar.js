import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const [textColor, settextColor] = useState("dark");
    const [modeText, setmodeText] = useState("Enable Dark Mode");

    const toggleTextColor = () => {
        if (props.mode === "light") {
            settextColor("light");
            setmodeText("Enable Light Mode");
        }
        else {
            setmodeText("Enable Dark Mode");
            settextColor("dark");
        }
    }
    const handleAboutUs = () => {
        document.title = "TextUtils - About Us";
    }

    const handleHome = () => {
        document.title = "TextUtils - Home";
    }

    const toggleonClick = () => {
        props.toggleMode();
        toggleTextColor();
    }
    return (
        <div className="navbar-container shadow">
            <nav className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode}`}>
                <Link className="navbar-brand ms-5 fw-bolder fs-3" onClick={handleHome} to="">TextUtils</Link>
                <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler01" aria-controls="navbarToggler01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarToggler01">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active mx-3">
                            <Link className="nav-link" onClick={handleHome} to="">Home </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" onClick={handleAboutUs} to="/About">About Us</Link>
                        </li>
                        <li className="nav-item form-check form-switch mt-2 mx-3 me-md-5">
                            <input className={`form-check-input bg-${props.mode}`} onClick={toggleonClick} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${textColor}`} htmlFor="flexSwitchCheckDefault">{modeText}</label>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
