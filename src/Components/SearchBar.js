import React, { useState } from "react";


const SearchBar = () => {
  const [searchText, setSearchText] = useState(null);

  const searchButtonClicked =() =>{
    setSearchText('')
  }
  return (
    <div className="mt-2 ml-44">
      <form onSubmit={(e)=> e.preventDefault()}>
        <input
          type="text"
          placeholder="Search for videos"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-96 h-8 rounded-2xl m-2 p-2 border border-black"
        />
        <button onClick={()=> searchButtonClicked()} className="w-12 h-8 border border-black rounded-2xl">🔍</button>
      </form>
    </div>
  );
};

export default SearchBar;
