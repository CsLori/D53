import axios from 'axios';

export const getRepos = repository => {
  console.log(repository);
  // {&page, per page, sort, order}
  return axios
    .get(`https://api.github.com/search/repositories?q=${repository}}`)
    .then(({ data: { items } }) => {
      return items;
    });
};
// { params: { topic: topic_slug
