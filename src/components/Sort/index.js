import React, { useState } from 'react';
import './sort.scss';

const orderArrows = {
  '1': '↑',
  '-1': '↓',
};

/**
 *
 * @param currentRepos - array of repos from GH endpoint
 * @param onSort - function, accepts newly sorted repos
 *
 */
function Sort({ currentRepos, onSort }) {
  const [currentKey, updateKey] = useState('');
  const [currentOrder, updateOrder] = useState(1);

  function sort(key) {
    let order = currentOrder;

    if (key === currentKey) {
      order = currentOrder === 1 ? -1 : 1;
    }

    const sortedRepos = [...currentRepos].sort((a, b) => {
      if (a[key] < b[key]) return -1 * order;
      if (a[key] > b[key]) return 1 * order;
      return 0;
    });

    if (key !== currentKey) {
      updateKey(key);
    }

    updateOrder(order);

    onSort(sortedRepos);
  }

  return (
    <div className="sortContainer">
      <button
        className="btn"
        onClick={() => {
          sort('title');
        }}>
        {`Name ${currentKey === 'title' ? orderArrows[currentOrder] : ''}`}
      </button>
      <button
        className="btn "
        onClick={() => {
          sort('stars');
        }}>
        {`Stars ${currentKey === 'stars' ? orderArrows[currentOrder] : ''}`}
      </button>
    </div>
  );
}

export default Sort;
