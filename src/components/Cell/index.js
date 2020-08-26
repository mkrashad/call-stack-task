import React from 'react';
import './cell.scss';

/**
 * @param id - string
 * @param title - string
 * @param owner - string
 * @param stars - number
 * @param timestamp - number
 * @param url - string
 * @param avatar - string
 * @param isFavorite - boolean
 * @param onPress = callback invoked when call is pressed
 * @param onAddFavorite - function, accepts id of repo to toggle favorite option
 */
function Cell({
  id,
  title,
  owner,
  stars,
  avatar,
  isFavorite,
  onPress,
  onAddToFavorite,
}) {
  return (
    <div className="rowContainer">
      <button
        onClick={() => onAddToFavorite(id)}
        className={`favoriteContainer ${isFavorite ? 'favoriteRepo' : ''}`}>
        <p>&#9829;</p>
      </button>
      <div onClick={onPress} className="rowContent">
        <img alt="github repo owner" src={avatar} />
        <p className="owner">{`${owner}/${title}`}</p>
        <div className="stars">
          <p>{stars}</p>
          <span>&#9733;</span>
        </div>
      </div>
    </div>
  );
}

export default Cell;
