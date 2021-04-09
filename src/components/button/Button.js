import React from "react";
import css from "./button.module.css";

const Button = ({ logout }) => {
  return (
    <>
      <button className={css.multibutton} onClick={logout}>
        imma button
      </button>
    </>
  );
};

export default Button;
