import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./featured.css"

export default function FeaturedCarousel() {
    const [games, setGames] = useState([])
    const [gameFeatured, setGameFeatured] = useState(0)


    useEffect(() => {
        axios
            .get("http://localhost:8080/api/games?featured=1")
            .then((response) => {
                setGames(response.data.games);
                if (response.data.games.length > 0) {
                    setGameFeatured(response.data.games[0]);
                }
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    const handleOnClick = (index) => {
        setGameFeatured(games[index])
    }

    console.log("games >>>", games)
    console.log("selected game >>>", gameFeatured)

    return (
        <div className="featured-container w-full flex justify-center pb-3">
            <div className="featured-card">
                <img className="featured-bg-image"
                src={gameFeatured.header_image} alt=""></img>
                    <div className="featured-game-info-container">
                        <img className="featured-png-image"
                            src={gameFeatured.png_image} alt=""></img>
                            <div className="featured-game-info">
                                <p className="featured-description">
                                    {gameFeatured.short_description}
                                </p>
                                <p>
                                    <span className={gameFeatured.discount > 0 ? "price-old" : ""}>${gameFeatured.price}</span>
                                    <span className={gameFeatured.discount > 0 ? "" : "hidden"}>${(gameFeatured.price - gameFeatured.price * gameFeatured.discount / 100).toFixed(2)}</span>
                                </p>
                                <button className="featured-btn-buyNow">BUY NOW</button>
                                <button className="featured-btn-wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="featured-plus-svg" viewBox="0 0 100 100">
                                        <circle className="featured-plus-border" cx="50" cy="50" r="45" />

                                        <line className="featured-plus-sign" x1="20" y1="50" x2="80" y2="50" />

                                        <line className="featured-plus-sign" x1="50" y1="20" x2="50" y2="80" />
                                    </svg>

                                    <span className="featured-btn-txt">ADD TO WISHLIST</span></button>
                            </div>
                    </div>
            </div>
            <div className="featured-games-container">
                    {games.map((game, index) => (
                    <button className="featured-game-side hover:bg-[#fff1]" 
                    onClick={() => handleOnClick(index)}>
                        <img className="ft-slide-img" src={game.header_image}></img>
                        <p className="ft-slide-name">{game.name}</p>
                    </button>
                ))}

            </div>

        </div>
    );
}