import React, { useState } from "react";
import "../CSS/Login.css";

const Login = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className="Loginn">
      <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" defaultValue="Login" className="btn solid" />
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Name" />
              </div>
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-regular fa-graduation-cap" />
                <input type="text" placeholder="College" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Confirm Password" />
              </div>
              <input type="submit" className="btn" defaultValue="Sign up" />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <div className="logoimg">
                <img src="aspire.png" alt="" />
              </div>
              <p>
                Networking with a Twist : Where Students connect and Redefine
                what's possible!
              </p>
              <h3>New here ?</h3>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={handleSignUpClick}
              >
                Sign up
              </button>{" "}
            </div>
          </div>
          <div className="panel right-panel">
            <div className="content">
              <div className="logoimg">
                <img src="aspire.png" alt="" />
              </div>
              <p>
                Networking with a Twist : Where Students connect and Redefine
                what's possible!
              </p>
              <h3>One of us ?</h3>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={handleSignInClick}
              >
                Sign in
              </button>
              <a
                href="learnmore.html"
                style={{ color: "whitesmoke", fontSize: "small" }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
