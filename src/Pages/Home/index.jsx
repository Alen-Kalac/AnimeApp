import { useState, useEffect } from "react";
import axios from "axios";
import "./index.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomePage() {
  const [trending, setTrending] = useState([]);
  const [categories, setCategories] = useState([]);
  const [romance, setRomance] = useState([]);
  const [horror, setHorror] = useState([]);
  const [action, setAction] = useState([]);
  const [trendingManga, setTrendingManga] = useState([]);

  console.log(trending);

  const getTrending = () => {
    fetch("https://kitsu.io/api/edge/trending/anime")
      .then((res) => res.json())
      .then((json) => {
        setTrending(json.data);
      });
  };

  const getCategories = () => {
    fetch("https://kitsu.io/api/edge/anime?filter[categories]=adventure")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json.data);
      });
  };

  const getTrendingManga = () => {
    fetch("https://kitsu.io/api/edge/manga")
      .then((res) => res.json())
      .then((json) => {
        setTrendingManga(json.data);
      });
  };

  const getAction = () => {
    fetch("https://kitsu.io/api/edge/manga?filter[categories]=action")
      .then((res) => res.json())
      .then((json) => {
        setAction(json.data);
      });
  };

  const getRomance = () => {
    fetch("https://kitsu.io/api/edge/anime?filter[categories]=romance")
      .then((res) => res.json())
      .then((json) => {
        setRomance(json.data);
      });
  };

  const getHorror = () => {
    fetch("https://kitsu.io/api/edge/anime?filter[categories]=horror")
      .then((res) => res.json())
      .then((json) => {
        setHorror(json.data);
      });
  };

  useEffect(() => {
    getTrending();
    getCategories();
    getRomance();
    getHorror();
    getAction();
    getTrendingManga();
  }, []);

  return (
    <div className="home-page">
      <Carousel
        className="shadow-xl"
        infiniteLoop="true"
        emulateTouch="true"
        autoPlay="true"
        interval={5000}
        showThumbs={false}
        showStatus={false}
      >
        {trending.map((item) => (
          <div key={item.id} className="trending-item">
            <img
              src={item.attributes.coverImage.large}
              alt={item.attributes.canonicalTitle}
            />
            <div className="description">
              <h2 className="title">{item.attributes.canonicalTitle}</h2>
              <p className="ep-count">
                Episodes: {item.attributes.episodeCount}
              </p>
              <p className="rating">Rating: {item.attributes.averageRating}</p>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="home-content">
        <p className="section-title">Action:</p>
        <div className="anime-list">
          {action.map((item) => (
            <div key={item.id} className="item">
              <img
                src={item.attributes.posterImage.large}
                alt={item.attributes.canonicalTitle}
              />
              <div className="description">
                <p className="title">{item.attributes.canonicalTitle}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="section-title">Adventure:</p>
        <div className="anime-list">
          {categories.map((item) => (
            <div key={item.id} className="item">
              <img
                src={item.attributes.posterImage.large}
                alt={item.attributes.canonicalTitle}
              />
              <div className="description">
                <p className="title">{item.attributes.canonicalTitle}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="section-title">Romance:</p>
        <div className="anime-list">
          {romance.map((item) => (
            <div key={item.id} className="item">
              <img
                src={item.attributes.posterImage.large}
                alt={item.attributes.canonicalTitle}
              />
              <div className="description">
                <p className="title">{item.attributes.canonicalTitle}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="section-title">Horror:</p>
        <div className="anime-list">
          {horror.map((item) => (
            <div key={item.id} className="item">
              <img
                src={item.attributes.posterImage.large}
                alt={item.attributes.canonicalTitle}
              />
              <div className="description">
                <p className="title">{item.attributes.canonicalTitle}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="section-title">Trending Manga:</p>
        <div className="anime-list">
          {trendingManga.map((item) => (
            <div key={item.id} className="item">
              <img
                src={item.attributes.posterImage.large}
                alt={item.attributes.canonicalTitle}
              />
              <div className="description">
                <p className="title">{item.attributes.canonicalTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
