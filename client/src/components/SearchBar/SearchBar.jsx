import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import "./SearchBar.css";
import Card from "../Card/Card";

const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const HomePage = () => {
  const [searchItem, setSearchItem] = useState("");
  const movies = useSelector((state) => state.search.movies);
  const isSearched = useSelector((state) => state.search.isSearched);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setSearchItem(event.target.value);
  };

  const handleSearch = () => {
    axios
      .get(SEARCHAPI + searchItem)
      .then((res) => {
        dispatch({ type: 'SET_MOVIES', payload: res.data.results });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-black">
      <div className="bg-black flex items-start justify-center pt-6 searchbar">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to Movies Hub</h1>

          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search for movies"
              className="py-2 px-4 mr-2 rounded-l-lg focus:outline-none text-black"
              value={searchItem}
              onChange={handleInputChange}
            />
            <button
              className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded-r-lg focus:outline-none"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {!isSearched ? (
        <div className=" text-3xl text-center mt-2 pt-40 text-white content">
          Enter Any Movie Name
        </div>
      ) : movies.length === 0 ? (
        <div className="text-3xl text-center mt-2 pt-40 text-white content">
          No Search Results Found
        </div>
      ) : (
        <Card />
      )}
    </div>
  );
};

export default HomePage;
