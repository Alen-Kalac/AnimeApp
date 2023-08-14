import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { appContext } from "../../Context"; // Update the path accordingly
import { Link } from "react-router-dom";
function FavoritesPage() {
  const { favouriteAnime, setFavoriteAnime } = useContext(appContext);

  return (
    <div className="Favorites-Page">
      <h1>Your favorites</h1>
      {favouriteAnime.length === 0 ? (
        <p>No favorite animes saved yet.</p>
      ) : (
        <div className="cards">
          {favouriteAnime.map((anime, index) => (
            <Link
              key={index}
              to={{
                pathname: `/anime/${anime.title}`,
                search: `?title=${anime.title}&description=${anime.description}&image=${anime.image}`,
              }}
              className="card-link"
            >
              <div className="card">
                <img src={anime.image} alt={anime.title} />
                <div className="desc">
                  <p className="title">{anime.title}</p>
                  <p className="click">Click to see more</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
