import React, { useState } from "react";
import css from "./modal.module.css";

const ContactsModal = ({ handleModal }) => {
  const [contact, setContact] = useState({
    name: "",
    tel: "",
  });

  const contactList = JSON.parse(localStorage.getItem("contacts") || "[]");

  const addContact = (e) => {
    e.preventDefault();
    if (contact.name.length > 2 && contact.name.length > 0) {
      contactList.push(contact);
      localStorage.setItem("contacts", JSON.stringify(contactList));
      handleModal();
    }
  };

  return (
    <div className={css.modalWrapper}>
      <button onClick={handleModal} className={css.closingButton}>
        close{" "}
      </button>
      <form id="cotactsForm">
        <label htmlFor="contactName">contactName</label>
        <input
          autoFocus={true}
          minLength={3}
          required={true}
          type="text"
          id="contactName"
          placeholder="Ex.: John Doe"
          onChange={(e) =>
            setContact({
              name: e.target.value,
              tel: contact.tel,
            })
          }
        />
        <label htmlFor="contactTel">contactTel</label>
        <input
          autoFocus={true}
          required={true}
          type="tel"
          id="contactTel"
          placeholder="Ex.: 8800553535"
          onChange={(e) =>
            setContact({
              name: contact.name,
              tel: e.target.value,
            })
          }
        />
        <button type="submit" onClick={addContact}>
          submit
        </button>
      </form>
    </div>
  );
};

export default ContactsModal;
