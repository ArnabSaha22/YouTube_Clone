import React, { useState, useEffect } from "react";
//import { SEARCH_API } from "../Utils/Constants";

const SearchBar = () => {
  const [searchText, setSearchText] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const searchButtonClicked = () => {
    setSearchText("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showSearchResults();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const showSearchResults = async () => {
    //const data = await fetch(SEARCH_API + searchText);
    //const json = await data.json();
    // if (!searchText) return;
    //console.log(json[1]);
    // setSearchResults(json[1]);
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

/**
 * 
 * const searchButtonClicked = async () => {
    setSearchText("");
    const splitData = searchText.split(" ");
    const data = await fetch(SEARCH_API + splitData.join(" "));
    const json = await data.json();
    console.log(json[1]);
    setSearchResults(json[1]);
  };

  const searchOptionClicked = async (items) => {
    const splitData2 = items.split(" ");
    const data = await fetch(SEARCH_API2 + splitData2.join(" "))
    console.log(data)
  };
 * 
 */
