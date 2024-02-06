import React from "react";
import { Link } from "react-router-dom";
import '../Sass/card.scss';

function Card({ id, cover }) {
  return (
    <div className="gallery_card">
      <Link to={`/projects/${id}`}>
        <img src={cover} alt={`Project ${id}`} />
      </Link>
    </div>
  );
}

export default Card;
