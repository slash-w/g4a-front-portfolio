import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./gameCard.css";

const GameCard = (props) => {
  let { game } = props;
  const [show, setShow] = useState(false);
  const videoRef = useRef(null);

  // Function to handle mouse hover
  function handleMouseEnter() {
    setShow(true);
    videoRef.current.play();
  }

  // Function to handle mouse leave
  function handleMouseLeave() {
    setShow(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }

  console.log('<> game <>', game)

  return (
    <div
      className={`game-card ${show ? "hovered" : ""}`}
      to={`/details/${game._id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link className="gc-thumbnail" to={`/details/${game._id}`}>
        <img className="gc-img" src={game.header_image}></img>
        <div className="gc-footer">
          <div className="flex gap-1">
            {Object.keys(game.platforms).map((key, index) => (
              <img
                className={game.platforms[key] ? "gc-platform" : "gc-platform hidden"}
                src={`../../../public/platforms/${key}.svg`}></img>
            ))}
          </div>
          <div className="gc-price">
            <span className={game.discount > 0 ? "discounted" : "hidden"}>-{game.discount}%</span>
            <span className={game.discount > 0 ? "price-old" : "hidden"}>${game.price}</span>
            <span className={game.discount > 0 ? "text-lime-500" : ""}>${(game.price - game.price * game.discount / 100).toFixed(2)}</span>
          </div>
        </div>
      </Link>
      <div className={show ? "gc-popup" : "gc-popup hidden"}>
        <button className="absolute">cart</button>
        <button className="absolute">wishlist</button>
        <video
          className="gc-video"
          ref={videoRef}
          loop={true}
          autoPlay={show}
          muted={true}
        >
          <source src={game.movies[0].webm.max} type="video/webm" />
        </video>
        <div className="gc-more-info">
          <div className="gc-popup-header">
            <img className="gc-miniature" src={game.header_image}></img>
            <span className={game.discount > 0 ? "discounted" : "hidden"}>-{game.discount}%</span>
            <div className="gc-popup-prices">
              <span className={game.discount > 0 ? "price-old" : "hidden"}>${game.price}</span>
              <span className={game.discount > 0 ? "text-lime-500" : ""}>${(game.price - game.price * game.discount / 100).toFixed(2)}</span>
            </div>
          </div>

          <div className="gc-popup-body px-[1ch]">
            <p className="gc-name">{game.name}</p>
            <div className="gc-genres">
              {game.genres.map((genre, index) => (
                <p className="gc-genre">{genre.description}</p>
              ))}
            </div>
            <p className="gc-vote-text">
              <span className="gc-user-rating">User's rating {(game.rating_pos / (game.rating_pos + game.rating_neg) * 100).toFixed(0)}%</span>
              <span> | </span>
              <span className="gc-votes">{game.rating_neg + game.rating_pos} votes</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
