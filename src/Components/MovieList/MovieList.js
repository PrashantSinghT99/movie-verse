import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Card from "../Card/Card";
import "../Styles/MovieList.css"
const MovieList = () => {
  const [pageMovieList, setPageMovieList] = useState([]);
  const { page } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${page ? page : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setPageMovieList(data.results));
  };

  return (
    <div className="movie__list">
      <h2 className="page__title">{(page ? page : "POPULAR").toUpperCase()}</h2>
      <div className="page__cards">
        {
          pageMovieList.map(movie => (
            <Card movie={movie} key={movie.id} />
          ))
        }
      </div>
    </div>
  )
}

export default MovieList;
