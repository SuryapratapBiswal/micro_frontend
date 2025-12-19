import React, { useState } from "react";
import useAppContext from "../../context/useAppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useAppContext();

  const navigate = useNavigate();

  const handleLoginPage = () => {
    if (
      email !== null &&
      email !== "" &&
      password !== null &&
      password !== ""
    ) {
      if (email === "surya@xxx.com" && password === "1234") {
        // now login
        const userData = {
          username: "Surya@190",
          email: "surya@xxx.com",
          name: "surya biswal",
          id: "1",
          address: "cuttack",
        };
        login(userData);
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Please fill all the field");
    }
  };

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <div>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="please enter email"
        />
      </div>
      <div>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="please enter password"
        />
      </div>
      <div>
        <button onClick={handleLoginPage}>Login</button>
      </div>
    </div>
  );
};

export default Login;
