export default function Register() {
    return (
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Lamasocial</h3>
            <span className="loginDesc">
              Connect with friends and the world around you on Lamasocial.
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input placeholder="Nombre" className="loginInput" />
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Contraseña" className="loginInput" />
              <input placeholder="Repite la contraseña" className="loginInput" />
              <button className="loginButton">Registrar</button>
              <button className="loginRegisterButton">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }