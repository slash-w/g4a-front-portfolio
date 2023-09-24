import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../styles/svgIcons.css"
import "./searchBar.css"
import axios from "axios";


export default function SearchBar(){
    const [displayCat, setDisplayCat] = useState(false)
    const [genres, setGenres] = useState([])
    const [selectedGenres, setSelectedGenres] = useState(new Set());
    //  --- get genres ---
    useEffect(()=>{
        axios
        .get("http://localhost:8080/api/genres/")
        .then((response) => {
            setGenres(response.data.genres)
        })
        .catch((error) => {
            console.log('!!! Error fetching the genres >>>', error)
        })
    }, [])

    //  --- show/hide the genres
    function handleDisplayCat(){
        if(displayCat){
            setDisplayCat(false)
        }
        else{
            setDisplayCat(true)
        }
    }

    function toggleGenre(genre) {
        const newSelectedGenres = new Set(selectedGenres);
          if (newSelectedGenres.has(genre)) {
            newSelectedGenres.delete(genre);
          } else {
            newSelectedGenres.add(genre);
            newSelectedGenres.delete("All");
          }
        setSelectedGenres(newSelectedGenres);
      };


    console.log('GENRES >>>', genres)

    return (
        <div className="searchbar">
            <div className="search-container">
                <input className="search-input" type="text" id="search" placeholder="Search..."></input>
                <button className="search-btn" type="submit"><img src="../../../public/Search.svg"></img></button>
            </div>

            <button className="search-categories" onClick={handleDisplayCat}>
                <p>Categories</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="display-arrow" viewBox="0 0 5 9" style={{ transform: displayCat ? "rotate(0deg)":"rotate(90deg)"}}>
                    <path stroke="currentColor" d="M1 1l3 3.5L1 8" fill="none" fill-rule="evenodd"></path>
                </svg>
            </button>
            <div className="sb-anchor">
                <div className="sb-categories" style={{ display: displayCat ? 'grid' : 'none' }}>
                    {genres.map((genre, index)=>(
                        <button className={selectedGenres.has(genre.id) ? "btn-sb-cat bg-[color:var(--clr-rmrk)] hover:brightness-[130%]":"btn-sb-cat bg-[color:var(--clr-lgtr)] hover:brightness-[130%]"} 
                        key={genre.id} id={`genre_${genre.id}`}
                        onClick={() => toggleGenre(genre.id)}>
                            {genre.description}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}