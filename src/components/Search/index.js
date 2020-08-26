import React, { useState } from 'react';
import './search.scss';
import { fetchGitHubRepo } from '../../api';

const cache = {};

/*
 * onSearchStart - method that accepts a search keyword (string)
 * updateLoadingState - method that changes loading state (boolean)
 */
function Search({ onSearchResults, updateLoadingState }) {
  const [text, updateText] = useState('');

  async function fetchItems() {
    updateLoadingState(true);

    if (!(text in cache)) {
      cache[text] = await fetchGitHubRepo(text);
    }

    onSearchResults && onSearchResults(cache[text]);
    updateLoadingState(false);
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      fetchItems(text);
    }
  };

  return (
    <div className="input-group input-group-sm mb-3">
      <input
        value={text}
        placeholder="Github repository name"
        onChange={({ target: { value } }) => updateText(value)}
        type="text"
        onKeyDown={handleKeyPress}
        className="form-control"
      />
    </div>
  );
}

export default Search;
