import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import Modal2 from "./problem2/Modal2";

const BASE_URL = "https://contact.mediusware.com/api";

const Problem2 = () => {
  const [contactsList, setContactsList] = useState([]);
  const [modalDataTarget, setmodalDataTarget] = useState("#all-contacts");

  // Modal
  const [modalShow, setModalShow] = useState(false);

  function handleToggleModal() {
    setModalShow(modal => !modal);
  }

  function handleClick(e) {
    setmodalDataTarget(e.target.dataset.target);
    setModalShow(modal => !modal);
  }

  useEffect(function () {
    const fetchContacts = async () => {
      const response = await fetch(`${BASE_URL}/contacts/?format=json`);
      const data = await response.json();
      console.log(data);
    };
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            onClick={handleClick}
            type="button"
            data-toggle="modal"
            data-target="all"
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            onClick={handleClick}
            type="button"
            data-toggle="modal"
            data-target="us"
          >
            US Contacts
          </button>
        </div>
        <Modal2 modalDataTarget={modalDataTarget} modalShow={modalShow} handleToggleModal={handleToggleModal} />
      </div>
    </div>
  );
};

export default Problem2;
