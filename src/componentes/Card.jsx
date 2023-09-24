import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles/card.css";

const Card = (props) => {
  const { img, title, category, price, id, descr } = props;
  const firstWordOfTitle = title.split(" ")[0];
  console.log(props);

  return (
    <Link className="my-card-container rounded-lg overflow-hidden hover:bg-orange-600" to={`/details/${id}`}>
        <div className="my-card-image-container relative ">
          <img src={img} className="object-contain" alt={title} />
          <p className="my-card-description backdrop-blur-sm ">{descr}</p>
        </div>

          <div className="my-card-title text-lg font-semibold transition-all duration-100">{title}</div>
      </Link>
  );
};

export default Card;
