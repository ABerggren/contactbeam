import React from "react";
import { useParams } from "react-router-dom";
import { ContactContext } from "../Context/Contacts";
import ReactModal from "react-modal";
import { useHistory } from "react-router-dom"
import CloseBtn from "../Assets/close.svg";
import Starred from "../Assets/star_border.svg";

export default function ContactDetails() {
  const { id, starred } = useParams();
  const { contacts } = React.useContext(ContactContext);
  const contact = contacts.find(item => item.id === parseInt(id));
  const [modal, setShowModal] = React.useState(true);
  const history = useHistory();
  
  function handleCloseModal () {
    setShowModal(false);
    history.push('/contacts');
  }

  if (typeof (window) !== 'undefined') {
    ReactModal.setAppElement('body')
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
              <h3>{contact.name}{starred && <img src={Starred} alt="starred" className="starred-star" />}</h3>
              <h3>{contact.email}</h3>
            </div>
          </section>
        </ReactModal>
      </div>
    );
}
