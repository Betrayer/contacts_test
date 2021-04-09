import React from "react";
import css from "./edit.css";

const EditModal = () => {
  return (
    <div className={css.modalWrapper}>
      <span>imma edit modal</span>
      <button>save changes</button>
    </div>
  );
};

export default EditModal;
