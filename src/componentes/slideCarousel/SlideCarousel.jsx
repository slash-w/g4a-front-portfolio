import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./slideCarousel.css"

export default function SlideCarousel(props){
    const games = props.games
    
    const [page, setPage] = useState(0)

    const residue = games.length % 4
    const numPages = Math.ceil(games.length / 4)
    let transforms = []

    for(let i = 0; i < numPages; i++){
        if(i == numPages - 1 && numPages > 1){
            transforms.push(`calc(-${(400 * (i - 1)) + (100 * residue)}% - ${(4*(i-1)) + (residue)}ch)`)
            break
        }
        transforms.push(`calc(-${400*i}% - ${4*i}ch)`)
    }
    console.log("transforms >>>",transforms)
    console.log(transforms[page])
    //Handlers
    function handleNextPage(){
        if(page == numPages - 1){
            setPage(0)
        }
        else{
            setPage(page+1)
        }
    }
    function handlePrevPage(){
        if(page == 0){
            setPage(numPages-1)
        }
        else{
            setPage(page-1)
        }
    }

    //Component
    return(
        <div className="slide-carousel">
            <div className="slide-header">
                <p className="slider-legend">{props.legend}</p>
                <div className="slider-btns">
                    <button className="slider-btn" onClick={handlePrevPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="slider-btn-icon slider-prev" viewBox="0 0 5 9">
                            <path stroke="currentColor" d="M1 1l3 3.5L1 8" fill="none" fill-rule="evenodd"></path>
                        </svg>
                    </button>

                    <button className="slider-btn" onClick={handleNextPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="slider-btn-icon slider-next" viewBox="0 0 5 9">
                            <path stroke="currentColor" d="M1 1l3 3.5L1 8" fill="none" fill-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="slide-container">
                {games.map((game, index) => (
                    <Link to={`/details/${game._id}`} key={`slider-card-${index}`} className="slide-card hover:bg-[#fff3]" style={{transform:`translateX(${transforms[page]})`}}>
                        <div>
                            <img className="slide-img" src={game.header_image}></img>
                            <p className="slide-name">{game.name}</p>
                        </div>
                        <div className="slide-prices">
                            <span className="discounted">-{game.discount}%</span>
                            <span className="price-old">${game.price}</span>
                            <span className={game.discount > 0 ? "text-lime-500" : ""}>${(game.price - game.price * game.discount / 100).toFixed(2)}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}