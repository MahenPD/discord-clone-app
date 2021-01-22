import { Button } from "@material-ui/core";
import { auth, provider } from "./Firebase";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error));
  };

  return (
    <div className="login">
      <div class="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Discord_Color_Text_Logo.svg/768px-Discord_Color_Text_Logo.svg.png"
          alt=""
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
