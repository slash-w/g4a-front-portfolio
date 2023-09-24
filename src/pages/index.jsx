import Sidebar from "../componentes/Sidebar";
import React, { useState, useEffect } from "react";
import Card from "../componentes/CardIndex";
import { Link } from "react-router-dom";
import axios from "axios"; // Importa Axios
import FeaturedCarousel from "../componentes/featuredCarousel/featured";
import SearchBar from "../componentes/searchBar/SearchBar";
import SlideCarousel from "../componentes/slideCarousel/SlideCarousel";

export default function Index() {
  const [onSale, setOnSale]=useState([])

  useEffect(() => {
    axios
    .get("http://localhost:8080/api/games?onSale=1")
    .then((res)=>{
      console.log('my axios response >>>', res.data.games)
      setOnSale(res.data.games)
    })
  }, [])

  return (
    <div className="w-[90%] m-auto flex flex-col">
      <SearchBar></SearchBar>
      <FeaturedCarousel/>
      <div className="mt-[3.5rem]">
        <SlideCarousel games={onSale} legend="On Sale"></SlideCarousel>
        <SlideCarousel games={onSale} legend="Popular"></SlideCarousel>
      </div>
    </div>
  );
}