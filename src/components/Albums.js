import React from "react";

const Albums = ({ artist }) =>
  <ul>
    {artist.map((item) =>
      <li key={item.collectionId}>
        <img src={item.artworkUrl100} alt={item.collectionName} />
        {item.collectionName}
      </li>
    )}
  </ul>

export default Albums;