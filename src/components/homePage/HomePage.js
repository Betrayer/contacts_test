import React, { useState, useEffect } from "react";
import ContactList from "../contactsList/ContactList";
import ContactsModal from "../contactsList/contactsModal/ContactsModal";
import css from "./home.module.css";

const HomePage = () => {
  const [modalToggle, setModalToggle] = useState(false);
  useEffect(() => {
    setModalToggle(false);
  }, []);

  const handleModal = () => {
    setModalToggle(!modalToggle);
  };
  return (
    <>
      <header className={css.header}>
        <span>Greetings, {localStorage.getItem("userName")}</span>
        <button>logout</button>
      </header>
      <section className={css.homeSection}>
        <div className={css.buttonWrapper}>
        <button onClick={handleModal}>new contact</button>
        <button>download CSV</button>
        </div>
        <ContactList />
        {modalToggle ? <ContactsModal handleModal={handleModal} /> : <></>}
      </section>
    </>
  );
};

export default HomePage;
