import React from "react";
import { ContactContext } from "../Context/Contacts";
import ContactList from "../Components/ContactList";

export default function Contacts() {
  const {contacts} = React.useContext(ContactContext);

  return <ContactList title="Contacts" contacts={contacts} />
}