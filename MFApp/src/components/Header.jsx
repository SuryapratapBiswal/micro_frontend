import React from "react";
import { Link } from "react-router-dom";
import useAppContext from "../context/useAppContext";
import NovuInbox from "./NovuInbox.jsx";

const Header = () => {
  const { user, logout } = useAppContext();

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
        {!user ? (
          <li>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <>
            <li>
              <span>
                {" "}
                <img
                  src="https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2205.jpg?semt=ais_hybrid&w=740&q=80"
                  height={40}
                  width={40}
                />
                {user?.username}
              </span>
            </li>
            <li onClick={logout}>Logout</li>
            <li>
              <NovuInbox />
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
