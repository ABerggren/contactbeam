import React from "react";
import Contact from "./Contact";
import Icon from "../Assets/magnifier.svg"
import { Link, useHistory } from "react-router-dom";

export default function ContactList({title, contacts}) {

  const [search, setSearch] = React.useState('Sök');
  const history = useHistory();

  const searchContact = () => {
    const keyword = search;
    const filtered = contacts.filter(name => Object.values(name).some(val => typeof val === "string" && val.includes(keyword)));
    console.log(filtered);
    let { id } = filtered[0];
    history.push(`/contacts/${id}`);
  };

  return <section className="section">
    <h2 className="section-title">{title}</h2>
      {/* single input */}
      <div className="form-control">
        <label htmlFor="search"></label>
      <input type="search" id="search" value={search} onChange={e => setSearch(e.target.value)}></input>
      <img src={Icon} alt="search" onClick={searchContact} width="32px" className="form-icon"/>
    </div>
    {/* end of single input */}
    <Link to="#" alt="favoriter" className="btn btn-link">filter favorites</Link>
      <div className="link-container">
      {contacts.map(item => {
        return <Contact key={item.id} {...item} />
    })}
    </div>
  </section>;
}