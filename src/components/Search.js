import React from "react";

const Search = ({ getAlbums }) =>
  <form onSubmit={getAlbums}>
    <input type="text" name="artist" placeholder="Artist..." />
    <button>Submit</button>
  </form>

export default Search;