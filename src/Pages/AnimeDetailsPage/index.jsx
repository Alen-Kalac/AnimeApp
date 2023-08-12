import React from "react";

import "./index.scss";
import { useLocation, useParams } from "react-router-dom";

function AnimeDetailPage() {
  const location = useLocation();
  const params = useParams();
  const title = new URLSearchParams(location.search).get("title");
  const description = new URLSearchParams(location.search).get("description");
  const image = new URLSearchParams(location.search).get("image");

  return (
    <div className="anime-detail-container">
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <img src={image} alt={title} />
        <p>{description}</p>
      </div>
    </div>
  );
}


export default AnimeDetailPage;

