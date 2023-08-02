import { useState,useEffect } from 'react';
import axios from 'axios';
import './index.scss'

function MangaPage() {
  const [mangaList, setMangaist] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10; // Number of manga to fetch per request

  useEffect(() => {
    // Function to fetch manga by genre and sort by popularity
    const fetchMangaByGenre = async () => {
      try {
        const response = await axios.get(
          'https://kitsu.io/api/edge/manga',
          {
            params: {
              'filter[genres]': "action", // Sortiranje po Zanru
              'sort': 'popularityRank', // Sortiranje po popularnosti
              'page[offset]': offset, // Broj manga/mangi po stranici
            },
          }
        );

       console.log(response.data.data) ;
      } catch (error) {
        console.error('Error fetching manga:', error);
      }
    };

    fetchMangaByGenre();
  }, [offset]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };
  return (
    <>
 <h1>Manga</h1>
    </>
  )
}

export default MangaPage
