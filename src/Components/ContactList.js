import React from "react";
import Contact from "./Contact";
import Icon from "../Assets/magnifier.svg"
import { useHistory } from "react-router-dom";
import { ContactContext } from "../Context/Contacts";

export default function ContactList({title, contacts }) {

  const [favofilter, setFavoFilter] = React.useState(false);
  const [search, setSearch] = React.useState('Sök');
  const history = useHistory();
  const { favorites } = React.useContext(ContactContext);
  
  const filterFavorites = () => {
    setFavoFilter(!favofilter);
  }

  const searchContact = () => {
    const keyword = search;
    const filtered = contacts.filter(name => Object.values(name).some(val => typeof val === "string" && val.includes(keyword)));
    if (filtered.length > 0)
    {
      let { id } = filtered[0];
      history.push(`/contacts/${id}`);
    }
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
    <button className="btn btn-link" alt="favoriter"  onClick={filterFavorites}>{favofilter ? 'show all' : 'filter favorites'}</button>
    {!favofilter &&
    <div className="link-container">
      {contacts.map(item => {
        return <Contact key={item.id} {...item} />
    })}
      </div>}
    {favofilter &&
    <div className="link-container">
      {favorites.map(item => {
        return <Contact key={item.id} {...item} />
    })}
    </div>}
  </section>;
}