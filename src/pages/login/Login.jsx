import React from "react";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">schadenfreude</h3>
          <span className="loginDesc">Incio de session</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" type="text" className="loginInput" />
            <input
              placeholder="Contraseña"
              type="text"
              className="loginInput"
            />
            <button className="loginButton">login</button>
            <span className="loginForgot">Forgot Password?</span>

            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
