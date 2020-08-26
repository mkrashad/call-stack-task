import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import Sort from '../';

test('should sort repos by NAME asc -> desc -> asc', () => {
  const updateRepos = jest.fn();
  const { getByText } = render(
    <Sort onSort={updateRepos} currentRepos={unsortedRepos} />,
  );
  const button = getByText('Name');
  fireEvent.click(button);
  expect(updateRepos).toHaveBeenLastCalledWith(ascNameRepos);
  fireEvent.click(button);
  expect(updateRepos).toHaveBeenLastCalledWith(descNameRepos);
  fireEvent.click(button);
  expect(updateRepos).toHaveBeenLastCalledWith(ascNameRepos);
});

test('should sort repos by STARS asc -> desc -> asc', () => {
  const updateRepos = jest.fn();
  const { getByText } = render(
    <Sort onSort={updateRepos} currentRepos={unsortedRepos} />,
  );
  const button = getByText('Stars');
  fireEvent.click(button);
  expect(updateRepos).toHaveBeenLastCalledWith(ascStarsRepos);
  fireEvent.click(button);
  expect(updateRepos).toHaveBeenLastCalledWith(descStarsRepos);
  fireEvent.click(button);
  expect(updateRepos).toHaveBeenLastCalledWith(ascStarsRepos);
});

test('should sort repos by STARS asc and by NAME asc', () => {
  const updateRepos = jest.fn();
  const { getByText } = render(
    <Sort onSort={updateRepos} currentRepos={unsortedRepos} />,
  );
  const starsButton = getByText('Stars');
  const nameButton = getByText('Name');

  fireEvent.click(starsButton);
  expect(updateRepos).toHaveBeenLastCalledWith(ascStarsRepos);
  fireEvent.click(nameButton);
  expect(updateRepos).toHaveBeenLastCalledWith(ascNameRepos);
});

const unsortedRepos = [
  {
    title: 'is',
    stars: 2222,
  },
  {
    title: 'awesome',
    stars: 1,
  },
  {
    title: 'callstack',
    stars: 9999,
  },
  {
    title: '-callstack',
    stars: 0,
  },
];

const ascNameRepos = [
  {
    title: '-callstack',
    stars: 0,
  },
  {
    title: 'awesome',
    stars: 1,
  },
  {
    title: 'callstack',
    stars: 9999,
  },
  {
    title: 'is',
    stars: 2222,
  },
];

const descNameRepos = [
  {
    title: 'is',
    stars: 2222,
  },
  {
    title: 'callstack',
    stars: 9999,
  },
  {
    title: 'awesome',
    stars: 1,
  },
  {
    title: '-callstack',
    stars: 0,
  },
];

const ascStarsRepos = [
  {
    title: '-callstack',
    stars: 0,
  },
  {
    title: 'awesome',
    stars: 1,
  },
  {
    title: 'is',
    stars: 2222,
  },
  {
    title: 'callstack',
    stars: 9999,
  },
];

const descStarsRepos = [
  {
    title: 'callstack',
    stars: 9999,
  },
  {
    title: 'is',
    stars: 2222,
  },
  {
    title: 'awesome',
    stars: 1,
  },
  {
    title: '-callstack',
    stars: 0,
  },
];
