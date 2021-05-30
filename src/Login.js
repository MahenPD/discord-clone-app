import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    // google login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__cont">
        <div className="login__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/73/Discord_Color_Text_Logo_%282015-2021%29.svg"
            alt=""
          />
        </div>
        <br />
        <br />

        <Button onClick={signIn}>Sign In</Button>
      </div>
    </div>
  );
}

export default Login;
