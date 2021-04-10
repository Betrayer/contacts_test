import React, { useEffect, useState } from "react";
import css from "./contacts.module.css";

const ContactList = ({ listIsUpdated }) => {
  const getList = () => {
    const sortedList = JSON.parse(
      localStorage.getItem("contacts") || "[]"
    ).sort((a, b) => a.name.localeCompare(b.name));
    setList(sortedList);
  };

  const [list, setList] = useState([]);
  // const [ranNum, setRanNum] = useState();
  const intViewportWidth = window.innerWidth;

  const removeContact = (tel) => {
    const newList = list.filter((item) => item.tel !== tel);
    localStorage.setItem("contacts", JSON.stringify(newList));
    getList();
  };

  // const rnd = () => {
  //   const min = 0;
  //   const max = 99;
  //   const pureRnd = Math.floor(min + Math.random() * (max - min));
  // };

  useEffect(() => {
    getList();
  }, [listIsUpdated]);

  return (
    <>
      {list.length <= 0 ? (
        <span>No contacts saved yet, try to add some</span>
      ) : (
        <ul className={css.contactsList}>
          {list.map((contact) => (
            <li className={css.contactsListItem} key={contact.tel}>
              <div
                onClick={() => removeContact(contact.tel)}
                className={css.deleteWrapper}
              ></div>
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
              <a className={css.callButton} href={`tel:${contact.tel}`}>
                Call to
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
