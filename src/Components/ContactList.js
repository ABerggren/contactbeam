import React from "react";
import Contact from "./Contact";
import Icon from "../Assets/magnifier.svg"

export default function ContactList({title, contacts}) {

  const [search, setSearch] = React.useState('Sök');

  return <section className="section">
    <h2 className="section-title">{title}</h2>
      {/* single input */}
      <div className="form-control">
        <label htmlFor="search"></label>
      <input type="search" id="search" value={search} onChange={e => setSearch(e.target.value)}></input>
    <img src={Icon} alt="search" width="32px" className="form-icon"/>
    </div>
      {/* end of single input */}
      <div className="link-container">
      {contacts.map(item => {
        return <Contact key={item.id} {...item} />
    })}
    </div>
  </section>;
}