import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function AnimePage() {
  const [animeList, setAnimeList] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const threshold = 200; // Threshold to trigger fetching more anime (in pixels)

  useEffect(() => {
    const fetchAnimeByGenre = async () => {
      try {
        const response = await axios.get(
          'https://kitsu.io/api/edge/anime',
          {
            params: {
              'filter[genres]': 'action',
              'sort': 'popularityRank',
              'page[offset]': offset,
            },
          }
        );

        setAnimeList((prevAnimeList) => [...prevAnimeList, ...response.data.data]);
      } catch (error) {
        console.error('Error fetching anime:', error);
      }
    };

    fetchAnimeByGenre();
  }, [offset]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - threshold
    ) {
      setOffset((prevOffset) => prevOffset + limit);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='anime-full-page'>
        <div className='upper'>
          <div className='list'>
            <select name='Choose a category'>
              <option value=''>Choose a category</option>
              <option value='Adventure'>Adventure</option>
              <option value='Action'>Action</option>
              <option value='Fantasy'>Fantasy</option>
              <option value='Crime'>Crime</option>
              <option value='Drama'>Drama</option>
              <option value='Romance'>Romance</option>
              <option value='Supernatural'>Supernatural</option>
              <option value='Magic'>Magic</option>
              <option value='Horror'>Horror</option>
            </select>
          </div>
          <div className='filter'>
            <label>
              <AiOutlineSearch />
              <input type='text' className='search' placeholder='Search' />
            </label>
          </div>
        </div>

        <div className='cards'>
        {animeList.map((anime) => (
            <Link key={anime.id} to={`/anime/${anime.id}`} className='card-link'>
              <div className='card'>
                <img src={anime.attributes.posterImage.original} alt={anime.attributes.canonicalTitle} />
                <div className="desc">
                  <p className='title'>{anime.attributes.canonicalTitle}</p>
                  <p className='click'>Click to see more</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default AnimePage;