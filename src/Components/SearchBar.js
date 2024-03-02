import React, { useState, useEffect } from "react";
import { SEARCH_API } from "../Utils/Constants";

//This is the search bar component
const SearchBar = () => {
  const [searchText, setSearchText] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const searchButtonClicked = () => {
    setSearchText("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {  //Setting the debouncing feature which will show search suggestions
      showSearchResults();    //Suggesions will apear after every 0.5 secs to avoid overcalling of search API
    }, 500);

    return () => {
      clearTimeout(timer); //Clearing the timer as a part of garbage collection
    };
  }, [searchText]);

  const showSearchResults = async () => {
    const data = await fetch(SEARCH_API + searchText); //Calling the search bar API along with the search text.
    const json = await data.json();
    if (!searchText) return;
    //console.log(json)
    setSearchResults(json[1]); //Setting the state with the search suggestions.
  };

  return (
    <div className="mt-2 ml-44">
      <form onSubmit={(e) => e.preventDefault()} className=" flex flex-row">
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Search for videos"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-96 h-8 rounded-2xl m-2 p-2 border border-black"
          />
          {searchText && (
            <div className="">
              <ul className="bg-white w-96 text-black ml-3 rounded-2xl shadow-xs pl-1 absolute z-10">
                {searchResults.map((items) => (
                  <li
                    className="m-1 hover:bg-gray-300 rounded-lg pl-2 cursor-pointer border-b-4 font-serif"
                    key={items}
                  >
                    {items}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button
          onClick={() => searchButtonClicked()}
          className="w-12 mt-2 h-8 border border-black rounded-2xl"
        >
          🔍
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

