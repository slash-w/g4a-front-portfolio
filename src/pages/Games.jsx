import { useState, useEffect } from "react";
import axios from "axios";

import SearchBar from "../componentes/searchBar/SearchBar";
import GameCard from "../componentes/gameCard/GameCard";

export default function Games() {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/games?qtty=12&page=${currentPage}`) // Cambia la URL a tu API
      //http://localhost:8080/api/games?qtty=1&page=${currentPage}
      //650852e59e7d19601aadb416
      .then((response) => {
        setGames(response.data.games);
      })
      .catch((error) => console.error("Error:", error));
  }, [currentPage]);


  return (
    <div className="w-[90%] m-auto flex flex-col">
      <SearchBar></SearchBar>
      <div className="grid grid-cols-[repeat(3,1fr)] gap-[1ch] m-auto mt-[3ch]">
        {games.map((game, index)=>(
          <GameCard game={game} key={index}></GameCard>
        ))}
      </div>
    </div>
  );
}