import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import css from "./login.module.css";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName !== "" && userName.length > 3) {
      localStorage.setItem("userName", userName);
      history.push("/home");
    }
  };

  const handleChange = (e) => {
    const handler = setTimeout(() => {
      setUserName(e.target.value);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  };

  return (
    <section className={css.authSection}>
      <form id="authForm" className={css.authSectionForm}>
        <label htmlFor="name">Authorization</label>
        <input
          autoFocus={true}
          minLength={3}
          required={true}
          type="text"
          id="name"
          placeholder="What's your name?"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Log In
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
