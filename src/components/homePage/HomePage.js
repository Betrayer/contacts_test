import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ContactList from "../contactsList/ContactList";
import ContactsModal from "../contactsList/addContactModal/AddContactsModal";
// import Button from "../button/Button";
import css from "./home.module.css";

const HomePage = () => {
  const history = useHistory();
  const [addModalToggle, setAddModalToggle] = useState(false);
  // const [editModalToggle, setEditModalToggle] = useState(false);
  const [listIsUpdated, setListIsUpdated] = useState(false);

  useEffect(() => {
    setAddModalToggle(false);
    // setEditModalToggle(false);
  }, []);

  const handleAddModal = () => {
    setAddModalToggle(!addModalToggle);
    setListIsUpdated(!listIsUpdated);
  };

  // const handleEditModal = () => {
  //   setEditModalToggle(!editModalToggle);
  // };

  const logout = () => {
    localStorage.removeItem("userName");
    history.push("/");
  };

  const data = localStorage.getItem("contacts");
  const dataToCSV = (JSONData, ReportTitle, ShowLabel) => {
    let arrData =
      typeof JSONData !== "object" ? JSON.parse(JSONData) : JSONData;
    let CSV = "";
    if (ShowLabel) {
      let row = "";
      for (let index in arrData[0]) {
        row += index + ",";
      }
      row = row.slice(0, -1);
      CSV += row + "\r\n";
    }
    for (let i = 0; i < arrData.length; i++) {
      let row = "";
      for (let index in arrData[i]) {
        row += '"' + arrData[i][index] + '",';
      }
      row.slice(0, row.length - 1);
      CSV += row + "\r\n";
    }
    if (CSV === "") {
      alert("Invalid data");
      return;
    }
    let fileName = "I finally made it_";
    fileName += ReportTitle.replace(/ /g, "_");
    let uri = "data:text/csv;charset=utf-8," + escape(CSV);
    let link = document.createElement("a");
    link.href = uri;
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <header className={css.header}>
        <span>Greetings, {localStorage.getItem("userName")}</span>
        {/* <Button logout={logout} /> */}
        <button onClick={logout}>logout</button>
      </header>
      <section className={css.homeSection}>
        <div className={css.buttonWrapper}>
          <button onClick={handleAddModal}>New contact</button>
          <button onClick={() => dataToCSV(data, "contacts", true)}>
            download CSV
          </button>
        </div>
        <ContactList listIsUpdated={listIsUpdated} />
        {addModalToggle ? (
          <ContactsModal handleAddModal={handleAddModal} />
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default HomePage;
