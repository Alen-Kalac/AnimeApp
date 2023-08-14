import React, { createContext, useEffect, useState } from "react";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
  // Retrieve favouriteAnime from local storage if it exists, otherwise, set it to an empty object
  const [favouriteAnime, setFavouriteAnime] = useState(
    JSON.parse(localStorage.getItem("favouriteAnime")) || []
  );

  // Update local storage when favouriteAnime state changes
  useEffect(() => {
    localStorage.setItem("favouriteAnime", JSON.stringify(favouriteAnime));
  }, [favouriteAnime]);

  const values = {
    favouriteAnime,
    setFavouriteAnime,
  };

  return (
    <appContext.Provider value={values}>{children}</appContext.Provider>
  );
};

export { appContext, AppContextProvider };
