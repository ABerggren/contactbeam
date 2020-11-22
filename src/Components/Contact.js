import React from "react";
import { Link } from "react-router-dom";

export default function Contacts({id, name, email }) {
  return <article className="link-container">
    <Link to={`contacts/${id}`} alt={name} className="btn btn-primary btn-block">{name}</Link>
  </article>;
}