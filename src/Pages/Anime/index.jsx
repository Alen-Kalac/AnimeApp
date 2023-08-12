import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function AnimePage() {
  const [animeList, setAnimeList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [uniqueAnimeIds, setUniqueAnimeIds] = useState(new Set()); // Keep track of unique anime IDs
  const defaultCategory = 'action';

  const limit = 10;
  const threshold = 200;

  useEffect(() => {
    const fetchAnimeByCategory = async () => {
      try {
        const categoryToFetch = selectedCategory || defaultCategory;
        const response = await axios.get(
          `https://kitsu.io/api/edge/anime?filter[categories]=${categoryToFetch}&sort=popularityRank&page[offset]=${offset}`
        );

        const filteredAnimeList = searchInput
          ? response.data.data.filter(anime =>
              anime.attributes.canonicalTitle.toLowerCase().startsWith(searchInput.toLowerCase())
            )
          : response.data.data;

        const newAnimeList = filteredAnimeList.filter(anime => !uniqueAnimeIds.has(anime.id));
        setAnimeList((prevAnimeList) => [...prevAnimeList, ...newAnimeList]);
        newAnimeList.forEach(anime => uniqueAnimeIds.add(anime.id)); // Add new IDs to the set
      } catch (error) {
        console.error('Error fetching anime:', error);
      }
    };

    fetchAnimeByCategory();
  }, [selectedCategory, offset, searchInput, uniqueAnimeIds]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setOffset(0);
    setAnimeList([]);
    setUniqueAnimeIds(new Set()); // Reset unique anime IDs when changing category
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    setOffset(0);
    setAnimeList([]);
    setUniqueAnimeIds(new Set()); // Reset unique anime IDs when changing search
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - threshold) {
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
            <select name='Choose a category' onChange={handleCategoryChange}>
            <option value=''>Choose a category</option>
              <option value='adventure'>Adventure</option>
              <option value='action'>Action</option>
              <option value='fantasy'>Fantasy</option>
            </select>
          </div>
          <div className='filter'>
            <label>
              <AiOutlineSearch />
              <input
                type='text'
                className='search'
                placeholder='Search'
                value={searchInput}
                onChange={handleSearchChange} // Call handleSearchChange on input change
              />
            </label>
          </div>
        </div>

        <div className='cards'>
          {animeList.map((anime) => (
     <Link
     key={anime.id}
     to={{
       pathname: `/anime/${anime.id}`,
       search: `?title=${anime.attributes.canonicalTitle}&description=${anime.attributes.description}&image=${anime.attributes.posterImage.original}`
     }}
     className='card-link'
   >
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
