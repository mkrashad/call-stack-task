import React from 'react';
import './search.scss';
import { fetchGitHubRepo } from '../../api';

/*
 * onSearchStart - method that accepts a search keyword (string)
 * updateLoadingState - method that changes loading state (boolean)
 */
function Search({ onSearchResults, updateLoadingState, stopUpdating }) {
  const [text, updateText] = React.useState('');

  async function fetchItems() {
    updateLoadingState(true)

    const result = await fetchGitHubRepo(text);
    onSearchResults && onSearchResults(result);
    updateLoadingState(false);
  }

  return (
    <div className="searchContainer">
      <input
        value={text}
        placeholder="Github repository name"
        onChange={({ target: { value } }) => updateText(value)}
        type="text"
      />

      <button onClick={() => fetchItems(text)}>search</button>
    </div>
  );
}

export default Search;
