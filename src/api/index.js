const API_ROOT = 'https://api.github.com';

/**
 *
 * @param repoName - string, name of the repo
 * @param perPage - number, how many results per page
 * @param page - number, pagination page number
 * @returns Promise of Object that contains:
 *          error: string or null, error message
 *          repos: results
 */
export async function fetchGitHubRepo(repoName, perPage = 100, page = 1) {
  const query = encodeURIComponent(repoName);

  const result = {
    repos: [],
    error: null,
  };
  try {
    const response = await fetch(
      `${API_ROOT}/search/repositories?q=${query}&per_page=${perPage}&page=${page}`,
      {
        method: 'GET',
        mode: 'cors',
      },
    );

    result.repos = await response.json().then(repos =>
      repos.items.map(item => ({
        id: item.id,
        avatar: item.owner.avatar_url,
        owner: item.owner.login,
        title: item.name,
        stars: item.stargazers_count,
        timestamp: item.created_at,
        url: item.html_url,
      })),
    );
  } catch (e) {
    result.error = e.message;
  }

  return result;
}
