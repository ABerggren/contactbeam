import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ContactContext } from "../Context/Contacts";
import ReactModal from "react-modal";
import { useHistory } from "react-router-dom"
import CloseBtn  from "../Assets/close.svg";

export default function ContactDetails() {
  const { id } = useParams();
  const { contacts } = React.useContext(ContactContext);
  const contact = contacts.find(item => item.id === parseInt(id));
  const [modal, setShowModal] = React.useState(true);
  const history = useHistory();

    function handleOpenModal () {
    setShowModal(true);
  }
  
  function handleCloseModal () {
    setShowModal(false);
    history.push('/contacts');
  }

    return (
      <div>
        <ReactModal 
          isOpen={modal}
          contentLabel="Contact Details"
          portalClassName="modal"
          overlayClassName="overlay"
          className="modal-content"
        >
          <img src={CloseBtn} onClick={handleCloseModal} alt="close" className="close-button"/>
          <section className="details-page">
            <div className="details-container">
              <h3>{contact.name}</h3>
              <h3>{contact.email}</h3>
            </div>
          </section>
        </ReactModal>
      </div>
    );
}
