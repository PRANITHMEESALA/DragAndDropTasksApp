import React, { useState } from "react";
import "./header.css";
const Header = () => {
  const [login, setLoginHandler] = useState("");
  const LoginHandler = (e) => {
    setLoginHandler(e.target.value);
  };
  return (
    <div>
      <div className="header">
        <div>
          <span>Logo</span>
        </div>
        <div>
          <span>Pranith</span>
          <select name="" id="" value={login} onChange={(e) => LoginHandler(e)}>
            <option value="Login"> Login</option>
            <option value="Logout"> Logout</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
