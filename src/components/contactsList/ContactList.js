import React, { useEffect, useState } from "react";
import css from "./contacts.module.css";

const ContactList = () => {
  const contactList = JSON.parse(localStorage.getItem("contacts") || "[]");
  const intViewportWidth = window.innerWidth;

  return (
    <>
      {contactList.length <= 0 ? (
        <span>No contacts saved yet, try to add some</span>
      ) : (
        <ul className={css.contactsList}>
          {contactList.map((contact) => (
            <li className={css.contactsListItem} key={contact.tel}>
              <img
                alt="profile_pic"
                // width={100}
                // height={100}
                src={
                  intViewportWidth < 768
                    ? `https://picsum.photos/id/${
                        1000 + contactList.indexOf(contact)
                      }/150`
                    : `https://picsum.photos/id/${
                        1000 + contactList.indexOf(contact)
                      }/200`
                }
              />
              <span>{contact.name}</span>
              <span>{contact.tel}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
