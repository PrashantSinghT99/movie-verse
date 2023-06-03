import React, { useEffect } from "react";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MovieList from '../MovieList/MovieList'
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import { MOVIE_API } from '../Constants/constant'

const Home = () => {
    const [moviesArray, setMoviesArray] = useState([]);
    useEffect(() => {
        fetch(MOVIE_API)
            .then((res) => res.json())
            .then((data) => setMoviesArray(data.results));
    }, []);
    // console.log(moviesArray);     
    return (
        <>
            <div className="slide__show">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    interval={2000}

                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        moviesArray.map(movie => (
                            <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} key={movie.id} >
                                <div className="slideShowImage" >
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="slideShowImage__overlay">
                                    <div className="slideShowImage__title">{movie ? movie.original_title : ""}</div>
                                    <div className="slideShowImage__info">
                                        {movie ? movie.release_date : ""}
                                        <span className="slideShowImage__rating">
                                            {movie ? movie.vote_average : ""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="slideShowImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
        </>
    )
};

export default Home;
