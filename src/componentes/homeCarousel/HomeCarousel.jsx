import React, { useState, useEffect } from "react";
import Link from "react-dom"
import axios from "axios";

export default function homeCarousel(){
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

      const handleOnClick = (game)=>{
        setGameFeatured(game)
      }

    return (
        <div>

        </div>
    );
}