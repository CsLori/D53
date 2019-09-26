import axios from 'axios';

export const getRepos = repoName => {
  console.log(repoName);
  // {&page, per page, sort, order}
  return axios
    .get(`https://api.github.com/search/repositories?q=${repoName}`)
    .then(({ data: { items } }) => {
      return items;
    });
};
