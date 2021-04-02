import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import "./Entry.page.style.css";
import { LoginForm } from "../../components/login/Login.comp.js";
import { PasswordReset } from "../../components/password-reset/PasswordReset.js";
export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setfrmLoad] = useState("Login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Fill up all the form!");
    }
    // to do call api to submit the form
    console.log(email, password);
  };
  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Fill up the email");
    }
    // to do call api to submit the form
    console.log(email);
  };
  const formSwitcher = (frmLoad) => {
    setfrmLoad(frmLoad);
  };
  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {frmLoad === "Login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
          />
        )}
        {frmLoad === "reset" && (
          <PasswordReset
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            email={email}
            formSwitcher={formSwitcher}
          />
        )}
      </Jumbotron>
    </div>
  );
};
