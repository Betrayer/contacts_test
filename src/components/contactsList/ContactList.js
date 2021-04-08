import React, { useEffect, useState } from "react";
import css from "./contacts.module.css";

const ContactList = () => {
  const contactList = JSON.parse(localStorage.getItem("contacts") || "[]");
  const [list, setList] = useState(
    contactList.sort((a, b) => a.name.localeCompare(b.name))
  );

  useEffect(() => {
    // localStorage.setItem("contacts", JSON.stringify(list));
  }, [list]);
  const intViewportWidth = window.innerWidth;

  const removeContact = (tel) => {
    const newList = list.filter((item) => item.tel !== tel);
    setList(newList);
  };

  return (
    <>
      {list.length <= 0 ? (
        <span>No contacts saved yet, try to add some</span>
      ) : (
        <ul className={css.contactsList}>
          {list.map((contact) => (
            <li
              className={css.contactsListItem}
              key={contact.tel}
              onClick={() => removeContact(contact.tel)}
            >
              <button>Edit</button>
              <img
                alt="profile_pic"
                // width={100}
                // height={100}
                src={
                  intViewportWidth < 768
                    ? `https://picsum.photos/id/${
                        1000 + list.indexOf(contact)
                      }/150`
                    : `https://picsum.photos/id/${
                        1000 + list.indexOf(contact)
                      }/200`
                }
              />
              <span>{contact.name}</span>
              <a href={`tel:${contact.tel}`}>Call to</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
