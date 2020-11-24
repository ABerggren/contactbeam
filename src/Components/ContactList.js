import React from "react";
import Contact from "./Contact";
import Icon from "../Assets/magnifier.svg"
import { useHistory } from "react-router-dom";

function getFavoritesFromLocalStorage() {
  return localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];
}
export default function ContactList({ title, contacts }) {
  
  const [favorites, setFavorites] = React.useState(getFavoritesFromLocalStorage());
  const [favofilter, setFavoFilter] = React.useState(false);
  const [search, setSearch] = React.useState('Sök');
  const history = useHistory();

  const filterFavorites = () => {
    setFavoFilter(!favofilter);
  }

  const searchContact = () => {
    const keyword = search;
    const filtered = contacts.filter(name => Object.values(name).some(val => typeof val === "string" && val.includes(keyword)));
    if (filtered.length > 0) {
      const { id } = filtered[0];
      localStorage.setItem('favorites', JSON.stringify(filtered));
      history.push(`/contacts/${id}`);
    }
  };
  
  function keyPress(e){
      if(e.keyCode === 13){
        searchContact();
      }
   }
 
  React.useEffect(() => {
    // local storage
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return <section className="section">
    <h2 className="section-title">{title}</h2>
      {/* single input */}
      <div className="form-control">
        <label htmlFor="search"></label>
      <input type="search" onKeyDown={keyPress} id="search" value={search} onChange={e => setSearch(e.target.value)}></input>
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
    {favofilter && favorites &&
    <div className="link-container">
      {favorites.map(item => {
        return <Contact key={item.id} {...item } />
    })}
    </div>}
  </section>;
}
