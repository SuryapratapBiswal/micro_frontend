import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            Microfrontend Host Application

            <ul className="routes">
                <li>
                    <Link to="/">Food List</Link>
                </li>
                <li>
                    <Link to="/to-do-app">To-Do App</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;


